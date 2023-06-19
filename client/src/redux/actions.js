export const GET_POKEMONS = "GET_POKEMONS";
export const GET_POKEMON = "GET_POKEMON";
export const CREATE_POKEMON = "CREATE_POKEMON";
export const SEARCH_POKEMON = "SEARCH_POKEMON";
export const GET_TYPES = "GET_TYPES";
export const FILTER_TYPES = "FILTER_TYPES";
export const SORT_ORDER = "SORT_ORDER";
export const UPDATE_POKEMONS = "UPDATE_POKEMONS";
export const UPDATE_POKEMON = "UPDATE_POKEMON";
export const UPDATE_ORDER = "UPDATE_ORDER";
export const UPDATE_TYPE = "UPDATE_TYPES";
export const UPDATE_SEARCH = "UPDATE_SEARCH";

//FUNCIONES DE LIMPIEZA

export const updateSearch = (payload) => {
  return {
    type: UPDATE_SEARCH,
    payload,
  };
};

export const updatePokemons = (payload) => {
  return {
    type: UPDATE_POKEMONS,
    payload,
  };
};
export const updatePokemon = (payload) => {
  return {
    type: UPDATE_POKEMON,
    payload,
  };
};

export const updateType = (payload) => {
  return {
    type: UPDATE_TYPE,
    payload,
  };
};

export const updateOrder = (payload) => {
  return {
    type: UPDATE_ORDER,
    payload,
  };
};

//LLAMADOS A LA API

export function getTypes() {
  return function (dispatch) {
    return fetch("http://localhost:3001/types")
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
    return fetch(`http://localhost:3001/pokemons?name=${name}`)
      .then((response) => response.json())
      .then((json) =>
        dispatch({
          type: SEARCH_POKEMON,
          payload: json,
        })
      );
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

export function sortOrder(order) {
  return function (dispatch) {
    dispatch({
      type: SORT_ORDER,
      payload: order,
    });
  };
}
