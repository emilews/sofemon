import React from "react";

class PokemonCard extends React.Component {
  render() {
    let typeP = this.props.pokemon.types[1].type.name;
    if (this.props.pokemon.types[1])
      typeP = typeP + " + " + this.props.pokemon.types[1].type.name;

    return (
      <div class="card">
        <div class="card-image">
          <img src={this.props.pokemon.sprites[4]} alt="" />
        </div>
        <h5 class="pokeName">{this.props.pokemon.name}</h5>
        <h6 class="pokeType">{typeP}</h6>
      </div>
    );
  }
}
export default PokemonCard;
