import React from "react";
import styled from "styled-components";
import { useSelector} from "react-redux";


export const CreatePage = () => {
  const typeState = useSelector((state) => state.types);
 

  return (
    <Container>
      <div className="container_form">
        <div className="title_form">
          <h1>Crea a tu propio pokemon y atrapalos a todos</h1>
        </div>
        <form >
          <div className="name">
            <input type="text" placeholder="ingrese un nombre" />
          </div>
          <div className="vida">
            <label htmlFor="">Vida:</label>
            <input type="number" />
          </div>
          <div className="fuerza">
            <label htmlFor="">Fuerza:</label>
            <input type="number" />
          </div>
          <div className="defensa">
            <label htmlFor="">Defensa:</label>
            <input type="number" />
          </div>
          <div className="velocidad">
            <label htmlFor="">Velocidad:</label>
            <input type="number" />
          </div>
          <div className="peso">
            <label htmlFor="">Peso:</label>
            <input type="number" />
          </div>
          <div className="altura">
            <label htmlFor="">Altura:</label>
            <input type="number" />
          </div>
          <div className="tipos">
            <>
              {typeState?.map((e) => (<div className="checkbox" key={e.id}>
                  <label>{e.name}</label>
                  <input type="checkbox" />
                </div>)
              )}
              </>
          </div>
        </form>
      </div>
    </Container>
  );
};

const Container = styled.main`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  .container_form {
    width: 80%;
    height: 100%;
    margin: 0 auto;
    background-color: green;
    display: flex;
    flex-direction: column;
    .title_form {
      background-color: red;
      width: 100%;
      height: 50px;
      display: flex;
      align-items: center;
      justify-content: center;
      h1 {
        width: 100%;
        height: auto;
        text-align: center;
        text-transform: uppercase;
        letter-spacing: 1px;
        text-decoration: underline;
      }
    }
  }
`;
