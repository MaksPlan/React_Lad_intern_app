import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Navigation from '../Components/Navigation';
import { IAlbum, IAlbums } from '../interface/interface';
import { URL } from '../mocked/url';
import { RootState } from '../store/rootReducer';
import { getSearchState } from '../store/Search/searchSlice';
import { createMBID } from '../utils/createMBID';
import Albums from './Albums';

const HomePage = () => {
  const [albums, setAlbums] = useState<IAlbum[] | null>(null);
  // const [searchAlbums, setSearchAlbums] = useState<IAlbum[] | null>();
  const searchResult = useSelector<RootState>((state) => state.search.search);

  useEffect(() => setAlbums(searchResult), [searchResult]);

  const gettopalbums = async () => {
    try {
      const respocne = await fetch(URL + '&limit=10');
      const data = await respocne.json();
      console.log(data.albums);
      let addMbid = createMBID(data.albums.album);
      // setAlbums(data.albums);
      setAlbums(addMbid);
      console.log('albums', albums);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    gettopalbums();
  }, []);

  // useEffect(() => console.log(albums), [albums]);

  return (
    <div>
      {/* {albums ? 'AL' : "Loading"} */}
      {albums ? <Albums albums={albums} /> : 'Loading'};
    </div>
  );
};

export default HomePage;
