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
  const user_type = "BUISNESS"
  return (
    <Router>
      <div className="App">
        <Switch>

          <Route exact path="/main">
            <Main />
          </Route>

          <Route Path="/">
            <Home />
          </Route>

        </Switch>
      </div>
    </Router>
  );
}

export default App;
