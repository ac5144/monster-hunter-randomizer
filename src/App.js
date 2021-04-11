import React from 'react';

import { Provider } from 'react-redux';

import store from './redux/store';

import Navbar from './components/Navbar';
import WeaponRandomizer from './components/WeaponRandomizer';
import WeaponFilter from './components/WeaponFilter';
import MonsterRandomizer from './components/MonsterRandomizer';
import MonsterFilter from './components/MonsterFilter';

import './App.css';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <div className="Screen">
          <Navbar />
          <div className="randomizerContainer">
            <WeaponRandomizer />
            <MonsterRandomizer />
          </div>
          <hr />
          <div className="filterContainer">
            <WeaponFilter />
            <MonsterFilter />
          </div>
        </div>
      </Provider>
    </div>
  );
}

export default App;
