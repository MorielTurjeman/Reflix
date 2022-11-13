import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import '../styles/User.css';
class User extends Component {
    constructor(props) {
        super(props);
    }
    selcetUser = () => {
        this.props.setConnectedUser(this.props.name);
        // this.props.history.push("/catalog")
    }
    render() {
        return (<div className='userBox' onClick={this.selcetUser}>
            <div>
                <Link to={"/catalog"}><img src={this.props.imgUrl} className="userImg"></img></Link>
            </div>
            <div className='username'>{this.props.name}</div>
        </div>
        );
    }
}

export default User;