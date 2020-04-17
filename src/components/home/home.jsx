import React, { Component } from "react";
import PokemonCard from "../pokemonCard/PokemonCard";
import "../Grid.css";

class Home extends Component {
  /*renderTarjeta() {
    return <PokeCard />;
  }*/

  render() {
    return (
      //incluir mapeo de this.props.pokemonshop
      //y crear un PokemonCard(elemento_del_mapa)
      <React.Fragment>
        <div className="grid">
          <div>
            {this.props.pokemonshop.map((pokemon, i) => {
              return (
                <PokemonCard
                  key={i}
                  pokemon={pokemon}
                  handleCart={this.props.handleCart}
                />
              );
            })}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Home;
