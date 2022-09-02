import { IAlbum } from "../../../interface/interface";

export enum  ActionType  {
 ADD_ALBUM  = 'ADD_ALBUM',
DELETE_ALBUM = 'DELETE_ALBUM',
}

export type ActionTypeName = ActionType.ADD_ALBUM | ActionType.DELETE_ALBUM;

export interface ActionAlbumsReducer {
    type: ActionTypeName;
    payload?: any;
  }
//================ActionCreater================


export function AddALbum(name = ActionType.ADD_ALBUM , data: IAlbum ) {
    return {type: name, payload: data}
}

export function DeleteAlbum(name = ActionType.DELETE_ALBUM, mbid: string) {
    return {type: name, payload: mbid}
}