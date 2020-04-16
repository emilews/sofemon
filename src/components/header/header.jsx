import React, { Component } from "react";
import "./header.css";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="header">
        <div id="buttonContainer">
          <button id="homeBtn">HOME</button>
          <button id="adoptedBtn">ADOPTED</button>
          <button id="checkoutBtn">
            <img src="https://i.imgur.com/oYPqB7I.png" alt="" height="12" />
            CHECKOUT
          </button>
        </div>
      </div>
    );
  }
}

export default Header;
