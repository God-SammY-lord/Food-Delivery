import React, { Component } from "react";
import { useEffect, useState } from "react";
import "./signup_style.css";
import { useSelector, useDispatch } from "react-redux";
import { signup } from "../../actions/user.actions";
import { Redirect } from "react-router";

const SignUp = (props) => {
  const [lastName, setlastName] = useState("");
  const [firstName, setfirstName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState("");
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  const userSignUp = (e) => {
    e.preventDefault();

    const user = {
      firstName,
      lastName,
      email,
      password,
    };
    dispatch(signup(user));
  };

  if (auth.authenticate) {
    return <Redirect to={"/Cuisines"} />;
  }

  if (user.loading) {
    return (
      <div class="spinner-border text-primary" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    );
  }

  return (
    <React.Fragment>
      {user.message}
      <div className="container pant">
        <div className="p-5 mb-4 bg-light rounded-3">
          <div className="container-fluid py-5">
            <h1 className="display-5 fw-bold">SignUp</h1>
          </div>
        </div>
        <form>
          <div class="row separate">
            <div class="col">
              <input
                type="text"
                class="form-control"
                placeholder="First name"
                value={firstName}
                aria-label="First name"
                onChange={(e) => setfirstName(e.target.value)}
              />
            </div>
            <div class="col">
              <input
                type="text"
                class="form-control"
                placeholder="Last name"
                value={lastName}
                aria-label="Last name"
                onChange={(e) => setlastName(e.target.value)}
              />
            </div>
          </div>
          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              value={email}
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              aria-label="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              value={password}
              className="form-control"
              id="exampleInputPassword1"
              aria-label="Set a Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="mb-3 form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
            />
            <label className="form-check-label" for="exampleCheck1">
              Accept Terms and Conditions
            </label>
          </div>
          <div className="container">
            <a
              className="btn btn-lg btn-outline-primary"
              href=""
              onClick={userSignUp}
            >
              SignUp
            </a>
          </div>
        </form>
      </div>
    </React.Fragment>
  );
};

export default SignUp;
