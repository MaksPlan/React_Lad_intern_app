import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Category from "../Components/Category";
import { IAlbum } from "../interface/interface";
import Button from "../shared/Buttons";
import { deleteAlbum, getAlbums } from "../store/Favorites/Albums/albumSlice";
import { RootState } from "../store/rootReducer";

const FavorietsPage = () => {
  const FavAlbums = useSelector(getAlbums);
  const dispatch = useDispatch();

  console.log(FavAlbums);
  return (
    <div>
      <Category />
      <h2>Любимые Альбомы</h2>
      <ul>
        {
          FavAlbums.map((album) => {
            return (
              <li>
                {album.name}
                <Button buttonAction={() => dispatch(deleteAlbum(album))} name='delete album' />
              </li>
            );
          })
        }
      </ul>
    </div>
  );
};

export default FavorietsPage;
