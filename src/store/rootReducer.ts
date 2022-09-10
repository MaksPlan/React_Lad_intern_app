import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { albumSlice } from "./Favorites/Albums/albumSlice";
import artistSlice from "./Favorites/Artists/artistSlice";
import { searchSlice } from "./Search/searchSlice";

export const store = configureStore(
   { reducer: {
    albums: albumSlice.reducer,
    artists: artistSlice,
    search: searchSlice.reducer,
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

 export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;