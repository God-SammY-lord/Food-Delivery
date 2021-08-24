import React, { useEffect, useState } from "react";
import "./signin_styles.css";
import { isUserLoggedIn, login } from "../../actions/auth.actions";
import { useSelector, useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState("");
  const auth = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  useEffect(() => {
    if (!auth.authenticate) {
      dispatch(isUserLoggedIn());
    }
  }, {});

  const userLogin = (e) => {
    e.preventDefault();

    const user = {
      email,
      password,
    };
    dispatch(login(user));
  };

  if (auth.authenticate) {
    return <Redirect to={"/SignedInCuisines"} />;
  }

  return (
    <div className="container pant">
      <div className="p-5 mb-4 bg-light rounded-3">
        <div className="container-fluid py-5">
          <h1 className="display-5 fw-bold">SignIn</h1>
        </div>
      </div>
      <form>
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
          <button
            onClick={userLogin}
            type="submit"
            className="btn btn-outline-primary"
          >
            SignIn
          </button>
        </div>
        <div className="container sam">
          <a
            className="btn btn-lg btn-outline-danger"
            href="http://localhost:3000/SignUp"
          >
            Don't have an Account? SignUp Now!!!
          </a>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
