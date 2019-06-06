import React, {Component} from 'react';
import './App.css'

import store from './store';
import HeroList from './components/HeroList';


import { Provider } from 'react-redux';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div id="main">
          <HeroList/>
        </div>
      </Provider>
    );
  }
}

export default App;
