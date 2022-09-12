import React, { FC } from 'react';
import style from './genre.module.scss';

interface IProps {
  chooseGenre: Function;
}

const Genre: FC<IProps> = ({ chooseGenre }) => {
  const genres = ['rock', 'rap', 'disco', 'jazz', 'neoclassic', 'hip-hop','dubstep', 'lo-fi', 'techno',];

  return (
    <>
    <h1>Топ 10 альбомов в жанре: </h1>
    <ul>
      {genres.map((element) => {
        return (
          <li>
            <button type="button" onClick={() => chooseGenre(element)} className={style.button}>
              {element}
            </button>
          </li>
        );
      })}
    </ul>
    </>
    
  );
};

export default Genre;
