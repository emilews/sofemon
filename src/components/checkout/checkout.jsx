import React, { Component } from "react";
import PokemonCard from "../pokemonCard/PokemonCard";

class checkout extends Component {
  render() {
    return (
      <React.Fragment>
        <h1>Your Pokemon Cart !</h1>
        <div className="cartList">
          {this.props.cart.map((pokemon, i) => {
            return (
              <React.Fragment>
                <div className="cardsCheckout">
                  <PokemonCard
                    key={i}
                    pokemon={pokemon}
                    handleCart={this.props.handleCart}
                  />
                  <button
                    onClick={() =>
                      this.props.handleCartRemove(this.props.pokemon)
                    }
                  >
                    Remove
                  </button>
                </div>
              </React.Fragment>
            );
          })}
        </div>
        <button>Checkout</button>;
      </React.Fragment>
    );
  }
}

export default checkout;
