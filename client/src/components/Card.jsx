import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

export const Card = ({ pokemon }) => {
  const navigate = useNavigate();

  return (
    <Container onClick={() => navigate(`/pokemon/${pokemon.id}`)}>
      <picture className="head_container">
        <img src={pokemon.image} alt={pokemon.name} />
      </picture>
      <div className="body_container">
        <div className="title">
          <h3>{pokemon.name}</h3>
          <h4>
            {pokemon.id.length > 5
              ? `#${pokemon.id.slice(0, 5)}...`
              : pokemon.id < 10
              ? `#00${pokemon.id}`
              : pokemon.id < 100
              ? `#0${pokemon.id}`
              : `#${pokemon.id}`}
          </h4>
        </div>
        <div className="types">
          {pokemon.tipos?.map((e) => (
            <>
              <span key={e.name ? e.name : e} className={e.name ? e.name : e}>
                {e.name ? e.name : e}
              </span>
            </>
          ))}
        </div>
      </div>
    </Container>
  );
};

const Container = styled.div`
  width: 200px;
  height: 300px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  border-radius: 15px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.4);
  overflow: hidden;
  opacity: 0.5;
  transition: 0.5s ease-in-out;
  background: radial-gradient(closest-side, rgba(0,0,0,0.4), transparent);
  backdrop-filter: blur(5px);

  &:hover {
    transform: translateY(-20px);
    opacity: 1;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.8);
  }
  .head_container {
    margin-top: 10px;
    width: 100%;
    height: 120px;
    display: flex;
    align-items: center;
    justify-content: center;
    img {
      width: 150px;
      object-fit: cover;
    }
  }
  .body_container {
    margin-top: 20px;
    width: 100%;
    height: calc(100% - 120px);
    display: flex;
    flex-direction: column;
    align-items: center;
    .title {
      width: 100%;
      height: (100% - 80px);
      text-align: center;
      font-size: 1.3rem;
      text-transform: uppercase;
    }
    .types {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 10px;
      color: #fff;
      font-weight: 500;
      font-size: 1rem;
      text-transform: uppercase;
      span {
        display: block;
        padding: 5px 10px;
        border-radius: 10px;
      }
      .water {
        background-color: #4592c4;
      }

      .grass {
        background-color: #9bcc50;
      }

      .poison {
        background-color: #7e0058;
      }

      .fire {
        background-color: #ff7402;
      }

      .bug {
        background-color: #729f3f;
      }

      .dragon {
        background: linear-gradient(180deg, #53a4cf 50%, #f16e57 50%);
      }

      .flying {
        background-color: #3dc7ef;
      }

      .ground {
        background-color: #ab9842;
      }

      .steel {
        background-color: #9eb7b8;
      }

      .psychic {
        background-color: #f366b9;
      }

      .ice {
        background-color: #51c4e7;
      }

      .ghost {
        background-color: #4d5b64;
      }

      .normal {
        background-color: #a4acaf;
      }

      .rock {
        background-color: #a38c21;
      }

      .electric {
        background-color: #bba909;
      }

      .fighting {
        background-color: #d56723;
      }

      .fairy {
        background-color: #fdb9e9;
      }

      .dark {
        background-color: #707070;
      }
    }
  }
`;
