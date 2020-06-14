import React, { Component } from "react";
import Header from "./components/Header";
import OfflinePokeService from "./services/OfflinePokeService";
import PokeApiService from "./services/PokeApiService";
import Pokemons from "./components/Pokemons";

class App extends Component {
  state = {
    pokemonService: new OfflinePokeService(),
  };

  render() {
    return (
      <div className="App">
        <Header />
        <Pokemons pokemonService={this.state.pokemonService} />
      </div>
    );
  }
}

export default App;
