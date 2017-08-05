import React, { Component } from 'react';
import '../stylesheets/App.css';
//import Member from './Member'

class App extends Component {

constructor(props) {
    super(props)
    this.state = {
        members: [
        {
            name: "Joe Wilson",
            email: "joe.wilson@example.com",
            thumbnail: "https://randomuser.me/api/portraits/men/53.jpg"
        },
        {
            name: "Stacy Gardner",
            email: "stacy.gardner@example.com",
            thumbnail: "https://randomuser.me/api/portraits/women/74.jpg"
        },
        {
            name: "Billy Young",
            email: "billy.young@example.com",
            thumbnail: "https://randomuser.me/api/portraits/men/34.jpg"
        }
      ]
    }
}

  render() {
    const { members } = this.state
    return (
      <div>
        <div className="row">
          <h2 className="title">Hello world</h2>
          <div className="card">
            <div className="card-content">
              <p className="center-align"><i>hello world 2</i></p>
              {members.map(
                  (data, i) => 
                    <Member key={i} 
                        onClick={email => console.log(email)}
                        {...data} />
                   )}
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
