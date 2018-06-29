import React from 'react';
import ReactDOM from 'react-dom';

import { App } from './containers';

import registerServiceWorker from './registerServiceWorker';

import './styles/index.css';
import './styles/reset.css';
import './styles/socialmedia.css';

ReactDOM.render(<App />, document.getElementById('root'));

registerServiceWorker();
