import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Routing from './config/routing';
import { Provider } from 'react-redux';
import store from '../src/store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <Router>
            <Routing />
          </Router>
        </div>
      </Provider>
    );
  }
}

export default App;
