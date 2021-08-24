import React, { Component } from "react";
import "./display_styple.css";
import DisplayImage from "./display_img.jpg";

class Display extends Component {
  render() {
    return (
      <div className="px-4 pt-5 my-5 text-center border-bottom">
        <h1 className="display-4 fw-bold">Explore Your Taste-Buds!!!</h1>
        <div className="col-lg-6 mx-auto">
          <p className="lead mb-4">
            A wide range of cuisines <br />
            Indian | Italian | Continental | Chinese | English | BBQ |
            South-Indian | Grilled | Fast-Food
          </p>
          <div className="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5">
            <a
              href="http://localhost:3000/Cuisines"
              class="btn btn-outline-primary"
            >
              Order Now!!!
            </a>
          </div>
        </div>
        <div className="overflow-hidden perodisplay">
          <div className="container px-5">
            <img
              src={DisplayImage}
              className="img-fluid border rounded-3 shadow-lg mb-4"
              alt="Example image"
              width="700"
              height="500"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Display;
