import React, { Component } from "react";
import Navlogo from "./navlogo.png";
import Car2 from "./car2.jpg";
import Car3 from "./car3.jpg";
import Car1 from "./car1.jpg";

class Carousel extends Component {
  render() {
    return (
      <div id="myCarousel" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide-to="0"
            className="active"
            aria-label="Slide 1"
            aria-current="true"
          ></button>
          <button
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide-to="1"
            aria-label="Slide 2"
            className=""
          ></button>
          <button
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide-to="2"
            aria-label="Slide 3"
            className=""
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={Car1} className="d-block w-100" alt="..." />

            <div className="container">
              <div className="carousel-caption text-start">
                <h1 className="VIRAT">ORDER NOW!!</h1>
                <p className="VIRATCENTURY">
                  Exquisite cuisines delivered right at your door step!!
                  <br />
                  Login/SingUp to order
                </p>
                <p>
                  <a
                    className="btn btn-lg btn-outline-danger"
                    href="http://localhost:3000/SignIn"
                  >
                    Login/SignUp
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <img src={Car2} className="d-block w-100" alt="..." />

            <div className="container">
              <div className="carousel-caption">
                <h1 className="VIRAT">
                  A wide range of exquisite cuisines from Mitchelin star chefs
                </h1>
                <p className="VIRAT18">
                  Check out the wide range of mouth-watering cuisines
                </p>
                <p>
                  <a
                    className="btn btn-lg btn-outline-success"
                    href="http://localhost:3000/Cuisines"
                  >
                    Explore
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <img src={Car3} className="d-block w-100" alt="..." />

            <div className="container">
              <div className="carousel-caption text-end">
                <h1 className="VIRAT">ABOUT</h1>
                <p className="VIRATCENTURY">Know More About Us</p>
                <p>
                  <a
                    className="btn btn-lg btn-outline-primary"
                    href="http://localhost:3000/About"
                  >
                    About
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#myCarousel"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#myCarousel"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    );
  }
}

export default Carousel;
