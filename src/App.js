import React, { useState } from 'react';

import { Provider } from 'react-redux';

import store from './redux/store';

import Navbar from './components/Navbar';
import WeaponRandomizer from './components/WeaponRandomizer';
import WeaponFilter from './components/WeaponFilter';
import MonsterRandomizer from './components/MonsterRandomizer';
import MonsterFilter from './components/MonsterFilter';
import MainButton from './components/MainButton';

import './App.css';

function App() {
  const [showFilters, setShowFilters] = useState(false);
  const filterClass = showFilters ? 'filterContainer' : 'filterContainer hidden';

  return (
    <div className="App">
      <Provider store={store}>
        <div className="Screen">
          <Navbar />
          <div className="randomizerContainer">
            <WeaponRandomizer />
            <MonsterRandomizer />
          </div>

          <MainButton onClick={() => setShowFilters(!showFilters)} buttonText="Filters" />
          <div className={filterClass}>
            <WeaponFilter />
            <MonsterFilter />
          </div>
        </div>
      </Provider>
    </div>
  );
}

export default App;
