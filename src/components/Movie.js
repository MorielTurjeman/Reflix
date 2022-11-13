import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import '../styles/Movie.css';
class Movie extends Component {
    constructor(props) {
        super(props);
    }
    state = {}

    ClickrentMovie = () => {
        this.props.setIsRented(this.props.id)

    }
    render() {
        return (<div className='movie'>
            <div>

                {this.props.name}
                <button onClick={this.ClickrentMovie}><i className={this.props.movieRented ? "fa-solid fa-minus fa-3x" : "fa fa-plus fa-3x"} aria-hidden="true" ></i></button>
                <Link to={`/catalog/${this.props.id}`} ><img src={this.props.img} className="movieImg"></img></Link>


            </div>
        </div >
        );
    }
}

export default Movie;