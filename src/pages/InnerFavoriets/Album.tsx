import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Button from '../../shared/Buttons';
import { getAlbums, deleteAlbum } from '../../store/Favorites/Albums/albumSlice';
import { useAppSelector } from '../../store/rootReducer';
import style from './album.module.scss'


const Album = () => {

    const FavAlbums = useAppSelector(getAlbums);
  /* 1)сделать проброс из категории наверх на страницу избранного,
   по названию категории делать выбор между селекторами

   3) отладить стили, чтобы карточки в чарте нормально отображались

   4) сделать рекомендации и поиск-ссылку по исполнителю

   5) написать редюссер по плейлистам как массив обьектов 

   6)
   
   */
  const dispatch = useDispatch();
  const nav = useNavigate();


  return (
    <div>
   <nav>
    <Button buttonAction={() => nav(-1)} name={'Turn back'} />
   </nav>
      <h2>Любимые Альбомы</h2>
      <ul className={style.fav_albums_box}>
        {FavAlbums.map((album) => {
          return (
            <li>
              {album.name}
              <Button buttonAction={() => dispatch(deleteAlbum(album))} name="delete album" />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Album;