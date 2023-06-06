import {
  GET_POKEMON,
  GET_POKEMONS,
  SEARCH_POKEMON,
  GET_TYPES,
} from "./actions";

const initialState = {
  types: [],
  pokemons: [],
  pokemon: {},
  type: "",
  order: "",
};

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_TYPES:
      return {
        ...state,
        types: action.payload,
      };
    case GET_POKEMONS:
      return {
        ...state,
        pokemons: action.payload,
      };
    case GET_POKEMON:
      return {
        ...state,
        pokemon: action.payload,
      };
    case SEARCH_POKEMON:
      return {
        ...state,
        pokemons: action.payload,
      };
    default:
      return state;
  }
};
