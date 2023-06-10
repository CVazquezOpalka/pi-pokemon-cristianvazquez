import {
  GET_POKEMON,
  GET_POKEMONS,
  SEARCH_POKEMON,
  GET_TYPES,
  SORT_ORDER,
  FILTER_TYPES,
  UPDATE_POKEMON,
} from "./actions";

const initialState = {
  types: [],
  pokemons: [],
  pokemon: {},
  isLoading: true,
  totalPages:0,
  currentPage:0,
  nextPage:0
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
        isLoading: false,
      };
    case UPDATE_POKEMON:
      return {
        ...state,
        pokemon: action.payload,
        isLoading: true,
      };
    case SEARCH_POKEMON:
      return {
        ...state,
        pokemons: action.payload,
        isLoading: false,
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
