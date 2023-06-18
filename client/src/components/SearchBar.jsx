import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { searchPokemons, updateSearch } from "../redux/actions";

export const SearchBar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [name, setName] = useState("");

  const handleChange = (e) => {
    e.preventDefault();
    setName(e.target.value);
  };

  const handleSubmit = () => {
    if (name) {
      dispatch(searchPokemons(name));
    }
  };

  return (
    <Container onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Busca a tu pokemon por nombre o id.."
        onChange={handleChange}
      />
      <button>
        <AiOutlineSearch />
      </button>
    </Container>
  );
};

const Container = styled.form`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  input {
    display: flex;
    width: 70%;
    margin: 0 auto;
    height: 80%;
    font-size: 0.9rem;
    border: none;
    outline: none;
  }
  button {
    position: relative;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: none;
    border: 1px solid black;
    font-weight: 500;
    font-size: 1.4rem;
    border: none;
    transition: 0.5s;
    cursor: pointer;
    &:hover {
      transform: scale(1.1);
    }
  }
`;
