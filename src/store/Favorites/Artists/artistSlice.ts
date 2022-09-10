import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../rootReducer";

export type TArtist  =   {
    url: string;
    name: string;
    mbid: string;
};

export type TArtistState = {artists: TArtist[]}

const initialState: TArtistState = {
artists: [],
};

export const artistSlice = createSlice({
    name: 'artisits',
    initialState,
    reducers: {
        addArtist: (state, action: PayloadAction<TArtist>) => {
            const uniqAlbums = [...state.artists, action.payload]
            state.artists = Array.from(new Set(uniqAlbums));
          },
          deleteArtist: (state, action: PayloadAction<TArtist>) => {
            state.artists = state.artists.filter(
              (art) => art.mbid !== action.payload.mbid
            );
          },
    }
})

export const getArtist = (state: RootState) => state.artists.artists;
export const {addArtist, deleteArtist} = artistSlice.actions;
export default artistSlice.reducer;