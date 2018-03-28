// This component handles the App template used on every page.
import React, {PropTypes} from 'react';
import Header from './common/Header';
import {connect} from 'react-redux';
import {Helmet} from 'react-helmet';

const divStyle = {
    backgroundColor: '#01303f',
    color: 'white',
    paddingLeft: '30px',
    paddingRight: '30px',
    paddingTop: '10px',
    paddingBottom: '10px',
    marginTop: '30px',
    borderRadius: '25px' 
};

class App extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <Helmet>
            <style>{'body { background-color: #02577a; }'}</style>
        </Helmet>
        <Header />
        <div style={divStyle}>
            {this.props.children}
        </div>
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    loading: state.ajaxCallsInProgress > 0
  };
}

export default connect(mapStateToProps)(App);
