import React from 'react';
import ReactDOM from 'react-dom';

// import components
import Navbar from './navbar.js';
import Header from './header';
import Footer from './footer';
import "./index.css";

class App extends React.Component {
    render() {
        return (
            <div>
                <Navbar brand="CatBabies" links={
                    [
                        {
                            text: "Blog",
                            link: "http://google.com"
                        },
                        {
                            text: "Title",
                            link: "http://yahoo.com"
                        },
                        {
                            text: "More Info",
                            link: "http://atom.io"
                        }
                    ]
                } />
                <Header />
                <Footer />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.querySelector("#root"));