import React from "react";
import { useEffect } from "react";
import { connect } from "react-redux";
import { getPokemons } from "./redux/actions";

function App({ pokemon }) {
  useEffect(() => {
    getPokemons();
  }, []);
  return (
    <div className="App">
      <h1>vamos a hacer un request</h1>
      {pokemon.length ? (
        <div>
         { pokemon.map(e => (<h1 key={e.id}>{e.name}</h1>
          ))}
        </div>
      ) : (
        <h2>no</h2>
      )}
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    getPokemons: dispatch(getPokemons()),
  };
};

const mapStateToProps = (state) => {
  return {
    pokemon: state.pokemons,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
