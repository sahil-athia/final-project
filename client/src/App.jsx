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
import {useEffect, useState} from 'react'

function App() {
  const [state, setState] = useState({isLoggedIn: false, user: {}})

  const handleLogin = (data) => {
    this.setState({
      isLoggedIn: true,
      user: data.user
    })
  }
  const handleLogout = () => {
    this.setState({
    isLoggedIn: false,
    user: {}
    })
  }

  loginStatus = () => {
    axios
      .get('http://localhost:8080/logged_in', 
              {withCredentials: true})    
      .then(response => {
        if (response.data.logged_in) {
          handleLogin(response)
        } else {
          handleLogout()
        }
      })
      .catch(error => console.log('api errors:', error))
  };

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

          <Route exact path='/login' component={}/>
          <Route exact path='/signup' component={}/>
          
        </Switch>
      </div>
    </Router>
  );
}


export default App;


// const user_type = "BUISNESS"
//     const example = 4
//     axios.get(`/api/v1/user/${example}`)
//     .then((res) => {
//       console.log(res.data);
//     }).catch((err) => {
//       console.log(err);
//     });