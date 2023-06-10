import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Card, Loader } from "./index";
import { useDispatch, useSelector } from "react-redux";
import { getPokemons } from "../redux/actions";

export const CardContext = ({pokePagination}) => {

  const dispatch = useDispatch();
  const pokemon = useSelector((state) => state.pokemons);
  const loading = useSelector((state) => state.isLoading);
  useEffect(() => {
    dispatch(getPokemons());
  }, []);
  return (
    <>
      {loading ? (
        <ContainerLoader>
          <Loader />
        </ContainerLoader>
      ) : (
        <Container>
          {pokePagination.map((e) => (
            <div key={e.name}>
              <Card pokemon={e} />
            </div>
          ))}
        </Container>
      )}
    </>
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
  @media (max-width: 867px){
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 600px){
   grid-template-columns: repeat(2, 1fr)
  }
  @media (max-width: 400px){
   grid-template-columns: 100%;
  }
`;
const ContainerLoader = styled.main`
  width: 100vw;
  height: 506px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
