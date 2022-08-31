import React, { FC } from "react";
import { IAlbums } from "../interface/interface";

interface IProps {
  albums: IAlbums;
}

const Albums: FC<IProps> = ({ albums }) => {
  return (
    <>
      <ul>
        {albums.album.map((al) => {
          return (
            <li>
              <p>{al.name}</p>
              <a href={`${al.url}?autostar`}>Play me</a>
            </li>
          );
        })}
      </ul>
      <h2>{albums["@attr"].tag}</h2>
    </>
  );
};

export default Albums;
