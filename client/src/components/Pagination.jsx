import React from "react";
import styled from "styled-components";

export const Pagination = ({ totalPages, onPrev, onNext, pages }) => {
  return (
    <Container>
        {
           pages > 1? (<button onClick={onPrev}>prev</button>) : null
        }
        <h3>
          <span>{Math.ceil(pages/totalPages) + 1}</span> de <span>{totalPages}</span>
        </h3>
        <button onClick={onNext}>next</button>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  margin-right: 50px;
  align-items: center;
  justify-content: flex-end;
  gap: 10px;
  button{
    width: 35px;
    height: 35px;
    border-radius: 50%;
    border: 1px solid #111;
    background: none;
    transition: 0.3s ease;
    &:hover{
        transform: scale(1.1)
    }
  }
  
`;
