import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class NotFound extends Component {
    state = {}
    render() {
        return (
            <React.Fragment>

                <h1>404 Error</h1>
                <p>Go Back </p> <Link to="/">Home</Link>
            </React.Fragment>
        );
    }
}

export default NotFound;