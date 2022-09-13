import React from 'react';
import Button from '../shared/Buttons';
import { useAppDispatch, useAppSelector } from '../store/rootReducer';
import { getTrackList } from '../store/TraclistInfo/trackListInfoSlice';
import style from './tracklist.module.scss';

const TrackList = () => {
  const trackList = useAppSelector(getTrackList);



  return (
    <div>
      <h3>TrackList Info:</h3>
      {trackList ? (
        <section>
          <h4>{trackList.album.name}</h4>
          <p>Опубликован: {trackList.album.wiki.published}</p>
          <ul>
            Треки:
            {trackList.album.tracks.track.map((tr, i) => {
              return <li>{tr.name}</li>;
            })}
          </ul>
          Заметка об альбоме:
          <p>{trackList.album.wiki.content}</p>
        </section>
      ) : (
        'Empty'
      )}
    </div>
  );
};

export default TrackList;
