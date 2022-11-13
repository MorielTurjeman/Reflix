import React, { Component } from 'react';
import Movie from './Movie';
import '../styles/Catalog.css';
class Catalog extends Component {
    constructor(props) {
        super(props);
    }
    state = {}
    render() {
        const rentedMovies = this.props.movies.filter(movie => this.props.rentedMovies.includes(movie.id))
        return (<div>
            {rentedMovies.length > 0 && <><span className='rented'>Rented:</span>
                <div className='movies-catalog border-bottom'>

                    {rentedMovies.map(movie => <Movie name={movie.name} img={movie.img} id={movie.id} rentMovie={this.props.rentMovie}
                        movieRented={this.props.rentedMovies.includes(movie.id)} returnMovie={this.props.returnMovie} key={movie.name} />)}
                </div></>}

            <div className='movies-catalog'>
                {this.props.movies.map(movie => <Movie name={movie.name} img={movie.img} id={movie.id} rentMovie={this.props.rentMovie}
                    movieRented={this.props.rentedMovies.includes(movie.id)} returnMovie={this.props.returnMovie} key={movie.name} />)}
            </div>

        </div>
        );
    }
}

export default Catalog;