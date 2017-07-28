import React from 'react';
import ReactDOM from 'react-dom';

// import components
import Navbar from './navbar.js';
import "./index.css";

class App extends React.Component {
    render() {
        return (
            <div>
            <Navbar />
                <h1>Hello World</h1>
                <h2>It's me</h2>
                <p>I've thought about us for a long, long time.</p>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.querySelector("#root"));