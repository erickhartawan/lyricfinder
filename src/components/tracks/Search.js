import React, { Component } from 'react';
import axios from 'axios';
import { Consumer } from '../../context'

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
        return (
            <Consumer>
                {
                    value => {
                        const { dispatch } = value;
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
                                            onChange={this.onChange}
                                        />
                                        <input
                                            type="submit"
                                            onClick={this.findTrack.bind(this, dispatch)}
                                            className="btn btn-primary mt-4 btn-block"
                                            value="Search Track"
                                        />
                                    </form>
                                </div>
                            </div>
                        )
                    }
                }
            </Consumer>
        )
    }
}

export default Search
