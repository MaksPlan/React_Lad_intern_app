import { configureStore } from "@reduxjs/toolkit";
import { albumSlice } from "./Favorites/Albums/albumSlice";
import { reducerArtists } from "./Favorites/Artists/reducer";

export const store = configureStore(
   { reducer: {
    albums: albumSlice.reducer,
    artists: reducerArtists,
    }}
);


