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
        <>
        <Search />
        <h1 className='text-center mb-4'>
          {heading}
        </h1>
      <div className="row"> 
      {track_list.map(items => (
        <Track track={items.track} />
      ))}
      </div>
      </>
    );
    }

}

export default Tracks;
