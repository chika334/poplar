import React, { Component } from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";

import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { indigo, pink } from "@material-ui/core/colors";
import { BrowserRouter } from "react-router-dom";

// component
import Navbar from "./component/Navbar/Navbar";
import Footer from "./component/Footer/Footer";
import Profile from "./component/Profile/Profile";
import ProtectedRoutes from "./protectedRoutes/ProtectedRoutes.js";

// pages
import Login from "./component/Login/Signin";
import Register from "./component/Register/Signup";
import Dashboard from "./component/Dashboard/Dashboard";
import Home from "./Pages/Home";
import About from "./Pages/About.js";
import Error from "./Pages/Error.js";
import { getUserDetails, getUser } from "./_action/userAction";

const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#757de8",
      main: "#3f51b5",
      dark: "#002984",
      contractText: "#fff",
    },
    secondary: {
      light: "#ff79b0",
      main: "#ff4081",
      dark: "#c60055",
      contractText: "#000",
    },
    openTitle: indigo["400"],
    protectedTitle: pink["400"],
    type: "light",
  },
});

export class App extends Component {
  componentDidMount() {
    if (localStorage.getItem("token")) {
      store.dispatch(getUserDetails());
      store.dispatch(getUser());
    }
  }
  render() {
    return (
      // <BrowserRouter>
        <Provider store={store}>
          <MuiThemeProvider theme={theme}>
            <Navbar />
            <Switch>
              <Route exact path={"/"} component={Home} />
              <Route exact path={"/login"} component={Login} />
              <Route exact path={"/signup"} component={Register} />
              <Route exact path={"/about"} component={About} />
              <Route component={Error} />
              {/* profile */}
              <ProtectedRoutes path="/profile/:path?">
                <Switch>
                  <ProtectedRoutes
                    path="/profile/dashboard"
                    exact
                    component={Dashboard}
                  />
                  <ProtectedRoutes path="/profile" exact component={Profile} />
                  <Route component={Error} />
                </Switch>
              </ProtectedRoutes>
            </Switch>
            <Footer />
          </MuiThemeProvider>
        </Provider>
      // {/* </BrowserRouter> */}
    );
  }
}

export default App;
