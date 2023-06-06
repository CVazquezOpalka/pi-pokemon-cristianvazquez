import React from "react";
import {
  LandingPage,
  HomePage,
  CreatePage,
  DetailPage,
  Favorites,
} from "./pages/index";
import { Routes, Route } from "react-router-dom";

function App() {
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
