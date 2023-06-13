import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Card, Loader } from "./index";
import { useSelector } from "react-redux";

export const CardContext = ({ pokePagination, filterPagination }) => {
  const loading = useSelector((state) => state.isLoading);
  return (
    <>
      {loading ? (
        <ContainerLoader>
          <Loader />
        </ContainerLoader>
      ) : filterPagination.length ? (
        <Container>
          {filterPagination?.map((e) => (
            <div key={e.id}>
              <Card pokemon={e} />
            </div>
          ))}
        </Container>
      ) : (
        <Container>
          {pokePagination.map((e) => (
            <div key={e.id}>
              <Card pokemon={e} />
            </div>
          ))}
        </Container>
      )}
    </>
  );
};

const Container = styled.div`
  margin: 30px 0;
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  align-items: center;
  justify-items: center;
  gap: 30px;
  @media (max-width: 867px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 400px) {
    grid-template-columns: 100%;
  }
`;
const ContainerLoader = styled.main`
  width: 100vw;
  height: 506px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
