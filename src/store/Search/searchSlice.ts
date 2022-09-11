import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchSearchAlbums } from "../../Components/Search";
import { IAlbum } from "../../interface/interface";
import { searchURL } from "../../mocked/url";
import { createMBID } from "../../utils/createMBID";
import { RootState } from "../rootReducer";



interface initialState {
    search: IAlbum[] | null;
    status: string | null;
    error: string | null;
}

 export const searchSlice = createSlice({
    name: 'search',
    initialState: {
        search: [],
        status: 'wait',
        error: null,
        clearInput: true,
    },
    reducers: {
        clearInput: (state, action) => {
          state.clearInput = action.payload
        },
        searchArtistAsHref: (state, action) => {
            
        }
     },
    extraReducers: (builder) => {
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

});

export const {clearInput} = searchSlice.actions;
export const getSearchState = (state: RootState) => state.search;
export default searchSlice.reducer;