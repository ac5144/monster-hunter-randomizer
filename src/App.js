import './App.css';
import { Switch, Route, Redirect } from 'react-router';

import Navbar from './components/Navbar'

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="Screen">
        <Switch>
          <Route path="/MHW">
            MHW Screen
          </Route>
          <Route path="/MHWI">
            MHWI Screen
          </Route>
          <Route path="/Rise">
            Rise Screen
          </Route>
          <Route path="/">
            <Redirect to="/MHW" />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
