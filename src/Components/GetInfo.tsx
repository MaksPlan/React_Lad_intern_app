import React, { FC } from 'react';
import axios from 'axios';
import style from './getinfo.module.scss';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { URLGetInfo } from '../mocked/url';
import { useAppDispatch } from '../store/rootReducer';

interface IProps {
  artist: string;
  album: string;
  children: string;
}

export const FetchGetInfo = createAsyncThunk('traclist', 
async function getData(query: string) {
  const data = await axios.get(query);
  return data.data;
});

const GetInfo: FC<IProps> = ({ children, artist, album }) => {
  const dispatch = useAppDispatch();

  function handlerGetInfo(artist: string, album: string) {
    
    return dispatch(FetchGetInfo(URLGetInfo(artist, album)));
  }

  return (
    <button type="button" onClick={() => handlerGetInfo(artist, album)} className={style.button}>
      {children}
    </button>
  );
};

export default GetInfo;
