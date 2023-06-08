import React from "react";
import styled from "styled-components";
import TitleBanner from "../assets/image/titulon.png";
import { SearchBar } from "./index";
import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <Container>
      <header>
        <img src={TitleBanner} alt="logo de la pagina" />
      </header>
      <nav className="container-nav">
        <ul>
          <li>
            <span>
              <Link to="/favorites">My Team</Link>
            </span>
          </li>
          <li>
            <span>
              <Link to="/createPokemon">Create Pokemon</Link>
            </span>
          </li>
        </ul>
      </nav>
      <div className="search-container">
        <SearchBar />
      </div>
    </Container>
  );
};

const Container = styled.div`
  width: 90vw;
  height: 100px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  header {
    width: 250px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    img {
      width: 200px;
    }
  }
  .search-container {
    width: 300px;
    height: 50px;
    border: 1px solid #111;
    border-radius: 30px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    overflow: hidden;
    box-shadow: 1px 5px 5px rgba(0,0,0,0.5)
  }
  .container-nav {
    width: 400px;
    height: auto;
    ul {
      width: 100%;
      height: auto;
      display: flex;
      align-items: center;
      justify-content: space-between;
      list-style: none;
    }
    li {
      span {
        position: relative;
        display: block;
        padding: 10px 20px;
        a {
          color: #111;
          text-decoration: none;
          text-transform: uppercase;
          font-weight: 500;
          letter-spacing: 0.2rem;
          border-bottom: 1px solid transparent;
          transition: 0.5s ease-in-out;
          &:hover {
            border-bottom: 1px solid black;
          }
        }
      }
    }
  }
  @media (max-width: 767px) {
    margin: 0;
    width: 100%;
    flex-direction: column;
    height: 220px;
    align-items: center;
    justify-content: center;
    .search-container {
      height: 100px;
    }
    .container-nav {
      width: 100%;
      ul {
        width: 100%;
        align-items: center;
        justify-content: center;
        li {
          span {
            margin-right: 75px;
          }
        }
      }
    }
  }
`;
