import React, { Component } from 'react';
import logo from '../../gibs.dev.png';

export class NavbarLogo extends Component {
    render() {
        return(
            <img className="nav-logo" src={logo} alt="react-logo"/>
        )
    }
}