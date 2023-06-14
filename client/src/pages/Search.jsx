import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { CardContext } from "../components";

export const Search = () => {
  const dispatch = useDispatch();
  const pokemonState = useSelector((state) => state.pokemons);
  return (
    <Container>
      <div className="title">
        <h1>Se encontraron {pokemonState.length} resultados.</h1>
        <div className="context">
            <CardContext pokePagination={pokemonState}/>
        </div>
      </div>
    </Container>
  );
};

const Container = styled.main`
  width: 100vh;
  height: 100vh;
  display: flex;
  flex-direction: column;
  .title{
    width: 100%;
    text-align: center;
  }
`;
