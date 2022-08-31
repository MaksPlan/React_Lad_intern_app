import { configureStore } from "@reduxjs/toolkit";
import { reducerFavAlbums } from "./Favorites/Albums/reducer";
import { reducerArtists } from "./Favorites/Artists/reducer";

export const store = configureStore(
   { reducer: {
    albums: reducerFavAlbums,
    artists: reducerArtists,
    }}
);