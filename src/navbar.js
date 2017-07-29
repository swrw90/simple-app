import React from 'react';
import { DropdownButton, MenuItem } from 'react-bootstrap';

class Navbar extends React.Component {
    render() {
        console.log(this);
        return (
            <nav className="navbar navbar-inverse">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <a className="navbar-brand">{this.props.brand}</a>
                    </div>
                    <ul className="nav navbar-nav navbar-right">
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Contact</a></li>
                        <li><a href="#">Blog</a></li>
                        <li>
                            <DropdownButton>
                                <MenuItem eventKey="1"><a href="#">Code</a></MenuItem>
                                <MenuItem eventKey="2"><a>Expo</a></MenuItem>
                            </DropdownButton>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Navbar;