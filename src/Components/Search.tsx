import { createAsyncThunk } from '@reduxjs/toolkit';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { searchURL } from '../mocked/url';
import { useAppDispatch } from '../store/rootReducer';
import { createMBID } from '../utils/createMBID';
import style from './search.module.scss';

export const fetchSearchAlbums = createAsyncThunk(
    'search',
    async function searchAlbums (name: string,) {
          const response = await fetch(searchURL(name));
          const data = await response.json();
          return data;
      }
)



const Search = () => {
    const dispatch = useAppDispatch()
    const [searchState, setSearchState] = useState<string>();

    function inputHandler(ev: React.ChangeEvent<HTMLInputElement>) {
     setSearchState(ev.target.value)
        }

        useEffect(() => {
           const timer =  setTimeout(() => {
        if (searchState) dispatch(fetchSearchAlbums(searchState))
            }, 4000)
return () => {
    clearTimeout(timer)
}

        }, [searchState])

    return (
        <>
          <input type="text"  className={style.input} onChange={(e) =>inputHandler(e)} />  
        </>
    );
};

export default Search;