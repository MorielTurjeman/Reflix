import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import '../styles/Movie.css';
class Movie extends Component {
    constructor(props) {
        super(props);
    }
    state = {}

    ClickrentMovie = () => {
        console.log("here!")
        this.props.rentMovie(this.props.id)
    }

    clickReturnMovie = () => {
        this.props.returnMovie(this.props.id)
    }
    render() {
        return (<div className='movie'>
            <div>

                {this.props.name}
                {/* <button onClick={this.ClickrentMovie}><i className={this.props.movieRented ? "fa fa-solid fa-minus fa-3x" : "fa fa-plus fa-3x"} aria-hidden="true" ></i></button> */}
                {this.props.movieRented ?
                    <button onClick={this.clickReturnMovie}><i className="fa fa-solid fa-minus fa-3x top-right"></i></button> :
                    <button onClick={this.ClickrentMovie}><i className="fa fa-plus fa-3x top-right"></i></button>}
                <Link to={`/catalog/${this.props.id}`} ><img src={this.props.img} className="movieImg"></img></Link>


            </div>
        </div >
        );
    }
}

export default Movie;