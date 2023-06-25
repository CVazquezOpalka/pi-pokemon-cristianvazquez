import React from "react";
import styled from "styled-components";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { BotonRedondo } from "../assets/styles/style";

export const Pagination = ({
  totalPages,
  onPrev,
  onNext,
  pages,
  fastPrev,
  fastNext,
}) => {
  console.log(pages);
  return (
    <>
      <Container>
        {!totalPages ? (
          <h3>Cargando Paginado..</h3>
        ) : (
          <>
            {pages > 1 && (
              <>
                <BotonRedondo onClick={fastPrev}>
                  <AiOutlineLeft />
                  <AiOutlineLeft />
                </BotonRedondo>
                <BotonRedondo onClick={onPrev}>
                  <AiOutlineLeft />
                </BotonRedondo>
              </>
            )}
            <h3>
              <span>{pages}</span> de <span>{totalPages}</span>
            </h3>
            {pages !== totalPages && (
              <>
                <BotonRedondo onClick={onNext}>
                  <AiOutlineRight />
                </BotonRedondo>
                <BotonRedondo onClick={fastNext}>
                  <AiOutlineRight />
                  <AiOutlineRight />
                </BotonRedondo>
              </>
            )}
          </>
        )}
      </Container>
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
  transition: all 0.3s;
  h3 {
    transition: all 0.3s;
    font-size: 18px;
    letter-spacing: 1px;
  }
`;
