import React, { Component } from "react";
import Header from "./components/Header";
import OfflinePokeService from "./services/OfflinePokeService";
import PokeApiService from "./services/PokeApiService";
import PokemonList from "./components/PokemonList";
import Container from "react-bootstrap/Container";

class App extends Component {
  state = {
    pokemonService: new OfflinePokeService(),
  };

  render() {
    return (
      <div className="App">
        <Container>
          <Header />
          <PokemonList pokemonService={this.state.pokemonService} />
        </Container>
      </div>
    );
  }
}

export default App;
