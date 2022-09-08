import React, { useEffect, useState } from 'react';
import Navigation from '../Components/Navigation';
import { IAlbum, IAlbums } from '../interface/interface';
import { URL } from '../mocked/url';
import { createMBID } from '../utils/createMBID';
import Albums from './Albums';

const HomePage = () => {
 
  const [albums, setAlbums] = useState<IAlbum[] | null>(null);
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
