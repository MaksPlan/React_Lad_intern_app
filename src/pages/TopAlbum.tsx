import React, { FC } from 'react';
import { useDispatch } from 'react-redux';
import { IAlbum, IAlbums } from '../interface/interface';
import Button from '../shared/Buttons';
import { addALbum } from '../store/Favorites/Albums/albumSlice';
import { addArtist } from '../store/Favorites/Artists/artistSlice';
import style from './albums.module.scss';
interface IProps {
  albums: IAlbum[];
}

const TopAlbum: FC<IProps> = ({ albums }) => {
  const dispatch = useDispatch();

  return (
    <>
      <ul className={style.chart}>
        {albums.map((al) => {
          return (
            <li className={style.album_container}>
              <p className={style.album_name}>Альбом {al.name}</p>
              <p>Исполниетль {al.artist.name} </p>
              <Button buttonAction={() => dispatch(addArtist(al.artist))} name="add artist" />
              <a href={`${al.url}?autostar`} className={style.href}>
                Play me
              </a>
              <img className={style.img} src={al.image[1]['#text']} alt="" />
              <Button buttonAction={() => dispatch(addALbum(al))} name="add album" />
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default TopAlbum;
