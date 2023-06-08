import {
  GET_POKEMON,
  GET_POKEMONS,
  SEARCH_POKEMON,
  GET_TYPES,
  SORT_ORDER,
  FILTER_TYPES,
} from "./actions";

const initialState = {
  types: [],
  pokemons: [],
  pokemon: {},
  isLoading: true,
};

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_TYPES:
      return {
        ...state,
        types: action.payload,
        isLoading: false,
      };
    case GET_POKEMONS:
      return {
        ...state,
        pokemons: action.payload,
        isLoading: false,
      };
    case GET_POKEMON:
      return {
        ...state,
        pokemon: action.payload,
        isLoading: false
      };
    case SEARCH_POKEMON:
      return {
        ...state,
        pokemons: action.payload,
        isLoading: false
      };
    case FILTER_TYPES:
      return {
        ...state,
        pokemons: state.pokemons.filter((e) => e.type.includes(action.payload)),
      };
    default:
      return state;
  }
};
