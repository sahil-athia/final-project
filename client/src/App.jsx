import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import axios from 'axios';

import Home from "./components/Home"
import Main from "./components/Main"
import Organization from "./components/Organization"
import Individual from "./components/Individual"

function App() {
  const user_type = "BUISNESS"
    const example = 4
    axios.get(`/api/v1/user/${example}`)
    .then((res) => {
      console.log(res.data);
    }).catch((err) => {
      console.log(err);
    });


  return (
    <Router>
      <div className="App">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/individual">Individual</Link>
          </li>
          <li>
            <Link to="/organization">Organization</Link>
          </li>
        </ul>
        <hr />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/main">
            <Main />
          </Route>
          
          <Route path="/individual">
            <Individual />
          </Route>

          <Route path="/organization">
            <Organization />
          </Route>

          
        </Switch>
      </div>
    </Router>
  );
}


export default App;
