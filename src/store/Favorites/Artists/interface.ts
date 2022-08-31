export enum  ActionType  {
ADD_ARTIST = 'ADD_ARTIST',
DELETE_ARTIST = 'DELETE_ARTIST',
}

export type ActionTypeName = ActionType.ADD_ARTIST | ActionType.DELETE_ARTIST;

export interface ActionArtistsReducer {
    type: ActionTypeName;
    payload?: any;
  }
//================ActionCreater================

