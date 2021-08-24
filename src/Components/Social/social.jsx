import React, { Component } from "react";
import "./social_style.css";
class Social extends Component {
  render() {
    return (
      <div className="container-fluid mysocial my-5">
        <div className="row text-center">
          <div className="col-12">
            <h2>Connect With The Owner</h2>
          </div>
          <div className="footer-social-icons">
            <ul className="social-icons">
              <li>
                <a href="" className="social-icon">
                  {" "}
                  <i className="fa fa-linkedin"></i>
                </a>
              </li>
              <li>
                <a href="" className="social-icon">
                  {" "}
                  <i className="fa fa-github"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Social;
