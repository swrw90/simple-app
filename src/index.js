import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    render() {
        return (
            <div>
                <h1>Hello World</h1>
                <h2>It's me</h2>
                <p>I've thought about us for a long, long time.</p>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.querySelector("#root"));