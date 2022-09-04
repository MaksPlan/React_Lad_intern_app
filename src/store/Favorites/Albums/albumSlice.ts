import { createEntityAdapter, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IAlbum } from "../../../interface/interface";

type TAlbumState = {albums: IAlbum[]}

const AlbumsAdapter = createEntityAdapter<TAlbumState>();

export const albumSlice = createSlice({
    name: 'albums',
    InitialState: AlbumsAdapter.getInitialState({
        albums: [],
    }),
    reducers: {
        addALbum: (state: TAlbumState, action: PayloadAction<IAlbum>) => {
             state.albums = [...state.albums, action.payload]},
        deleteAlbum: (state: TAlbumState, action: PayloadAction<IAlbum>) => {
                 state.albums = state.albums.filter((album) => album.mbid !== action.payload.mbid);
            }
    }
})