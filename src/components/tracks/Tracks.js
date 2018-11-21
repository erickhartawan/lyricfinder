import React, { Component,useContext } from 'react';
import TrackContext  from '../../context';
import Spinner from '../layout/Spinner';
import Track from '../tracks/Track';
import Search from './Search';

const Tracks = () => {
  const value = useContext(TrackContext);
  const {track_list,heading} = value;
  // console.log(track_list);
  // console.log(heading);
  if (track_list === undefined && track_list.lenght === 0){
    return (
      <Spinner />
    )} 
    else {
      return(
      <React.Fragment>
      {track_list.map(items => (
        <Track track={items.track} />
        
        // <h1>{items.track.album_name}</h1>
      ))}
    
      </React.Fragment>
    );
    }

}

export default Tracks;
