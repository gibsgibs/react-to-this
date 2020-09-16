import React, { Component } from 'react';
import logo from '../../logo.png';

export class NavbarLogo extends Component {
    render() {
        return(
            <img className="nav-logo" src={logo} alt="react-logo"/>
        )
    }
}