import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Button from '../../shared/Buttons';
import { getAlbums, deleteAlbum } from '../../store/Favorites/Albums/albumSlice';
import { useAppSelector } from '../../store/rootReducer';
import style from './album.module.scss'


const Album = () => {

    const FavAlbums = useAppSelector(getAlbums);
  const dispatch = useDispatch();
  const nav = useNavigate();


  return (
    <div className={style.wrapper}>
   <nav>
    <Button buttonAction={() => nav(-1)} name={'Turn back'} />
   </nav>
      <h2>Любимые Альбомы</h2>
      <ul className={style.fav_albums_box}>
        {FavAlbums.map((album) => {
          return (
            <li className={style.element}>
             <p className={style.name}>
             {album.name}
              </p> 
              <Button buttonAction={() => dispatch(deleteAlbum(album))} name="delete album" />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Album;