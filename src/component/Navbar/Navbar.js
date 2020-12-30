import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import "./Navbar.css";

function Navbar(props) {
  const notUser = (
    <div className="nav-btn">
      <div className="nav-links">
        <ul>
          <li className="nav-link">
            <Link to="/">Home</Link>
          </li>
          <li className="nav-link">
            <Link to="#">
              Menu<i className="fas fa-caret-down"></i>
            </Link>
            <div className="dropdown">
              <ul>
                <li className="dropdown-link">
                  <Link to="#">Link 1</Link>
                </li>
                <li className="dropdown-link">
                  <Link to="#">Link 2</Link>
                </li>
                <li className="dropdown-link">
                  <Link to="#">Link 4</Link>
                </li>
                <div className="arrow"></div>
              </ul>
            </div>
          </li>
          <li className="nav-link">
            <Link to="/dashboard/services">Services</Link>
          </li>
          <li className="nav-link">
            <Link to="/about">About</Link>
          </li>
        </ul>
      </div>

      <div className="log-sign">
        <Link to="/signin" className="btn transparent">
          Log in
        </Link>
        <Link to="/signup" className="btn solid">
          Sign up
        </Link>
      </div>
    </div>
  );
  const user = (
    <div className="nav-btn">
      <div className="nav-links">
        <ul>
          <li className="nav-link">
            <Link to="/">Home</Link>
          </li>
          <li className="nav-link">
            <Link to="#">
              Menu<i className="fas fa-caret-down"></i>
            </Link>
            <div className="dropdown">
              <ul>
                <li className="dropdown-link">
                  <Link to="#">Link 1</Link>
                </li>
                <li className="dropdown-link">
                  <Link to="#">Link 2</Link>
                </li>
                <li className="dropdown-link">
                  <Link to="#">Link 4</Link>
                </li>
                <div className="arrow"></div>
              </ul>
            </div>
          </li>
          {/* <li className="nav-link">
            <Link to="/dashboard/services">Services</Link>
          </li> */}
          {/* <li className="nav-link"> */}
          <li className="nav-link">
            <Link to="/about">About</Link>
          </li>
        </ul>
      </div>

      {/* <div className="log-sign"> */}
      <div className="log-sign">
        {/* <Link to="/signin" className="btn transparent">
          Log in
        </Link>
        <Link to="/signup" className="btn solid">
          Sign up
        </Link> */}
        {/* <Link to={"/user/" + auth.isAuthenticated().user._id}>
          <Button
            style={isActive(
              history,
              "/user/" + auth.isAuthenticated().user._id
            )}
          >
            My Profile
          </Button>
          <Button
            color="inherit"
            onClick={() => {
              auth.signout(() => history.push("/"));
            }}
          >
            Sign out
          </Button>
        </Link> */}
      </div>
    </div>
  );
  return (
    <>
      <header>
        <div className="container">
          <input type="checkbox" name="" id="check" />

          <div className="logo-container">
            <h3 className="logo">
              Poplar<span>Power</span>
            </h3>
          </div>

          <div className="nav-btn">
            <div className="nav-links">
              <ul>
                <li className="nav-link">
                  <Link to="/">Home</Link>
                </li>
                <li className="nav-link">
                  <Link to="#">
                    Menu<i className="fas fa-caret-down"></i>
                  </Link>
                  <div className="dropdown">
                    <ul>
                      <li className="dropdown-link">
                        <Link to="#">Link 1</Link>
                      </li>
                      <li className="dropdown-link">
                        <Link to="#">Link 2</Link>
                      </li>
                      <li className="dropdown-link">
                        <Link to="#">Link 4</Link>
                      </li>
                      <div className="arrow"></div>
                    </ul>
                  </div>
                </li>
                {/* <li className="nav-link">
                  <Link to="/dashboard/services">Services</Link>
                </li> */}
                <li className="nav-link">
                  <Link to="/about">About</Link>
                </li>
              </ul>
            </div>

            <div className="log-sign">
              <Link to="/signin" className="btn transparent">
                Log in
              </Link>
              <Link to="/signup" className="btn solid">
                Sign up
              </Link>
            </div>
          </div>
          <div className="hamburger-menu-container">
            <div className="hamburger-menu">
              <div></div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Navbar;
