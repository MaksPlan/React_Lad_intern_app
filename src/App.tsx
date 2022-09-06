import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import FavorietsPage from "./pages/FavorietsPage";

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/favorites' element={<FavorietsPage />} />
      </Routes>
    </>
  );
};

export default App;
