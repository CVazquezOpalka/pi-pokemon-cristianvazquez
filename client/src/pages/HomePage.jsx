import React, { useState } from "react";
import styled from "styled-components";
import {
  NavBar,
  Pagination,
  FilterBar,
  CardContext,
} from "../components/index";
import { useSelector, useDispatch } from "react-redux";
import {
  filterTypes,
  updateType,
  updateOrder,
  sortOrder,
} from "../redux/actions";
import { tipos, ordered } from "../assets/utils/utils.js";

export const HomePage = () => {
  /* ESTADOS GENERALES */
  const dispatch = useDispatch();
  const typeState = useSelector((state) => state.types);
  let pokemonState = useSelector((state) => state.pokemons);
  const type = useSelector((state) => state.type);
  const order = useSelector((state) => state.order);

  //FILTROS
  if (type) pokemonState = tipos(type, pokemonState);
  if (order) pokemonState = ordered(order, pokemonState);

  //ESTADOS GENERALES, MANEJAN LA ACCION DEL TOOGLE, EL PAGINADO Y EL FILTRO DE TIPOS
  //controla el toogle de la barra de filtros
  const [show, setShow] = useState(false);
  const [page, setPage] = useState(0);

  const [types, setTypes] = useState({
    normal: false,
    flying: false,
    ground: false,
    bug: false,
    steel: false,
    water: false,
    electric: false,
    ice: false,
    dark: false,
    unknown: false,
    fighting: false,
    poison: false,
    rock: false,
    ghost: false,
    fire: false,
    grass: false,
    psychic: false,
    dragon: false,
    fairy: false,
    shadow: false,
  });
  const [ordenar, setOrdenar] = useState({
    "a-z": false,
    "z-a": false,
    "fuerza+": false,
    "fuerza-": false,
    createdBDD: false,
    api: false,
  });
  /* FUNCIONES DE FILTROS */
  const handleCheckbox = (e) => {
    setTypes({
      ...types,
      [e.target.name]: e.target.checked,
    });
    if (e.target.checked) {
      dispatch(filterTypes(e.target.name));
    } else {
      dispatch(updateType(""));
    }
  };
  const handleOrder = (e) => {
    setOrdenar({
      ...ordenar,
      [e.target.name]: e.target.checked,
    });
    if (e.target.checked) {
      dispatch(sortOrder(e.target.value));
    } else {
      dispatch(updateOrder(""));
    }
  };
  //CORTE DEL ARRAY ESTADO GENERAL QUE GUARDA LOS POKEMONS
  const pagination = () => {
    if (pokemonState.length) return pokemonState.slice(page, page + 12);
    return [];
  };
  //ARRAY CON EL QUE TENGO QUE TRABAJAR
  const pokePagination = pagination();
  //TOTAL DE PAGINAS
  const totalPages = pokemonState.length
    ? Math.floor(pokemonState.length / 12)
    : null;
  //PAGINA ACTUAL
  let currentPage = totalPages ? Math.ceil(page / totalPages) + 1 : null;
  //CONTROLADOR DEL EVENTO NEXT
  const onNextPage = () => {
    if (pokemonState.length > page + 12) {
      setPage(page + 12);
    }
  };
  console.log(pokemonState.length);
  //CONTROLADOR DE EVENTO PREV
  const onPreviusPage = () => {
    if (page > 0) {
      setPage(page - 12);
    }
  };
  return (
    <Container>
      <NavBar />
      <div className="pagination_and_filteres">
        <div className="top_content">
          <div className="filteres">
            <FilterBar openDrawwer={setShow} drawwer={show} />
          </div>
          <div className="pagination">
            <Pagination
              totalPages={totalPages}
              pages={currentPage}
              onPrev={onPreviusPage}
              onNext={onNextPage}
              type={type}
            />
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
          <div className="checkbox_container">
            {typeState?.map((e) => (
              <div className="checkbox" key={e.id}>
                <input
                  type="checkbox"
                  value={e.name}
                  id={e.id}
                  name={e.name}
                  onClick={handleCheckbox}
                />
                <label htmlFor={e.name}>{e.name}</label>
              </div>
            ))}
          </div>
        </div>
        <hr />
        <div className="bottom_bar">
          <div className="title">
            <h3>otros filtros</h3>
          </div>
          <div className="other_filteres">
            <div className="checkbox">
              <input
                type="checkbox"
                name="z-a"
                value="z-a"
                onClick={handleOrder}
              />
              <label>z - a</label>
            </div>
            <div className="checkbox">
              <input
                type="checkbox"
                name="a-z"
                value="a-z"
                onClick={handleOrder}
              />
              <label htmlFor="">a - z</label>
            </div>
            <div className="checkbox">
              <input
                type="checkbox"
                name="ataque+"
                value="ataque+"
                onClick={handleOrder}
              />
              <label htmlFor="">ataque+</label>
            </div>
            <div className="checkbox">
              <input
                type="checkbox"
                name="ataque-"
                value="ataque-"
                onClick={handleOrder}
              />
              <label htmlFor="">ataque-</label>
            </div>
            <div className="checkbox">
              <input
                type="checkbox"
                name="createdBDD"
                value="createdBDD"
                onClick={handleOrder}
              />
              <label htmlFor="">BDD</label>
            </div>
            <div className="checkbox">
              <input
                type="checkbox"
                name="api"
                value="api"
                onClick={handleOrder}
              />
              <label htmlFor="">API</label>
            </div>
          </div>
        </div>
      </div>
      <div className="card_context">
        <CardContext pokePagination={pokePagination} state={pokemonState} />
      </div>
    </Container>
  );
};

const Container = styled.div`
  width: 100vw;
  height: auto;
  position: relative;
  .drawwer_close {
    position: fixed;
    top: 0;
    left: -300px;
    width: 300px;
    transition: all 0.3s ease;
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
    transition: all 0.3s ease-in-out;
    hr {
      width: 80%;
      background: #fff;
      border: 1px solid #fff;
    }
    .top_bar {
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
        width: 100%;
        height: 40px;
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
          margin-bottom: 10px;
        }
      }
      .checkbox_container {
        width: 100%;
        height: 350px;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        justify-items: center;
        .checkbox {
          width: 100%;
          height: 100%;
          align-items: center;
          justify-content: center;
          margin-left: 60px;
          label {
            text-transform: capitalize;
            font-weight: 400;
            margin-left: 5px;
            color: #fff;
          }
        }
      }
    }
    .bottom_bar {
      width: 100%;
      height: 150px;
      margin-top: 10px;
      margin-bottom: 10px;
      .title {
        width: 100%;
        height: 40px;
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
      .other_filteres {
        margin-top: 10px;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        align-items: center;
        justify-content: center;
        gap: 20px;
        width: 100%;
        height: auto;
        .checkbox {
          width: 60%;
          height: 100%;
          display: flex;
          align-items: center;
          margin-left: 30px;
          label {
            text-transform: capitalize;
            font-weight: 400;
            margin-left: 5px;
            color: #fff;
          }
        }
      }
    }
  }
  .pagination_and_filteres {
    position: relative;
    width: 100%;
    height: auto;
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    .top_content {
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
