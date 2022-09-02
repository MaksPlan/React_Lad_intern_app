import { IAlbum, IAlbums, IAlbumsState } from "../../../interface/interface";

export const getFavAlbums = (state: {albums: {albums: IAlbum[]}} ) => state.albums.albums; 