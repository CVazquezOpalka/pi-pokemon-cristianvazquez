import React, { useEffect } from "react";
import styled from "styled-components";
import { Card, Loader } from "./index";
import { useDispatch, useSelector } from "react-redux";
import { getPokemons } from "../redux/actions";

export const CardContext = () => {
  const dispatch = useDispatch();
  const pokemon = useSelector((state) => state.pokemons);
  const loading = useSelector((state) => state.isLoading);
  useEffect(() => {
    dispatch(getPokemons());
  }, []);
  return (
    <Container>
      {loading ? (
        <div className="loader">
          <Loader />
        </div>
      ) : (
        <>
          {pokemon.map((e) => (
            <Card key={e.name} pokemon={e} />
          ))}
        </>
      )}
    </Container>
  );
};

const Container = styled.div`
  margin: 30px 0;
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  align-items: center;
  justify-items: center;
  gap: 30px;
  .loader{
   position: absolute;
   top:100%;
   left:25%;
  }
`;
