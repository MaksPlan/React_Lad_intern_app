import { createSlice } from "@reduxjs/toolkit";
import { FetchGetInfo } from "../../Components/GetInfo";
import { Img } from "../../interface/interface";
import { RootState } from "../rootReducer";

export interface ITrack {
   name: string;
    url: string;

}

export interface ItrackLictAndInfoData {
    album: {
        artist: string;
        image: Img[];
        mbid: string;
        name: string;
        playcount: string;
        tracks: {
           track: ITrack[]};
        url: string;
        wiki: {
            published: string;
            summary: string;
            content: string;

        };

    }
}

type TiniTialState = {
    trackList: ItrackLictAndInfoData | null;
    status: string;
    error: string | null;
}

const initialState: TiniTialState = {
trackList: null,
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
                FetchGetInfo.pending, (state) => {
                    state.status = 'loading';
                    state.error = null;
                })
            .addCase(
                FetchGetInfo.fulfilled, (state, action) => {
                    state.status = 'resolved';
                    state.trackList = action.payload;
                })
            .addCase(
                FetchGetInfo.rejected, (state, action) => {})
    }
})


export const getTrackList = (state: RootState) => state.trackList.trackList;
export default trackListSlice.reducer;