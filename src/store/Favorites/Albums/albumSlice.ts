import { createSlice, PayloadAction} from "@reduxjs/toolkit";
import { IAlbum } from "../../../interface/interface";
import { RootState } from "../../rootReducer";

  type TAlbumState = { albums: IAlbum[] };
  const initialState: TAlbumState = {
    albums: [],
  };

  export const albumSlice = createSlice({
    name: "albums",
    initialState,
    reducers: {
      addALbum: (state, action: PayloadAction<IAlbum>) => {
 
    const isUnique = state.albums.some((album) => album.mbid === action.payload.mbid)

    if (!isUnique) state.albums = [...state.albums, action.payload]
    

      },
      deleteAlbum: (state, action: PayloadAction<IAlbum>) => {
        state.albums = state.albums.filter(
          (album) => album.mbid !== action.payload.mbid
        );
      },
    
    },
  });

  export const getAlbums = (state: RootState) => state.albums.albums

  export const {addALbum, deleteAlbum} = albumSlice.actions;
  export default albumSlice.reducer;