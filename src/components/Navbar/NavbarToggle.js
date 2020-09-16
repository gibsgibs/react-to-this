import React, { Component } from 'react';

export class NavbarToggle extends Component {
    render() {
        return(
            <button className="nav-menu-button" type="button" onClick={this.props.toggleNavbar}>
                <i className="fas fa-bars fa-fw"></i>
            </button>
        )
    };
};