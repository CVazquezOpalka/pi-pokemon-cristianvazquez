import React, { useEffect } from "react";
import styled from "styled-components";
import {
  NavBar,
  Pagination,
  FilterBar,
  CardContext,
} from "../components/index";
import { useSelector, useDispatch } from "react-redux";
import { getPokemons } from "../redux/actions";

export const HomePage = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.pokemons);

  useEffect(() => {
    dispatch(getPokemons());
  }, []);

  return (
    <Container>
      <NavBar />
      <div className="pagination_and_filteres">
        <div className="filteres">
          <FilterBar />
        </div>
        <div className="pagination">
          <Pagination />
        </div>
      </div>
      <div className="card_context">
        <CardContext />
      </div>
    </Container>
  );
};

const Container = styled.div`
  width: 100vw;
  height: auto;
  position: relative;
  .pagination_and_filteres {
    position: relative;
    width: 100%;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    gap: 20px;
    .filteres {
      width: 20%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: red;
    }
    .pagination{
        width: 80%;
        height:100%;
        display: flex;
        align-items:center;
        background-color: green;
    }
  }
  .card_context {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
