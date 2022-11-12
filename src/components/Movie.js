import React, { Component } from 'react';
import '../styles/Movie.css';
class Movie extends Component {
    constructor(props) {
        super(props);
    }
    state = {}
    render() {
        return (<div className='movie'>
            <div>
                {this.props.name}
                <img src={this.props.img} className="movieImg"></img>
            </div>
        </div>
        );
    }
}

export default Movie;