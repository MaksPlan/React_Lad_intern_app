import { ActionArtistsReducer, ActionType } from "./interface";

const InitialState = {
    artists: []
}

export const reducerArtists  = (
    state: IArtistsState  = InitialState,
    action: ActionArtistsReducer,
) => {
    switch (action.type) {
        case ActionType.ADD_ARTIST:
            
            return {...state, albums: [...state.albums, action.payload]};
        case ActionType.DELETE_ARTIST:
            return {...state.albums, albums: [...state.albums.filter((album) => album.mbid !== action.payload)]}    
    
        default:
            return {...state};
    }
}