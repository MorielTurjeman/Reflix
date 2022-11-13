import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

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
                <div className='rent'><i className="bi bi-plus-circle"></i></div>
                <Link to={`/catalog/${this.props.id}`} ><img src={this.props.img} className="movieImg"></img></Link>


            </div>
        </div >
        );
    }
}

export default Movie;