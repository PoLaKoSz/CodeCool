export default class OfflinePokeService {
  getAll() {
    return new Promise(function (resolve) {
      return resolve([
        {
          name: "bulbasaur",
          url: "https://pokeapi.co/api/v2/pokemon/1/",
          id: "1",
          sprite:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png",
        },
        {
          name: "ivysaur",
          url: "https://pokeapi.co/api/v2/pokemon/2/",
          id: "2",
          sprite:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/2.png",
        },
        {
          name: "venusaur",
          url: "https://pokeapi.co/api/v2/pokemon/3/",
          id: "3",
          sprite:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/3.png",
        },
        {
          name: "charmander",
          url: "https://pokeapi.co/api/v2/pokemon/4/",
          id: "4",
          sprite:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/4.png",
        },
        {
          name: "charmeleon",
          url: "https://pokeapi.co/api/v2/pokemon/5/",
          id: "5",
          sprite:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/5.png",
        },
        {
          name: "charizard",
          url: "https://pokeapi.co/api/v2/pokemon/6/",
          id: "6",
          sprite:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/6.png",
        },
        {
          name: "squirtle",
          url: "https://pokeapi.co/api/v2/pokemon/7/",
          id: "7",
          sprite:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/7.png",
        },
        {
          name: "wartortle",
          url: "https://pokeapi.co/api/v2/pokemon/8/",
          id: "8",
          sprite:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/8.png",
        },
        {
          name: "blastoise",
          url: "https://pokeapi.co/api/v2/pokemon/9/",
          id: "9",
          sprite:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/9.png",
        },
        {
          name: "caterpie",
          url: "https://pokeapi.co/api/v2/pokemon/10/",
          id: "10",
          sprite:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/10.png",
        },
      ]);
    });
  }
}
