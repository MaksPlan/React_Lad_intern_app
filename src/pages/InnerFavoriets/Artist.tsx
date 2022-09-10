import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Button from '../../shared/Buttons';
import { deleteArtist, getArtist } from '../../store/Favorites/Artists/artistSlice';
import { useAppSelector } from '../../store/rootReducer';
import style from './album.module.scss';

const Artist = () => {
  const dispatch = useDispatch();
  const FavArtist = useAppSelector(getArtist);
  const nav = useNavigate();

  return (
    <div>

<nav>
    <Button buttonAction={() => nav(-1)} name={'Turn back'} />
   </nav>
      <h2>Любимые Альбомы</h2>
      <ul className={style.fav_albums_box}>
        {FavArtist.map((artist) => {
          return (
            <li>
              {artist.name}
              <Button buttonAction={() => dispatch(deleteArtist(artist))} name="delete album" />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Artist;
