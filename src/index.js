import React from 'react';
import ReactDOM from 'react-dom';
import './stylesheets/index.css';
import App from './components/App';
import About from './components/About';
import Whoops404 from './components/Whoops404';
import Branch from './components/Branch';
import registerServiceWorker from './registerServiceWorker';

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

ReactDOM.render(
  <Router >
  	<Switch>
    	<Route exact={true} path="/" component={App} />
    	<Route path="/About/" component={About} />
      <Route path="/branches/" component={App}>
        <Route path="/branches/:brancheID" component={Branch}/>
      </Route>
		<Route path="*" component={Whoops404}/>
    </Switch>
  </Router>
, document.getElementById('root')
);
registerServiceWorker();




/*https://github.com/manukempo/reactApp/blob/c9b8725f384836ab52552630fb0bf0ffcf608873/src/app/index.js
*/
