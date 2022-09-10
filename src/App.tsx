import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import FavorietsPage from './pages/FavorietsPage';
import Album from './pages/InnerFavoriets/Album';
import Artist from './pages/InnerFavoriets/Artist';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/favorites" element={<FavorietsPage />} />
        <Route path="/favorites/album" element={<Album />} />
        <Route path="/favorites/artist" element={<Artist />} />
      </Routes>
    </>
  );
};

export default App;
