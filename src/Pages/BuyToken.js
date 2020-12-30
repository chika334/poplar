import React, { useState } from "react";
import { token } from "../api-user/token-api";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Icon from "@material-ui/core/Icon";
import { Redirect } from "react-router-dom";
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import Checkbox from '@material-ui/core/Checkbox';
import PropTypes from "prop-types";
import Input from '@material-ui/core/Input';
import MaskedInput from 'react-text-mask';
import TextField from "@material-ui/core/TextField";
import { withStyles } from "@material-ui/core/styles";

const styles = (theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
  card: {
    maxWidth: 600,
    margin: "auto",
    textAlign: "center",
    marginTop: theme.spacing(5),
    paddingBottom: theme.spacing(2),
  },
  error: {
    verticalAlign: "middle",
  },
  title: {
    marginTop: theme.spacing(2),
    color: theme.palette.openTitle,
  },
  textField: {
    marginLeft: theme.spacing(),
    marginRight: theme.spacing(),
    width: 300,
  },
  submit: {
    margin: "auto",
    marginBottom: theme.spacing(2),
  },
  // textField: {
  //   width: '25ch',
  // },
});

// text mask for number
// function TextMaskCustom(props) {
//   const { inputRef, ...other } = props;

//   return (
//     <MaskedInput
//       {...other}
//       ref={(ref) => {
//         inputRef(ref ? ref.inputElement : null);
//       }}
//       mask={['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
//       placeholderChar={'\u2000'}
//       showMask
//     />
//   );
// }

// TextMaskCustom.propTypes = {
//   inputRef: PropTypes.func.isRequired,
// };

function BuyToken(props) {
  const { classes } = props;
  const [checked, setChecked] = React.useState(false);
  const [values, setValues] = useState({
    meter: "",
    amount: "",
    // textmask: '(+234)    -      ',
    phone: "",
    redirectToReferrer: false,
  });

  const { amount, meter, phone, error, redirectToReferrer } = values;

  const handleChange = (name) => (event) => {
    setValues({ ...values, [name]: event.target.value });
  };

  const handleMobileChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  const handleCheckChange = (event) => {
    setChecked(event.target.checked);
  };

  const clickSubmit = (e) => {
		const user = {
      meter: meter || undefined,
      amount: amount || undefined,
      phone: phone || undefined,
      // textmask: textmask || undefined,
    };

    // console.log(values)

    // signin(user).then((data) => {
    //   if (data.error) {
    //     console.log(data.error);
    //     setValues({ error: data.error });
    //   } else {
    //     auth.authenticate(data, () => {
    //       setValues({ redirectToReferrer: true });
    //     });
    //   }
    // });
    
		const result = token(user)
		if(!result.isOk) {
			setValues({ error: result.error });
		}
		if(result.isOk) {
			setValues({ redirectToReferrer: true })
		}
  }

  const { from } = props.location.state || {
    from: { pathname: "/dashboard/tokensuccess" },
  };
  if (redirectToReferrer) {
    return <Redirect to={from} />;
  }

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography type="headline" component="h2" className={classes.title}>
          Buy Token
        </Typography>
        <FormControl fullWidth className={classes.margin} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-amount">Meter Number</InputLabel>
          <OutlinedInput
            id="outlined-adornment-amount"
            // value={values.amount}
            onChange={handleChange('meter')}
            startAdornment={<InputAdornment position="start">Meter Number</InputAdornment>}
            labelWidth={60}
          />
        </FormControl>
        <br />
        <FormControl fullWidth className={classes.margin} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-amount">Amount</InputLabel>
          <OutlinedInput
            id="outlined-adornment-amount"
            // value={values.amount}
            onChange={handleChange('amount')}
            startAdornment={<InputAdornment position="start">₦</InputAdornment>}
            labelWidth={60}
          />
        </FormControl>
        <br />
        <div className="new">
          <p>Check to Send Token by SMS to </p>
          <Checkbox
            checked={checked}
            onChange={handleCheckChange}
            color="primary"
            inputProps={{ 'aria-label': 'secondary checkbox' }}
          />
        </div>
        <FormControl fullWidth className={classes.margin} variant="outlined">
          <TextField
            id="mobile"
            label="Mobile"
            // className={classes.textField}  
            value={phone || ""}
            type="number"
            variant="outlined"
            onChange={handleChange("phone")}
            margin="normal"
          />
        </FormControl>
        {" "}
        <br />
        {/* <FormControl fullWidth className={classes.margin} variant="outlined">
          <InputLabel htmlFor="formatted-text-mask-input">react-text-mask</InputLabel>
          <Input
            value={values.textmask}
            onChange={handleMobileChange}
            name="textmask"
            id="formatted-text-mask-input"
            inputComponent={TextMaskCustom}
          />
        </FormControl> */}
        {/* <br />{" "} */}
        {error && (
          <Typography component="p" color="error">
            <Icon color="error" className={classes.error}>
              error{" "}
            </Icon>
            {error}
          </Typography>
        )}
      </CardContent>
      <CardActions>
        <Button
          color="primary"
          variant="contained"
          onClick={clickSubmit}
          className={classes.submit}
        >
          Submit
        </Button>
      </CardActions>
    </Card>
  );
}

BuyToken.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(BuyToken);
