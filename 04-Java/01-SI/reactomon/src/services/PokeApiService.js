import axios from "axios";

export default class PokeApiService {
  constructor() {
    this.baseURL = "https://pokeapi.co/api/v2/";
  }

  getAll() {
    return axios.get(this.baseURL + "pokemon?limit=100").then((json) =>
      json.data.results.map((pokemon) => {
        pokemon.id = pokemon.url
          .substring(`${this.baseURL}pokemon/`.length)
          .slice(0, -1);
        pokemon.sprite = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${pokemon.id}.png`;
        return pokemon;
      })
    );
  }
}
