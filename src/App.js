import './App.css';
import { Switch, Route, Redirect } from 'react-router';

import Navbar from './components/Navbar';
import Randomizer from './components/Randomizer';


function App() {
  return (
    <div className="App">
      <div className="Screen">
        <Navbar />
        <Randomizer />
      </div>
    </div>
  );
}

export default App;
