import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import React, { Component } from "react";
import PropTypes from "prop-types";
import PokemonItem from "./PokemonItem";

export class PokemonList extends Component {
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
    return (
      <div className="d-flex flex-wrap">
        {this.state.pokemons.map((pokemon) => (
          <PokemonItem key={pokemon.id} pokemon={pokemon} />
        ))}
      </div>
    );
  }
}

export default PokemonList;
