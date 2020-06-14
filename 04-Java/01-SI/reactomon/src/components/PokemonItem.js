import Col from "react-bootstrap/Col";
import React, { Component } from "react";
import PropTypes from "prop-types";
import Row from "react-bootstrap/Row";

export class PokemonItem extends Component {
  static propTypes = {
    pokemon: PropTypes.object.isRequired,
  };

  render() {
    const pokemon = this.props.pokemon;
    return (
      <Col xs={3} className="p-3">
        <Row>
          <img
            src={pokemon.sprite}
            alt="Pokémon's sprite"
            className="mx-auto"
          />
        </Row>
        <Row>
          <a href="#" className="mx-auto text-capitalize">
            {pokemon.name}
          </a>
        </Row>
      </Col>
    );
  }
}

export default PokemonItem;
