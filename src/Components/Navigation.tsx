import React from 'react';
import { Link } from 'react-router-dom';
import Search from './Search';
import style from './navigation.module.scss';

const Navigation = () => {
  return (
    <nav>
      <h1>Last.fm Search</h1>
      <Search />

      <div className={style.nav}>
        <Link to="/" className={style.nav_element}>
          Home
        </Link>
        <Link to="/favorites" className={style.nav_element}>
          Favoriets
        </Link>
      </div>
    </nav>
  );
};

export default Navigation;
