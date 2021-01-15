import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Home from "./components/Home"
import Main from "./components/Main"

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route Path="/" exact>
            <Home />
          </Route>

          <Route Path="/main" exact>
            <Main />
          </Route>

        </Switch>
      </div>
    </Router>
  );
}

export default App;
