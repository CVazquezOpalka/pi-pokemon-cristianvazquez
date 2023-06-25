import {
  GET_POKEMONS,
  GET_POKEMON,
  GET_TYPES,
  FILTER_TYPES,
  SORT_ORDER,
  UPDATE_POKEMONS,
  UPDATE_POKEMON,
  UPDATE_ORDER,
  UPDATE_TYPE,
  UPDATE_SEARCH,
  SEARCH_POKEMON_REQUEST,
  SEARCH_POKEMON_SUCCESS,
  SEARCH_POKEMON_FAILURE,
} from "./actionTypes";

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

//CONTROLADOR DE ERRORES DEL SEARCH BAR;

export const searchPokemonRequest = () => ({
  type: SEARCH_POKEMON_REQUEST,
});

export const searchPokemonSuccess = (pokemon) => ({
  type: SEARCH_POKEMON_SUCCESS,
  payload: pokemon,
});

export const searchPokemonFailure = (error) => ({
  type: SEARCH_POKEMON_FAILURE,
  payload: error,
});

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
export function getPokemonByName(name) {
  return function (dispatch) {
    //esta funcion recibe un nombre como argumento y despacha 3 acciones,
    dispatch(searchPokemonRequest());
    return fetch(`http://localhost:3001/pokemons?name=${name}`)
      .then(async (response) => {
        //primera accion a despachar el manejo de errores, si la respuesta es distinta de ok, obtenemos el error y lo arrojamos al catch
        if (!response.ok) {
          let error;
          try {
            error = await response.json(); //
          } catch (err) {
            //mensaje alternativo
            error = { message: "Error desconocido" }; // Si no se puede extraer, asignamos un error genérico
          }
          throw error;
        }
        return response.json();
      })
      .then((pokemon) => {
        dispatch(searchPokemonSuccess(pokemon));
      })
      .catch((error) => {
        dispatch(searchPokemonFailure(error));
      });
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
