import React, { Component } from 'react';
import '../stylesheets/App.css';

class App extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <h2 className="title">Hello world</h2>
          <div className="card">
            <div className="card-content">
              <p className="center-align"><i>hello world 2</i></p>
              <hr/>
              Lorem ipsum dolor sit amet
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
