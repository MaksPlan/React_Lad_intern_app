import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Category from "../Components/Category";
import Button from "../shared/Buttons";
import { ActionType } from "../store/Favorites/Albums/interface";
import { getFavAlbums } from "../store/Favorites/Albums/selector";
import {DeleteAlbum} from "../store/Favorites/Albums/interface"

const FavorietsPage = () => {
  const FavAlbums = useSelector(getFavAlbums);
  const dispatch = useDispatch();
  // const { name } = FavAlbums;
  console.log(FavAlbums);
  return (
    <div>
      <Category />
      <h2>Любимые Альбомы</h2>
      <ul>
        {

       FavAlbums.map((album) => {
        return <li>
          {album.name}
          <Button buttonAction={() => dispatch(DeleteAlbum(ActionType.DELETE_ALBUM, album.url))} name='delete album' />
        </li>
       })
          // <Button buttonAction={() => dispatch(DeleteAlbum(ActionType.DELETE_ALBUM, ))} name='delete album' />
      
        }
      </ul>
    </div>
  );
};

export default FavorietsPage;
