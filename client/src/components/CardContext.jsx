import React from "react";
import styled from "styled-components";
import { Card, Loader } from "./index";
import { useDispatch, useSelector } from "react-redux";
import { BTNGoBack } from "../assets/styles/style";
import { getPokemons } from "../redux/actions";
import { AiOutlineArrowLeft } from "react-icons/ai";

export const CardContext = ({ pokePagination, state }) => {
  //logica de componente
  const loading = useSelector((state) => state.isLoading);
  //el state pokemons es pasado por props, cuando se realiza una busqueda en la searchbar, carga el nuevo estado
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(getPokemons());
  };

  return (
    <>
      {loading ? (
        <ContainerLoader>
          <Loader />
        </ContainerLoader>
      ) : state.id ? (
        <Container alter>
          <div className="btn_goback">
            <BTNGoBack onClick={() => handleClick()}>
              <AiOutlineArrowLeft />
            </BTNGoBack>
          </div>
          {loading ? (
            <Loader />
          ) : (
            <Card pokemon={state} key={pokePagination.id} />
          )}
        </Container>
      ) : (
        <Container>
          {loading ? (
            <Loader />
          ) : (
            pokePagination.map((e) => <Card pokemon={e} key={e.id} />)
          )}
        </Container>
      )}
    </>
  );
};

const Container = styled.div`
  .btn_goback {
    display: ${(props) => (props.alter ? "block" : "none")};
    position: absolute;
    top: 180px;
    left: 80px;
    width: 50px;
    height: 50px;
  }
  margin: 30px 0;
  width: 100%;
  height: ${(props) => (props.alter ? "500px" : "100%")};
  display: ${(props) => (props.alter ? "flex" : "grid")};
  grid-template-columns: ${(props) =>
    props.alter ? "none" : "repeat(4, 1fr)"};
  align-items: center;
  justify-content: ${(props) => (props.alter ? "center" : "none")};
  justify-items: ${(props) => (props.alter ? "none" : "center")};
  gap: 30px;
  @media (max-width: 867px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 400px) {
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
