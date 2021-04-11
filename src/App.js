import React from 'react';
import { Switch, Route, Redirect } from 'react-router';

import { Provider } from 'react-redux';

import store from './redux/store';

import Navbar from './components/Navbar';
import WeaponRandomizer from './components/WeaponRandomizer';
import WeaponFilter from './components/WeaponFilter';
import MonsterRandomizer from './components/MonsterRandomizer';

import './App.css';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <div className="Screen">
          <Navbar />
          <WeaponRandomizer />
          <WeaponFilter />
          <hr />
          <MonsterRandomizer />
        </div>
      </Provider>
    </div>
  );
}

export default App;
