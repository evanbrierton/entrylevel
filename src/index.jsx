import React from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase';
import { BrowserRouter as Router } from 'react-router-dom';

import { App } from './containers';

import config from './firebaseconfig';
import registerServiceWorker from './registerServiceWorker';

import './styles/socialmedia.css';

firebase.initializeApp(config);

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root'),
);

registerServiceWorker();
