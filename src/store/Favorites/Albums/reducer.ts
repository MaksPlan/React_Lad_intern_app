import { IAlbumsState } from "../../../interface/interface";
import { ActionAlbumsReducer, ActionType } from "./interface";

const InitialState = {
    albums: []
}

export const reducerFavAlbums  = (
    state: IAlbumsState  = InitialState,
    action: ActionAlbumsReducer,
) => {
    switch (action.type) {
        case ActionType.ADD_ALBUM:
                    return {...state, albums: Array.from( new Set([...state.albums, action.payload]))};
        case ActionType.DELETE_ALBUM:
            return {...state, albums: state.albums.filter((album) => album.url !== action.payload.url)}    
        default:
            return {...state};
    }
}