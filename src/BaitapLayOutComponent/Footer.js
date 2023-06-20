import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.css";

export default class Footer extends Component {
  render() {
    return (
      <div style={{backgroundColor:"#212529", padding:"30px"}} class="text-white text-center">
        Copyright © Your Website 2023
      </div>
    )
  }
}
