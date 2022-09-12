import React from 'react';
import { useAppSelector } from '../store/rootReducer';
import { getTrackList } from '../store/TraclistInfo/trackListInfoSlice';
import style from './tracklist.module.scss';

const TrackList = () => {

const trackList = useAppSelector(getTrackList);

const visibilityToggler = () => {
    return style.wrapper
}

    return (
        <div className={visibilityToggler()}>
           <h3>TrackList  Info:</h3>
          { (trackList) ?  <section>
         <h4>{trackList.album.name}</h4> 
         <p>{trackList.album.wiki.published}</p>
         <ul>
            {
                trackList.album.tracks.track.map((tr) => {
                    return <li>
                        {tr.name}
                    </li>
                })
            }
         </ul>
         <p>
            {trackList.album.wiki.content}
         </p>
            </section> 
            : 'Empty'} 
        </div>
    );
};

export default TrackList;