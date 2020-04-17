import React, { Component } from "react";
import "./PokemonCard.css";
import colors from "../ColorTypes";

class PokemonCard extends Component {
  /* getinfoPokemon() {
    return;
  
  render() {
    let typeP = this.props.pokemon.types[0].type.name;
    if (this.props.pokemon.types[1])
      typeP = typeP + " + " + this.props.pokemon.types[1].type.name;
*/ render() {
    return (
      <React.Fragment>
        <button
          style={{ colors }}
          className="card"
          //
          onClick={() => this.props.handleCart(this.props.pokemon)}
        >
          <div className="card-image">
            <img src={this.props.pokemon.sprites.front_default} alt="" />
          </div>
          <div className="types">
            {this.props.pokemon.types.map(type => {
              return (
                <div
                  className="pokeType"
                  style={{ backgroundColor: colors[type.type.name] }}
                >
                  {type.type.name}
                </div>
              );
            })}
          </div>
          <div className="pokeName">{this.props.pokemon.name}</div>
          <div className="ability">{this.props.pokemon.name}</div>
        </button>
      </React.Fragment>
    );
  }
}
export default PokemonCard;
