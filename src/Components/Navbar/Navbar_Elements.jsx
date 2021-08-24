import React, { Component } from "react";
import { Button } from "reactstrap";
import Navlogo from "./navbar_style.css/navlogo.png";
import "./navbar_style.css/navstyle.css";

//Very important for navbar, else it wont work
import "bootstrap/dist/js/bootstrap.min.js";
import { useDispatch, useSelector } from "react-redux";
import { signout } from "../../actions";

const NavDesign = (props) => {
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const logout = () => {
    dispatch(signout());
  };

  console.log(auth.authenticate);

  //auth.authenticate ? renderForLoggedInUsers() : renderForNonLoggedInUsers();
  if (auth.authenticate) {
    return (
      <React.Fragment>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark text-light sticky-top">
          <div className="container-fluid">
            {/* <a className="navbar-brand padman" href="#">
            FOODIEZZ PARADISE
          </a> */}
            <a className="navbar-brand" rel="home" href="#">
              <img className="styleman" src={Navlogo} />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item padman">
                  <a className="nav-link " aria-current="page" href="/">
                    Home
                  </a>
                </li>
                <li className="nav-item dropdown padman">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Cuisines
                  </a>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <li>
                      <a
                        className="dropdown-item"
                        href="http://localhost:3000/Cuisines"
                      >
                        Indian
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        href="http://localhost:3000/Cuisines"
                      >
                        Italian
                      </a>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        href="http://localhost:3000/Cuisines"
                      >
                        American
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        href="http://localhost:3000/Cuisines"
                      >
                        Chinese
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        href="http://localhost:3000/Cuisines"
                      >
                        Fast Food & BBQ
                      </a>
                    </li>
                  </ul>
                </li>

                <li className="nav-item">
                  <a className="nav-link" href="http://localhost:3000/SignIn">
                    Login
                  </a>
                </li>

                <li className="nav-item">
                  <a className="nav-link" href="/SignUp">
                    Signup
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/SignUp" onClick={logout}>
                    Signout
                  </a>
                </li>

                <li className="nav-item padmanpero">
                  <a className="nav-link active" aria-current="page" href="#">
                    About
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </React.Fragment>
    );
  } else {
    return (
      <React.Fragment>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark text-light sticky-top">
          <div className="container-fluid">
            {/* <a className="navbar-brand padman" href="#">
            FOODIEZZ PARADISE
          </a> */}
            <a className="navbar-brand" rel="home" href="#">
              <img className="styleman" src={Navlogo} />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item padman">
                  <a className="nav-link " aria-current="page" href="/">
                    Home
                  </a>
                </li>
                <li className="nav-item dropdown padman">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Cuisines
                  </a>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <li>
                      <a
                        className="dropdown-item"
                        href="http://localhost:3000/Cuisines"
                      >
                        Indian
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        href="http://localhost:3000/Cuisines"
                      >
                        Italian
                      </a>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        href="http://localhost:3000/Cuisines"
                      >
                        American
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        href="http://localhost:3000/Cuisines"
                      >
                        Chinese
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        href="http://localhost:3000/Cuisines"
                      >
                        Fast Food & BBQ
                      </a>
                    </li>
                  </ul>
                </li>

                <li className="nav-item">
                  <a className="nav-link" href="http://localhost:3000/SignIn">
                    Login
                  </a>
                </li>

                <li className="nav-item">
                  <a className="nav-link" href="/SignUp">
                    Signup
                  </a>
                </li>

                <li className="nav-item padmanpero">
                  <a className="nav-link active" aria-current="page" href="#">
                    About
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </React.Fragment>
    );
  }
};

export default NavDesign;
