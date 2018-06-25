import React from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase/app';
import 'firebase/firestore';

import { App } from './containers';

import config, { firestoreConfig } from './firebaseconfig';
import registerServiceWorker from './registerServiceWorker';

import './styles/index.css';
import './styles/reset.css';
import './styles/socialmedia.css';

firebase.initializeApp(config);
firebase.firestore().settings(firestoreConfig);

ReactDOM.render(<App />, document.getElementById('root'));

registerServiceWorker();
