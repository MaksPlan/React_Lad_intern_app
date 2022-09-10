import React from 'react';
import Navigation from '../../Components/Navigation';
import style from './hader.module.scss';

const Header = () => {
  return (
    <header className={style.header}>
      <h1>Фонотека</h1>
      <Navigation />;
    </header>
  );
};

export default Header;
