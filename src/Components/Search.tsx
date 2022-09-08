import { createAsyncThunk } from '@reduxjs/toolkit';
import React from 'react';
import { useDispatch } from 'react-redux';
import { searchURL } from '../mocked/url';
import { createMBID } from '../utils/createMBID';
import style from './search.module.scss';

export const fetchSearchAlbums = createAsyncThunk(
    'search',
    async function searchAlbums (name: string) {
          const response = await fetch(searchURL(name));
          const data: any = await response.json();
          return data;
      }
)



const Search = () => {
    const dispatch = useDispatch()
    function inputHandler(ev: React.ChangeEvent<HTMLInputElement>) {
        let album  = ev.target.value;
        return fetchSearchAlbums(album);
        }


    return (
        <>
          <input type="text"  className={style.input} onChange={(e) =>inputHandler(e)} />  
        </>
    );
};

export default Search;