import React, { FC } from "react";
import { useDispatch } from "react-redux";
import { IAlbum, IAlbums } from "../interface/interface";
import Button from "../shared/Buttons";
import { addALbum } from "../store/Favorites/Albums/albumSlice";
import style from "./albums.module.scss";
interface IProps {
  albums: IAlbum[];
}

const Albums: FC<IProps> = ({ albums }) => {
  const dispatch = useDispatch();

  return (
    <>
      <ul className={style.chart}>
        {albums.map((al) => {
     
          

          return (
            <li className={style.album_container}>
              <p className={style.album_name}>{al.name}</p>
              <a href={`${al.url}?autostar`} className={style.href}>Play me</a>
              <Button buttonAction={() => dispatch(addALbum(al))} name='add album' />
              
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Albums;
