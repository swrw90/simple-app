import React from 'react';
import { DropdownButton, MenuItem } from 'react-bootstrap';

class Navbar extends React.Component {
    render() {
        return (
            <div className="navbar">
                <span><a href="#">Home</a></span>
                <span><a href="#">Contact</a></span>
                <span><a href="#">Blog</a></span>
                <span>
                    <DropdownButton>
                        <MenuItem eventKey="1"><a href="#">Code</a></MenuItem>
                        <MenuItem eventKey="2"><a>Expo</a></MenuItem>
                    </DropdownButton>
                </span>
            </div>
        )
    }
}

export default Navbar;