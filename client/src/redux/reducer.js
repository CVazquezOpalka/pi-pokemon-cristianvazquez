import {
  GET_POKEMON,
  GET_POKEMONS,
  GET_TYPES,
  SORT_ORDER,
  FILTER_TYPES,
  UPDATE_POKEMON,
  UPDATE_TYPE,
  UPDATE_ORDER,
  UPDATE_POKEMONS,
  UPDATE_SEARCH,
  SEARCH_POKEMON_REQUEST,
  SEARCH_POKEMON_SUCCESS,
  SEARCH_POKEMON_FAILURE,
} from "./actionTypes";

const initialState = {
  types: [],
  pokemons: [],
  pokemon: {},
  typeLoading: true,
  isLoading: true,
  searchLoading: false,
  type: "",
  order: "",
  error: null,
};

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_TYPES:
      return {
        ...state,
        types: action.payload,
        typeLoading: false,
      };
    case GET_POKEMONS:
      return {
        ...state,
        pokemons: action.payload,
        isLoading: false,
      };
    case UPDATE_POKEMONS:
      return {
        ...state,
        pokemons: action.payload,
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
      };
    case SEARCH_POKEMON_REQUEST:
      return {
        ...state,
        searchLoading: true,
        error: null,
      };
    case SEARCH_POKEMON_SUCCESS:
      return {
        ...state,
        pokemons: action.payload,
        searchLoading: false,
        error: null,
      };
    case SEARCH_POKEMON_FAILURE:
      return {
        ...state,
        searchLoading: false,
        error: action.payload,
      };
    case UPDATE_SEARCH:
      return {
        ...state,
        search: action.payload,
      };
    case FILTER_TYPES:
      return {
        ...state,
        type: action.payload,
      };
    case UPDATE_TYPE:
      return {
        ...state,
        type: action.payload,
      };
    case SORT_ORDER:
      return {
        ...state,
        order: action.payload,
      };
    case UPDATE_ORDER:
      return {
        ...state,
        order: action.payload,
      };
    default:
      return state;
  }
};
