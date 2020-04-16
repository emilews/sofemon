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
          <button id="checkoutBtn">CHECKOUT</button>
        </div>
      </div>
    );
  }
}

export default Header;
