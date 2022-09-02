import { createReducer } from "@reduxjs/toolkit";
import { addArtist, deleteArtist } from "./interface";
// import { ActionArtistsReducer, ActionType } from "./interface";

const InitialState = {
    artists: []
}

export const reducerArtists  = createReducer(InitialState, {
    [addArtist.type]: (state, action) => {
return state.artists = action.payload
    },
//     [deleteArtist.type]: (state, action) => {
//         return state.artists  = state.artists.filter((artist) => artist.mbid !== action.payload);
//     }
})
// (
//     state: IArtistsState  = InitialState,
//     action: ActionArtistsReducer,
// ) => {
//     switch (action.type) {
//         case ActionType.ADD_ARTIST:
            
//             return {...state, albums: [...state.albums, action.payload]};
//         case ActionType.DELETE_ARTIST:
//             return {...state.albums, albums: [...state.albums.filter((album) => album.mbid !== action.payload)]}    
    
//         default:
//             return {...state};
//     }
// }