import React from 'react';
import { Link } from 'react-router';

class HomePage extends React.Component {
    render() {
        return (
            <div>
                <h1>DeepCoat LLC.</h1>

                <p>&nbsp;&nbsp;Superiority in Design and Innovation for Your Sheilding Solutions</p>
                <Link to="about" className="btn btn-primary btn-lg">Learn more</Link>
            </div>
        );
    }
}

export default HomePage;
