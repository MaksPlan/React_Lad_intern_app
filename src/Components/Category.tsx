import React from 'react';
import { Link } from 'react-router-dom';
import style from './category.module.scss';

const Category = ({}) => {
  const category = ['Album', 'Artist', 'Playlist'];
  return (
    <nav>
      <ul className={style.categories}>
        {category.map((element) => {
          return (
            <li>
              <button type="button" className={style.category_element}>
                <Link to={`/favorites/${element.toLowerCase()}`} className={style.nav_element}>
                  {element}
                </Link>
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Category;
