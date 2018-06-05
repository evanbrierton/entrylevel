import React from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './components/App';

import config from './firebaseconfig';
import registerServiceWorker from './registerServiceWorker';

import './stylesheets/reset.css';
import './stylesheets/index.css';

firebase.initializeApp(config);

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root'),
);

registerServiceWorker();
