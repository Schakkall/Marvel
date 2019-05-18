import React, {Component} from 'react';
import './App.css';

import { Provider } from 'react-redux';

import store from './store';
import HeroList from './List/HeroList'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <HeroList/>
        </div>
      </Provider>
    );
  }
}

export default App;
