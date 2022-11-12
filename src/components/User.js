import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import '../styles/User.css';
class User extends Component {
    constructor() {
        super();
    }
    selcetUser = () => {
        this.props.setConnectedUser(this.props.name);
        // this.props.history.push("/catalog")
    }
    render() {
        return (<div>

            <span className='userBox'>
                <div>
                    <Link to="/catalog" replace={true}><img src={this.props.imgUrl} className="userImg"></img></Link>
                </div>
                <div className='username'>{this.props.name}</div>
            </span>

        </div >
        );
    }
}

export default User;