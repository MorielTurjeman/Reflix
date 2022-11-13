import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import '../styles/MovieDetails.css';

class MovieDetails extends Component {
    constructor(props) {
        super(props);
    }
    state = {}
    render() {
        return (
            <div className='movieDetailsCard'>
                <Card style={{ width: '30rem', color: 'white' }}>
                    <Card.Img variant="top" src={this.props.movie.img} />
                    <Card.Body>
                        <Card.Title>{this.props.movie.title} - {this.props.movie.year}</Card.Title>
                        <Card.Text color='white'>
                            {this.props.movie.descrShort}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        )
    }
}

export default MovieDetails;


