import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import Spinner from '../layout/Spinner.js';
import Moment from 'react-moment';

class Lyrics extends Component {
    state = {
        track:{},
        lyrics:{}
    }
    componentDidMount(){
        axios
        .get(
            `https://infinite-lowlands-58555.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.lyrics.get?
            track_id=${this.props.match.params.id}&apikey=${process.env.REACT_APP_MM_KEY}
            `)
        .then( res => {
            //console.log(res.data.message.body.lyrics)
            this.setState({lyrics: res.data.message.body.lyrics})
        },
            axios
            .get(
                `https://infinite-lowlands-58555.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.get?
            track_id=${this.props.match.params.id}&apikey=${process.env.REACT_APP_MM_KEY}`
            )
                .then( res => {
                //console.log(res.data.message.body.track)
                this.setState({track: res.data.message.body.track})
                })
        )
        .catch(err => console.log(err))

    }
  render() {
      const { track,lyrics } = this.state;
      console.log(this.state);
    if (lyrics === undefined || 
        track === undefined || 
        Object.keys(track).length === 0 || 
        Object.keys(lyrics).length === 0 ){
            return (
                <Spinner />
            )
        } else {
            return(
                <React.Fragment>
                <Link to='/' className='btn btn-dark btn-small mb-3'>Go Back</Link>

                <div className = 'card'>
                    <h5 className="card-header">
                   {track.track_name} by the Artist <span className="text-secondary">{track.artist_name}</span>
                    </h5>
                    <p className="card-body">
                    {lyrics.lyrics_body}
                    </p>
                </div>

                <ul className="list-group mt-3">
                    <li className="list-group-item">
                    MusixMatch Album ID ={track.album_id} 
                    </li>
                    <li className="list-group-item">
                    Album Art : {'      '}
                    <img src={track.album_coverart_100x100} alt={track.album_name} />
                    </li>
                    <li className="list-group-item">
                    Release Date = <Moment format='MM/DD/YYYY'>{track.first_release_date}</Moment> 
                    </li>
                </ul>
                </React.Fragment>
            )
        }
  } 
}

export default Lyrics
