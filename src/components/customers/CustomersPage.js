import React from 'react';

class CustomerPage extends React.Component {
    render() {
        return (
            <div>
                <h1>Customers:</h1>
                <img source={require('./images/braun.jpg')} />
            </div>
        );
    }
}

export default CustomerPage;