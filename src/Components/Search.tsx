import { createAsyncThunk } from '@reduxjs/toolkit';
import React, { useEffect, useState } from 'react';
import { searchURL } from '../mocked/url';
import { useAppDispatch } from '../store/rootReducer';
import { clearInput } from '../store/Search/searchSlice';
import style from './search.module.scss';
import axios from 'axios';

export const fetchSearchAlbums = createAsyncThunk(
  'search',
  async function searchAlbums(name: string) {
    const data = await axios.get(searchURL(name))
    return data.data
  }
);

// export const // функция вызова асинхроная 

const Search = () => {
  const dispatch = useAppDispatch();
  const [searchState, setSearchState] = useState<string>('');

  function inputHandler(ev: React.ChangeEvent<HTMLInputElement>) {
    setSearchState(ev.target.value);
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchState) {
        dispatch(clearInput(false));
        return dispatch(fetchSearchAlbums(searchState));
      }
      if (searchState === '<empty string>' || searchState === '') dispatch(clearInput(true));
    }, 1000);
    return () => {
      clearTimeout(timer);
    };
  }, [searchState]);

  return (
    <form>
      <input type="search" className={style.input} onChange={(e) => inputHandler(e)} />
    </form>
  );
};

export default Search;
