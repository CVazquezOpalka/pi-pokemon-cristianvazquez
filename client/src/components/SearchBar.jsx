import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";

export const SearchBar = () => {
  const navigate = useNavigate();
 
  return (
    <Container>
      <input type="text" placeholder="Busca a tu pokemon por nombre o id.." onChange={(e)=>console.log(e.target.value)}/>
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
    transition:0.5s;
    &:hover{
        transform: scale(1.1)
    }
  }
`;
