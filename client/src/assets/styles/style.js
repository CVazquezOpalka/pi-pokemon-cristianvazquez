import styled from "styled-components";

export const BotonRedondo = styled.button`
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
`;

export const BTNGoBack = styled.button`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 1px solid ${(props) => (props.border ? "#fff" : "#111")};
  background: none;
  font-size: 1.1rem;
  transition: 0.3s ease;
  color: ${(props) => (props.color ? "#fff" : "#111")};
  &:hover {
    transform: scale(1.1);
  }
`;

export const BotonRectangulo = styled.button``;
