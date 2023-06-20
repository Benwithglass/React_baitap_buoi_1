import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.css";
import { Button } from 'bootstrap';
// import "./ComponentWithCss/style.css";

export default class Body extends Component {
  render() {
    return (
      <div class="container">
        <div class="body" style={{backgroundColor:"#F8F9FA", padding:"50px 20px 35px 20px"}}>
            <h1 style={{fontSize:"70px", fontWeight:"300"}}>A Warm Welcome!</h1>
            <p>
            Bootstrap utility classes are used to create this jumbotron since the old component has been removed from the framework. Why create custom CSS when you can use utilities?
            </p>
            <button class="btn btn-primary">Call to action</button> 
        </div>
      </div>
    )
  }
}
