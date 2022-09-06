import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import { albumSlice } from "./Favorites/Albums/albumSlice";
import { reducerArtists } from "./Favorites/Artists/reducer";

export const store = configureStore(
   { reducer: {
    albums: albumSlice.reducer,
    artists: reducerArtists,
    }}
);

export type AppDispatch = typeof store.dispatch;
 export type RootState = ReturnType<typeof store.getState>;
 export type AppThunk<ReturnType = void> = ThunkAction<
   ReturnType,
   RootState,
   unknown,
   Action<string>
 >;
