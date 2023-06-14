import React, {useEffect} from "react";
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
import { Search } from "./pages/Search";

function App() {
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(getTypes());
    dispatch(getPokemons())
  },[])
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/createPokemon" element={<CreatePage />} />
      <Route path="/pokemon/:id" element={<DetailPage />} />
      <Route path="/favorites" element={<Favorites />} />
      <Route path="/search" element={<Search />} />
    </Routes>
  );
}

export default App;
