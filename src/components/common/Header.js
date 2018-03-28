import React, {PropTypes} from 'react';
import {Link, IndexLink} from 'react-router';
import './common.css';

class Header extends React.Component  {
  render(){
    return (
      <nav className="nav-main">
        <div >
        <IndexLink to="/" className="header" activeClassName="active">Home</IndexLink>
        <span>&nbsp; &nbsp;</span>
        <Link to="/env" className="header" activeClassName="active">Environmental Compliance</Link>
        <span>&nbsp; &nbsp;</span>
        <Link to="/customer" className="header" activeClassName="active">Customers</Link>
        <span>&nbsp; &nbsp;</span>
        <Link to="/about" className="header" activeClassName="active">About Us</Link>
        <span>&nbsp; &nbsp;</span>
        <Link to="/about" className="header" activeClassName="active">Contact Us</Link>
        </div>
      </nav>
    );
  }
}

Header.propTypes = {
  loading: PropTypes.bool.isRequired
};

export default Header;
