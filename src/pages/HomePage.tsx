import React, { useEffect, useState } from 'react';
import { IAlbum } from '../interface/interface';
import { URL } from '../mocked/url';
import { useAppSelector } from '../store/rootReducer';
import { createMBID } from '../utils/createMBID';
import TopAlbum from './TopAlbum';

const HomePage = () => {
  const [albums, setAlbums] = useState<IAlbum[] | null>(null);
  const [searchAlbums, setSearchAlbums] = useState<IAlbum[] | null>(null);
  const [topAlbums, setTopAlbums] = useState<IAlbum[] | null>(null);

  const searchResult = useAppSelector((state) => state.search.search);
  const flagInput = useAppSelector((state) => state.search.clearInput);

  const gettopalbums = async () => {
    try {
      const respocne = await fetch(URL + '&limit=10');
      const data = await respocne.json();
      console.log(data.albums);
      let addMbid = createMBID(data.albums.album);
      setTopAlbums(addMbid);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    gettopalbums();
  }, []);

  useEffect(() => {
    setAlbums(topAlbums);
  }, [topAlbums]);

  useEffect(() => {
    setSearchAlbums(searchResult);
    setAlbums(searchResult);
  }, [searchResult]);

  useEffect(() => {
    flagInput ? setAlbums(topAlbums) : setAlbums(searchAlbums);
  }, [flagInput]);

  return <div>{albums ? <TopAlbum albums={albums} /> : 'Loading'};</div>;
};

export default HomePage;
