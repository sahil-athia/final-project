// import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { useState, useEffect } from "react";
import axios from 'axios';

import Home from "./components/Home"
import Main from "./components/Main"
import Organization from "./components/Organization"
import Individual from "./components/Individual"

const App = () => {
  const [state, setState] = useState();

  useEffect(() => {

    Promise.all([
      axios.get('/api/v1/organization'),
      axios.get('/api/v1/user'),
      axios.get('/api/v1/job'),
      axios.get('/api/v1/job_reference')
    ]).then((all) => {
      setState(prev => ({...prev, organizations: all[0].data, users: all[1].data, jobs: all[2].data, job_references: all[3].data }));
    }).catch((err) => {
      console.log(err);
    });;

  }, []);

  return (
    <Router>
      <div className="App">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/main">Main</Link>
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
            <Individual state={state}/>
          </Route>

        </Switch>
      </div>
    </Router>
  );
}


export default App;
