import React from 'react';
import ReactDOM from 'react-dom';
import './stylesheets/index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

ReactDOM.render(
  <Router >
  	<Switch>
    	<Route exact={true} path="/" component={App} />
    </Switch>
  </Router>
, document.getElementById('root')
);
registerServiceWorker();


/*https://github.com/manukempo/reactApp/blob/c9b8725f384836ab52552630fb0bf0ffcf608873/src/app/index.js
*/