import React, { useEffect, useState } from 'react';
import { IAlbum } from '../interface/interface';
import { URL } from '../mocked/url';
import { useAppSelector } from '../store/rootReducer';
import { createMBID } from '../utils/createMBID';
import TopAlbum from './TopAlbum';
import axios from 'axios';
import Genre from '../Components/Genre';
import style from './homepage.module.scss';
import TrackList from '../Components/TrackList';
import { getTrackList, ItrackLictAndInfoData } from '../store/TraclistInfo/trackListInfoSlice';

const HomePage = () => {
  const [albums, setAlbums] = useState<IAlbum[] | null>(null);
  const [searchAlbums, setSearchAlbums] = useState<IAlbum[] | null>(null);
  const [topAlbums, setTopAlbums] = useState<IAlbum[] | null>(null);
  const [genre, setGenre] = useState<string>('disco');
  const [tracks, setTrack] = useState<ItrackLictAndInfoData | null>(null);

  const searchResult = useAppSelector((state) => state.search.search);
  const flagInput = useAppSelector((state) => state.search.clearInput);
  const trackList = useAppSelector(getTrackList);

  function chooseGenre(genre: string) {
    return setGenre(genre);
  }

  const gettopalbums = async () => {
    try {
      axios.get(URL(genre) + '&limit=10').then((response) => {
        const newData = response.data;
        console.log(newData.albums);
        let addMbid = createMBID(newData.albums.album);
        setTopAlbums(addMbid);
      });
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

  useEffect(() => {
    gettopalbums();
  }, [genre]);

  useEffect(() => {
    setTrack(trackList);
  }, [trackList]);

  return (
    <div className={style.wrapper}>
      <div className={style.tracklist}>
        {tracks ? <TrackList /> : 'TrackList Info: для справки нажмите на альбом'}
      </div>
      <div className={style.genre}>
        <Genre chooseGenre={chooseGenre} />
      </div>

      <div className={style.albums}>{albums ? <TopAlbum albums={albums} /> : 'Loading'};</div>
    </div>
  );
};

export default HomePage;
