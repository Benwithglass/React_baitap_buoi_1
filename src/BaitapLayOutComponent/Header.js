import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";

export default class Header extends Component {
  render() {
    return (
      <div>
        <nav class="navbar navbar-expand-lg bg-dark mb-3">
          <div class="container">
            <div class="nav-logo">
              <a class="navbar-brand text-white" href="#">
                Start Bootstrap
              </a>
            </div>
            <div class="navbar-nav text-white justify-content-end">
              <ul class="d-flex">
                {" "}
                <a
                  class="nav-link active text-white"
                  aria-current="page"
                  href="#"
                >
                  Home
                </a>{" "}
                <a class="nav-link text-secondary" href="#">
                  About
                </a>
                <a class="nav-link text-secondary" href="#">
                  Service
                </a>{" "}
                <a class="nav-link text-secondary" href="#">
                  Contact
                </a>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
