import React, { Component } from "react";
import "./header.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Adopt from "../adopted/adopted";
import Checkout from "../checkout/checkout";
import Home from "../home/home";

class Header extends Component {
  render() {
    return (
      <div className="header">
        <div id="buttonContainer">
          <Router>
            <Link to="/home">
              <button id="homeBtn">HOME</button>
            </Link>
            <Link to="/adopted">
              <button id="adoptedBtn">ADOPTED</button>
            </Link>
            <Link to="/checkout">
              <button id="checkoutBtn">
                <img src="https://i.imgur.com/oYPqB7I.png" alt="" height="12" />
                CHECKOUT
              </button>
            </Link>
            <div>
              <Switch>
                <Route path="/adopted">
                  <Adopt />
                </Route>
                <Route path="/home">
                  <Home
                    pokemonshop={this.props.pokemonshop}
                    cart={this.props.cart}
                    listaPoke={this.props.myPokemon}
                  />
                </Route>
                <Route path="/checkout">
                  <Checkout cart={this.props.cart} />
                </Route>
              </Switch>
            </div>
          </Router>
        </div>
      </div>
    );
  }
}

export default Header;
