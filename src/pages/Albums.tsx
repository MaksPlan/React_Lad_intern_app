import React, { FC } from "react";
import { useDispatch } from "react-redux";
import { IAlbum, IAlbums } from "../interface/interface";
import Button from "../shared/Buttons";
import { addALbum } from "../store/Favorites/Albums/albumSlice";
interface IProps {
  albums: IAlbum[];
}

const Albums: FC<IProps> = ({ albums }) => {
  const dispatch = useDispatch();

  return (
    <>
      <ul>
        {albums.map((al) => {
     
          

          return (
            <li>
              <p>{al.name}</p>
              <a href={`${al.url}?autostar`}>Play me</a>
              <Button buttonAction={() => dispatch(addALbum(al))} name='add album' />
              
            </li>
          );
        })}
      </ul>
      {/* <h2>{albums["@attr"].tag}</h2> */}
    </>
  );
};

export default Albums;
