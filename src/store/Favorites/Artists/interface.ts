import { createAction } from "@reduxjs/toolkit";

// export enum  ActionType  {
// ADD_ARTIST = 'ADD_ARTIST',
// DELETE_ARTIST = 'DELETE_ARTIST',
// }

// export type ActionTypeName = ActionType.ADD_ARTIST | ActionType.DELETE_ARTIST;

// export interface ActionArtistsReducer {
//     type: ActionTypeName;
//     payload?: any;
//   }

  export const addArtist = createAction('ADD_ARTIST');
  export const deleteArtist = createAction('DELETE_ARTIST');

