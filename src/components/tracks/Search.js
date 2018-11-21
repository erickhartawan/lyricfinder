import React, { Component,useState,useContext } from 'react';
import TrackContext  from '../../context';
import axios from 'axios';


const Search = () =>  {
    const [trackTitle,setTrackTitle] = useState();

    const findTrack = (e) => {
        e.preventDefault();
        axios
            .get(`https://infinite-lowlands-58555.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.search?q_track=${trackTitle}&page_size=10&page=1&s_track_rating=desc&apikey=${process.env.REACT_APP_MM_KEY}`)
            .then(res => {
                setTrackTitle({
                ...trackTitle,
                track_list: res.data.message.body.track_list,
                Heading: "SEARCH RESULT BRUH"
                });
                // console.log(res.data)
                // dispatch({
                //     type: "FIND_TRACK",
                //     payload: 
                // });
                // setTrackTitle("")
            })
            .catch(err => console.log(err))
    }

    const onChange = (e) => {
        setTrackTitle(e.target.value);
    }
    const value = useContext(TrackContext);
    const {dispatch} = value;
    return (
        <div className='card mb-4 text-center m-5'>
            <h1 className="card-header text-lg">
                Search for lyric <i className="fas fa-music"></i>
            </h1>
            <div className="card-body p-4">
                <form>
                    <input
                        className="form-control form-control-lg "
                        type="text"
                        name="trackTitle"
                        placeholder="Song title here"
                        onChange={onChange}
                    />
                    <input
                        type="submit"
                        onClick={findTrack}
                        className="btn btn-primary mt-4 btn-block"
                        value="Search Track"
                    />
                </form>
            </div>
        </div>
    );
}

export default Search
