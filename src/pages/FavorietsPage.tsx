import React from "react";
import { useSelector } from "react-redux";
import Category from "../Components/Category";
import { getFavAlbums } from "../store/Favorites/Albums/selector";

const FavorietsPage = () => {
  const FavAlbums = useSelector(getFavAlbums);
  return (
    <div>
      <Category />
      <h2>Любимые Альбомы</h2>
      <ul>
        {/* {FavAlbums.map((album) => {
         return <li>{album}</li>;
        })} */}
      </ul>
    </div>
  );
};

export default FavorietsPage;
