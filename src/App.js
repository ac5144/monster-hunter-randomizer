import React from 'react';
import { Switch, Route, Redirect } from 'react-router';

import { Provider } from 'react-redux';

import store from './redux/store';

import Navbar from './components/Navbar';
import Randomizer from './components/Randomizer';

import './App.css';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <div className="Screen">
          <Navbar />
          <Randomizer />
        </div>
      </Provider>
    </div>
  );
}

export default App;
