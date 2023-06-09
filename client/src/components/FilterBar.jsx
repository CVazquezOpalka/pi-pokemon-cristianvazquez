import React from "react";
import styled from "styled-components";
import { MdFilterAlt, MdFilterAltOff } from "react-icons/md";

export const FilterBar = ({ openDrawwer, drawwer }) => {
  return (
    <Container>
      <div className="btn_filter">
        <button onClick={() => openDrawwer(!drawwer)}>
          <MdFilterAlt />
        </button>
      </div>
      <div className="cajon__body"></div>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  .btn_filter {
    width: 90%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    button {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 35px;
      height: 35px;
      border-radius: 50%;
      font-size: 1.2rem;
      background: none;
      border: 1px solid #111;
      transition: all 0.5s ease-in-out;
      &:hover {
        transform: scale(1.1);
      }
    }
  }
`;
