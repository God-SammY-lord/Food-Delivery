import React, { Component } from "react";
import "./breadcrumb_style.css";

class Breadcrumb extends React.Component {
  render() {
    return (
      <div class="accordion accordion-flush" id="accordionFlushExample">
        <div class="accordion-item">
          <h2 class="accordion-header" id="flush-headingOne">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseOne"
              aria-expanded="false"
              aria-controls="flush-collapseOne"
            >
              Privacy Policy
            </button>
          </h2>
          <div
            id="flush-collapseOne"
            class="accordion-collapse collapse"
            aria-labelledby="flush-headingOne"
            data-bs-parent="#accordionFlushExample"
          >
            <div class="accordion-body">
              This site might be using cookies to enhance your experience. But
              rest assured, the data we obtain is never shared with third-party
              players, nor we store it.
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Breadcrumb;
