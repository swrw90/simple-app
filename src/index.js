import React from 'react';
import ReactDOM from 'react-dom';

// import components
import Navbar from './navbar.js';
import Header from './header';
import "./index.css";

class App extends React.Component {
    render() {
        return (
            <div>
            <Navbar />
            <Header />
                
            </div>
        );
    }
}

ReactDOM.render(<App />, document.querySelector("#root"));