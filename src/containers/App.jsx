import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import store from '../store';

import Navbar from './Navbar';
import Footer from './Footer';
import Main from './Main';

const App = () => (
  <Provider store={store}>
    <Router>
      <div className="App">
        <Navbar />
        <Main />
        <Footer />
      </div>
    </Router>
  </Provider>
);

export default App;
