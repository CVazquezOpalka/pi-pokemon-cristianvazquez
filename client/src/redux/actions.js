export const GET_POKEMONS = "GET_POKEMONS";
export const GET_POKEMON = "GET_POKEMON";
export const CREATE_POKEMON = "CREATE_POKEMON";
export const SEARCH_POKEMON = "SEARCH_POKEMON";
export const GET_TYPES = "GET_TYPES";

export function getTypes() {
  return function (dispatch) {
    const URL = "http://localhost:3001/types";
    return fetch(URL)
      .then((res) => res.json())
      .then((json) =>
        dispatch({
          type: GET_TYPES,
          payload: json,
        })
      );
  };
}

export function getPokemons() {
  return function (dispatch) {
    return fetch("http://localhost:3001/pokemons")
      .then((res) => res.json())
      .then((json) =>
        dispatch({
          type: GET_POKEMONS,
          payload: json,
        })
      );
  };
}

export function getPokemon(id) {
  return function (dispatch) {
    return fetch(`http://localhost:3001/pokemons/${id}`)
      .then((res) => res.json())
      .then((json) =>
        dispatch({
          type: GET_POKEMON,
          payload: json,
        })
      );
  };
}

export function searchPokemon(name) {
  return function (dispatch) {
    return fetch(`http://localhost:3001/pokemons/?name=${name}`)
      .then((res) => res.json())
      .then((json) =>
        dispatch({
          type: SEARCH_POKEMON,
          payload: json,
        })
      );
  };
}
