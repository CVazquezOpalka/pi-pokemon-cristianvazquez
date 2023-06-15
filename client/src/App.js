import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  LandingPage,
  HomePage,
  CreatePage,
  DetailPage,
  Favorites,
} from "./pages/index";
import { getTypes, getPokemons } from "./redux/actions";

function App() {
  //logica del componente
  const dispatch = useDispatch();
  //carga el estado inicial de tipos y los pokemones
  useEffect(() => {
    dispatch(getTypes());
    dispatch(getPokemons());
  }, []);
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/createPokemon" element={<CreatePage />} />
      <Route path="/pokemon/:id" element={<DetailPage />} />
      <Route path="/favorites" element={<Favorites />} />
    </Routes>
  );
}

export default App;
