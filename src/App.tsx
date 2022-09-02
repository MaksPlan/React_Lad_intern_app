import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navigation from './Components/Navigation';
import HomePage from './pages/HomePage';
import FavorietsPage from './pages/FavorietsPage';

const App = () => {
  return (
    <>
  <Navigation/>
    <Routes>
   <Route path='/' element={<HomePage/>} />
   <Route path='/favorites' element={<FavorietsPage/>} />
    </Routes>
    </>
  
  );
};

export default App;