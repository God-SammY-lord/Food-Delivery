import React, { Component } from "react";
import "./footer_style.css";
import Navlogo from "./navlogo.png";
import Delivery from "./fastdelivery.jpg";

class Footer extends Component {
  render() {
    return (
      <footer className="special">
        <div className="container-fluid padding">
          <div className="row text-center">
            <div className="col-md-4">
              <a className="navbar-brand" href="#">
                <div className="logo-image chotacontainer">
                  <img src={Navlogo} className="img-fluid verychota" />
                </div>
              </a>
              <hr className="light lighter" />
              <p className="lighter">sammysavage789@gmail.com</p>
              <p className="lighter">Kaiga Township</p>
              <p className="lighter">Karwar, Karnataka, 581400</p>
            </div>
            <div className="col-md-4 konnect">
              <div className="footer-social-icons">
                <h4 className="_14 lighter">Stay Connected</h4>
                <ul className="social-icons trump">
                  <li>
                    <a href="" className="social-icon konnect">
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
            <div className="col-md-4">
              <div className="logo-image chotacontainer">
                <img src={Delivery} className="img-fluid verychota" />
              </div>
              <h5 className="lighter konnected">Lightning Fast Delivery</h5>
              <hr className="light-200 lighter" />
              <h5 className="lighter">
                Do give your suggestions and fire away any queries
              </h5>
              <hr className="light-200" />
              <p>
                <a href="/Sahil-website/Reply.html" className="lighter">
                  Feedback
                </a>
              </p>
              <p>
                <a href="/Sahil-website/Reply.html" className="lighter">
                  Suggestions
                </a>
              </p>
              <p>
                <a href="/Sahil-website/Reply.html" className="lighter">
                  Queries
                </a>
              </p>
            </div>
            <div className="col-12">
              <hr className="light-100 lighter" />
              <h5 className="lighter">© FOODIEZZ PARADISE</h5>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
