//"use strict";

import React, {PropTypes} from 'react';
import {Link, IndexLink} from 'react-router';

const Header = () => {
    return (
        <nav className="navbar navbar-default">
            <div className="container-fluid">
                <IndexLink to="/" className="navbar-brand">
                    <img src={require('../../images/pluralsight-logo.png')} />
                </IndexLink>
                <ul className="nav navbar-nav">
                    <li><IndexLink to="/" activeClassName="active">Home</IndexLink></li>
                    <li><Link to="/courses" activeClassName="active">Authors</Link></li>
                    <li><Link to="/about" activeClassName="active">About</Link></li>
                </ul>
            </div>
        </nav>
    );
};

export default Header;
