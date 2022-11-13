import React, { Component } from 'react';
import '../styles/Search.css';
import Button from 'react-bootstrap/Button';

class Search extends Component {
    constructor(props) {
        super(props);
    }

    state = {}
    inputOnChange = (event) => {
        this.props.setFilter(event.target.value)

    }
    render() {
        return (<div className='search-bar'>
            <nav className="navbar navbar-light bg-light">
                <form className="form-inline">
                    <input id="search-input" className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" value={this.props.value} onChange={this.inputOnChange} />
                    {/* <button className='btn-search'><i className="fa fa-search fa-2x" aria-hidden="true"></i> */}
                    <i className="fa fa-search fa-2x"></i>
                    {/* </button> */}
                </form>
            </nav>

        </div >);
    }
}

export default Search;