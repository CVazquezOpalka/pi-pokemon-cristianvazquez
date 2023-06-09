export const GET_POKEMONS = "GET_POKEMONS";
export const GET_POKEMON = "GET_POKEMON";
export const CREATE_POKEMON = "CREATE_POKEMON";
export const SEARCH_POKEMON = "SEARCH_POKEMON";
export const GET_TYPES = "GET_TYPES";
export const FILTER_TYPES = "FILTER_TYPES";
export const SORT_ORDER = "SORT_ORDER";
export const UPDATE_POKEMON = "UPDATE_POKEMON";

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

export function searchPokemon(name, id) {
  return function (dispatch) {
    if (name && typeof name === "string") {
      return fetch(`http://localhost:3001/pokemons/?name=${name}`)
        .then((res) => res.json())
        .then((json) =>
          dispatch({
            type: SEARCH_POKEMON,
            payload: json,
          })
        );
    }
    if (id && typeof id === "number") {
      return fetch(`http://localhost:3001/pokemons/${id}`)
        .then((res) => res.json())
        .then((json) =>
          dispatch({
            type: SEARCH_POKEMON,
            payload: json,
          })
        );
    }
  };
}

export function filterTypes(type) {
  return function (dispatch) {
    dispatch({
      type: FILTER_TYPES,
      payload: type,
    });
  };
}

export function sortOrder(order = "des") {
  return function (dispatch) {
    dispatch({
      type: SORT_ORDER,
      payload: order,
    });
  };
}

export function updatePokemon(payload) {
  return {
    type: UPDATE_POKEMON,
    payload,
  };
}
