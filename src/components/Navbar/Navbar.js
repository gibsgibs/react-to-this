import React, { Component } from 'react';
import { NavbarItems } from './NavbarItems';
import { NavbarToggle } from './NavbarToggle';
import { Link } from 'react-router-dom';
import { NavbarLogo } from './NavbarLogo';

export class Navbar extends Component {
 
    constructor(props) {
        super(props);

        this.toggleNavbar = this.toggleNavbar.bind(this);
        this.state = {
            toggled: false
        };
    }

    toggleNavbar() {
        this.setState({
            toggled: !this.state.toggled
        });
    }

    render() {
        return (
            <div>
                <nav className="nav-main shadow">
                    <NavbarToggle toggleNavbar={this.toggleNavbar}/>
                    <NavbarLogo />
                    <div className={`nav-content${this.state.toggled ? " toggled" : ""}`}>
                        <div className="nav-content-header">
                        <NavbarToggle toggleNavbar={this.toggleNavbar}/>
                        <NavbarLogo />
                        </div>
                        <ul className="nav-item-list">
                            {NavbarItems.map((item, index) => {
                                return(
                                <li key={index} className="nav-item">
                                    <Link to={item.url} className="nav-links">
                                        <div className="nav-link-icon">
                                            <i className={item.classes}></i>
                                        </div>
                                        <div className="nav-link-name">
                                            {item.itemName}
                                        </div>
                                    </Link>
                                </li>
                                )
                            })}
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}
