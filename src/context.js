import React, { Component } from 'react';
import axios from 'axios';

const TrackContext = React.createContext();

const reducer = (state,action) => {
    switch (action.type){
        case 'FIND_TRACK':{
            return {
                ...state,
                track_list: action.payload,
                Heading: "SEARCH RESULT BRUH"
            }
        }
        default:
        return state;
    }
}

export class Provider extends Component {
    state = {
        track_list :[],
    heading : 'Top Sepuluh lagu from Musixmatch',
    dispatch: action => this.setState(state => reducer(state,action))
    }

    componentDidMount(){
        axios.get(`https://infinite-lowlands-58555.herokuapp.com/http://api.musixmatch.com/ws/1.1/chart.tracks.get?chart_name=top&page=1&page_size=10&country=au&f_has_lyrics=1&apikey=${process.env.REACT_APP_MM_KEY}`)
        .then( res => {
            console.log(res.data)
            this.setState({track_list: res.data.message.body.track_list });
            })
        .catch( err =>  console.log(err))
    }
    render() {
    return (
        <TrackContext.Provider value={this.state}>
            {this.props.children}
        </TrackContext.Provider>
    )
  }
}

export default TrackContext;