import React, { Component } from 'react';
import Movie from './Movie';
import '../styles/Catalog.css';
class Catalog extends Component {
    constructor(props) {
        super(props);
    }
    state = {}
    render() {

        return (<div>
            <div className='movies-catalog'>
                {this.props.movies.map(movie => <Movie name={movie.name} img={movie.img} key={movie.name} />)}
            </div>
        </div>
        );
    }
}

export default Catalog;