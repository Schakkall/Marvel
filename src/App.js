import React, {Component} from 'react';
import './App.css'

import store from './store';
import HeroList from './components/HeroList';
import Loading from './components/Loading';


import { Provider } from 'react-redux';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div id="main">
          <Loading/>
        </div>
      </Provider>
    );
  }
}

export default App;
