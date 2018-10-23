import React from 'react';
import { Link } from 'react-router-dom'

const Track = (props) => {
  const { track } = props;
  return (
    <div className='col-md-6'>
      <div className="card mb-4 shadow-sm">
        <div className="card-body">
          <h5>{track.artist_name}</h5>
          <p className="card-text">
          <strong><i className="fas fa-play"></i> {track.track_name}</strong>
          <br/>
          <strong><i className="fas fa-compact-disc"></i> {track.album_name}</strong>
          </p>
          <Link to={`/track/lyrics/${track.track_id}`} className="btn btn-dark btn-block">
          <i className="fas fa-chevron-right"></i><span className="text-white"> View Lyrics</span>
          </Link>
        </div>
      </div>
    </div>
  )
}
export default Track;