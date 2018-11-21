import React, { Component } from 'react';
import axios from 'axios';


class Search extends Component {
    state = {
        trackTitle: {}
    }

    findTrack = (dispatch, e) => {
        e.preventDefault();
        axios
            .get(`https://infinite-lowlands-58555.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.search?q_track=${this.state.trackTitle}&page_size=10&page=1&s_track_rating=desc&apikey=${process.env.REACT_APP_MM_KEY}`)
            .then(res => {
                // console.log(res.data)
                dispatch({
                    type: "FIND_TRACK",
                    payload: res.data.message.body.track_list
                });
                this.setState({ trackTitle: "" })
            })
            .catch(err => console.log(err))
    }

    onChange = (e) => {

        this.setState({ [e.target.name]: e.target.value });

    }
    render() {
        return 
    }
}

export default Search
