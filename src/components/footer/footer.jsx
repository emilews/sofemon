import React, { Component } from "react";
import "./footer.css";

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <img src="https://i.imgur.com/RFVOXuN.jpg" className="footer"></img>
      </div>
    );
  }
}

export default Footer;
