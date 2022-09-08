import React from 'react';
import { useDispatch } from 'react-redux';
import style from './search.module.scss';

const Search = () => {
    const dispatch = useDispatch()
    return (
        <>
          <input type="text"  className={style.input}/>  
        </>
    );
};

export default Search;