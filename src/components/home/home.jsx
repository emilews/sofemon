import React, { Component } from "react";
//import PokemonCard from "../pokemonCard/PokemonCard";
//import pokeApi from "../../methods/pokeApi";

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  /*
  getPokemonObjects = async () => {
    const response = await fetch(
      "https://pokeapi.co/api/v2/pokemon?offset=50&limit=50"
    );
    const json = await response.json();
    console.log(json);
    this.setState();
  };
*/

  render() {
    return (
      <React.Fragment>
        <h3> Catalogo </h3>
      </React.Fragment>
    );
  }
}

export default Home;
