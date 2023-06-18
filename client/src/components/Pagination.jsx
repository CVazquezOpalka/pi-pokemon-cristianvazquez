import React from "react";
import styled from "styled-components";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { BotonRedondo } from "../assets/styles/style";

export const Pagination = ({ totalPages, onPrev, onNext, pages }) => {
  
  return (
    <>
      {totalPages === 0 ? null : (
        <Container>
          {pages > 1 ? (
            <BotonRedondo onClick={onPrev}>
              <AiOutlineLeft />
            </BotonRedondo>
          ) : null}
          <h3>
            <span>{pages}</span> de <span>{totalPages}</span>
          </h3>
          {pages === totalPages ? null : (
            <BotonRedondo onClick={onNext}>
              <AiOutlineRight />
            </BotonRedondo>
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
  buttonBotonRedondo
  }
`;
