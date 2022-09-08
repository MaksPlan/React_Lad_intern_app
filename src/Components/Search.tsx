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

    return (
        <>
          <input type="text"  className={style.input} onChange={(e) => fetchSearchAlbums(e.currentTarget.value)} />  
        </>
    );
};

export default Search;