import React from 'react';

class Navbar extends React.Component {
    render() {
        return (
            <div className="navbar">
                <span>Some Squanch</span>
                <span><a href="#">Some More Squanch</a></span>
                <span><a href="#">Even More Squanch</a></span>
                <span><a href="#">Squanch Something</a></span>
            </div>
        )
    }
}

export default Navbar;