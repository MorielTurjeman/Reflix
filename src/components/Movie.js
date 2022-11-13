import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import '../styles/Movie.css';
class Movie extends Component {
    constructor(props) {
        super(props);
    }
    state = {}

    ClickrentMovie = () => {

    }
    render() {
        return (<div className='movie'>
            <div>

                {this.props.name}
                <button><i className="fa fa-plus fa-3x" aria-hidden="true" ></i></button>
                <Link to={`/catalog/${this.props.id}`} ><img src={this.props.img} className="movieImg"></img></Link>


            </div>
        </div >
        );
    }
}

export default Movie;