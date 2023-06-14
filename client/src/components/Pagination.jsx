import React from "react";
import styled from "styled-components";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

export const Pagination = ({ totalPages, onPrev, onNext, pages }) => {
  
  return (
    <>
      {totalPages === 0 ? null : (
        <Container>
          {pages > 1 ? (
            <button onClick={onPrev}>
              <AiOutlineLeft />
            </button>
          ) : null}
          <h3>
            <span>{pages}</span> de <span>{totalPages}</span>
          </h3>
          {pages === totalPages ? null : (
            <button onClick={onNext}>
              <AiOutlineRight />
            </button>
          )}
        </Container>
      )}
    </>
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
  button {
    width: 35px;
    height: 35px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    border: 1px solid #111;
    background: none;
    transition: 0.3s ease;
    cursor: pointer;
    &:hover {
      transform: scale(1.2);
      background-color: #333;
      color: #fff;
    }
  }
`;
