import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import '../../styles/whosWatching.css';
import User from '../User';


class WhosWatching extends Component {
    constructor() {
        super();
    }
    state = {}
    render() {
        return (

            <div>
                <div className='whosWatching'>Who's Watching?</div>
                <div className='users-list'>{this.props.users.map(user => <Link to="/catalog"><User key={user.name} name={user.name} imgUrl={user.imgUrl} setConnectedUser={this.props.setConnectedUser} setIsRented={this.props.setIsRented} /></Link>)}</div>
            </div>

        )

    }
}

export default WhosWatching;