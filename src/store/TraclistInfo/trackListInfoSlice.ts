import { createSlice } from "@reduxjs/toolkit";
import { Img } from "../../interface/interface";

interface ITrack {
    name: string;
    url: string;

}

interface ItrackLictAndInfoData {
    album: {
        artist: string;
        image: Img[];
        mbid: string;
        name: string;
        playcount: string;
        tracks: ITrack[];
        url: string;
        wiki: {
            published: string;
            summary: string;
            content: string;

        };

    }
}

const initialState = {
trackList: [],
status: 'wait',
error: null,
};

export const trackListSlice = createSlice({
    name: 'trackList',
    initialState,
    reducers: {
    },
    extraReducers: 
    (builder) => {
        builder
            .addCase(
                fetchSearchAlbums.pending, (state) => {
                    state.status = 'loading';
                    state.error = null;
                })
            .addCase(
                fetchSearchAlbums.fulfilled, (state, action) => {
                    state.status = 'resolved';
                    state.search = action.payload.results.albummatches.album;
                })
            .addCase(
                fetchSearchAlbums.rejected, (state, action) => {})
    }
})