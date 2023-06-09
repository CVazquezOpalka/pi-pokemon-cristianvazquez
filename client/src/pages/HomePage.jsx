import React, { useEffect, useState } from "react";
import styled from "styled-components";
import {
  NavBar,
  Pagination,
  FilterBar,
  CardContext,
} from "../components/index";
import { useSelector, useDispatch } from "react-redux";
import { getTypes } from "../redux/actions";

export const HomePage = () => {
  const [show, setShow] = useState(false);
  const typeState = useSelector((state) => state.type);
  return (
    <Container>
      <NavBar />
      <div className="pagination_and_filteres">
        <div className="top_content">
          <div className="filteres">
            <FilterBar openDrawwer={setShow} drawwer={show} />
          </div>
          <div className="pagination">
            <Pagination />
          </div>
        </div>
      </div>
      <div className={`${show === false ? "drawwer_close" : "drawwer"}`}>
        <div className="top_bar">
          <h3>Menu de filtros</h3>
          <button onClick={() => setShow(!show)}>X</button>
        </div>
        <hr />
        <div className="mid_bar">
          <div className="title">
            <h3>Filtros de tipo</h3>
          </div>
          <div className="checkbox_container"></div>
        </div>
        <hr />
        <div className="bottom_bar"></div>
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
  .drawwer_close {
    display: none;
  }
  .drawwer {
    position: fixed;
    top: 0;
    left: 0;
    width: 300px;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.7);
    backdrop-filter: blur(10px);
    z-index: 50;
    display: flex;
    flex-direction: column;
    align-items: center;
    transition: 0.5s ease-in;
    hr {
      width: 80%;
      background: #fff;
      border: 1px solid #fff;
    }
    .top_bar {
      background-color: red;
      width: 100%;
      height: 50px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 10px;
      h3 {
        width: 80%;
        text-align: center;
        color: #fff;
        text-transform: capitalize;
        text-decoration: underline;
        font-weight: 500;
        letter-spacing: 1px;
      }
      button {
        width: 35px;
        height: 35px;
        border-radius: 50%;
        border: 1px solid #fff;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-right: 10px;
        background: none;
        transition: 0.3s ease;
        color: #fff;
        font-size: 1.1rem;
        font-weight: 500;
        &:hover {
          transform: scale(1.2);
          background-color: #333;
        }
      }
    }
    .mid_bar {
      margin-top: 10px;
      margin-bottom: 10px;
      width: 100%;
      height: 400px;
      display: flex;
      flex-direction: column;
      .title {
        background-color: red;
        width: 100%;
        height: 50px;
        display: flex;
        align-items: center;
        justify-content: center;
        h3 {
          width: 80%;
          text-align: center;
          color: #fff;
          text-transform: capitalize;
          text-decoration: underline;
          font-weight: 500;
          letter-spacing: 1px;
        }
      }
      .checkbox_container{
        background-color: green;
        width: 100%;
        height: 350px;
        

      }
    }
    .bottom_bar{
      width: 100%;
      height: 150px;
      margin-top: 10px;
      margin-bottom: 10px;
      background-color: red;
    }
  }
  .pagination_and_filteres {
    position: relative;
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    .top_content {
      background-color: red;
      width: 100%;
      height: 50px;
      display: flex;
      .filteres {
        width: 20%;
        height: 50px;
        display: flex;
        align-items: flex-start;
        justify-content: center;
      }
      .pagination {
        width: 80%;
        height: 50px;
        display: flex;
        align-items: center;
      }
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
