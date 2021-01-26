import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import { useState, useEffect } from "react";
import axios from 'axios';

import Home from "./components/Home"
import Organization from "./components/Organization"
import Individual from "./components/Individual"
import Login from "./components/Login"
import Signup from "./components/Signup"


function App() {
  const [state, setState] = useState({isLoggedIn: false, user: {}})
  useEffect(() => {
    loginStatus()
  }, []);

  const loginStatus = () => {
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

  const handleLogin = (data) => {
    setState({
      isLoggedIn: true,
      user: data.user || data.data.user
    })
  }
  // add a user state on authentication

  const handleLogout = (cb) => { 

    let user = state.user
    axios.post("http://localhost:8080/logout", {user}, {withCredentials: true})
    .then((res) => {

      setState({
        isLoggedIn: false,
        user: {}
        })
        if (cb) {
          cb()
        }
    })
  }
  // remove the user state on logout

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Home 
              state={state}
              onClick={handleLogout}
            />
            
          </Route>
          
          <Route exact path='/login'>
            <Login 
              handleLogin={handleLogin}
              
            />
          </Route>
          <Route exact path='/signup'>
            <Signup 
              handleLogin={handleLogin}
              
            />
          </Route>
          {state.isLoggedIn && 
            <Route path="/individual">
              <Individual 
                user_id ={state.user.id} 
                organization_id={state.user.organization_id}
                onClick={handleLogout}
              />
            </Route>} 

          {state.isLoggedIn && 
            <Route path="/organization">
              <Organization 
                organization_id={state.user.id}
                onClick={handleLogout}
              />
              </Route>} 
        </Switch>
      </div>
    </Router>
  );
}


export default App;