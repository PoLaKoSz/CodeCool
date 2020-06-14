import React, { Component } from "react";
import PropTypes from "prop-types";

export class PokemonItem extends Component {
  static propTypes = {
    pokemon: PropTypes.object.isRequired,
  };

  render() {
    const pokemon = this.props.pokemon;
    return (
      <div>
        <h3>{pokemon.name}</h3>
        <img src={pokemon.sprite} alt="Pokémon's sprite" />
      </div>
    );
  }
}

export default PokemonItem;
