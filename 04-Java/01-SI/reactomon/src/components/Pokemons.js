import React, { Component } from "react";
import PropTypes from "prop-types";
import PokemonItem from "./PokemonItem";

export class Pokemons extends Component {
  state = {
    pokemons: [],
  };

  static propTypes = {
    pokemonService: PropTypes.object.isRequired,
  };

  componentDidMount() {
    this.props.pokemonService
      .getAll()
      .then((pokemons) => this.setState({ pokemons: pokemons }));
  }

  render() {
    return this.state.pokemons.map((pokemon) => (
      <PokemonItem key={pokemon.id} pokemon={pokemon} />
    ));
  }
}

export default Pokemons;
