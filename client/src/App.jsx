// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import { useHistory } from "react-router-dom";


import { useState, useEffect } from "react";
import axios from 'axios';

import Home from "./components/Home"
import Organization from "./components/Organization"
import Individual from "./components/Individual"
import Login from "./components/Login"
import Signup from "./components/Signup"


function App() {
  // Hard code organization_id for now, needs org auth
  // const organization_id = 1;

  let history = useHistory();
  const [state, setState] = useState({isLoggedIn: false, user: {}, isLoggingOut:false})
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
    console.log(data)
    setState({
      isLoggedIn: true,
      user: data.user || data.data.user
    })
  }
  // add a user state on authentication

  const handleLogout = () => {
    let user = state.user
    axios.post("http://localhost:8080/logout", {user}, {withCredentials: true})
    .then((res) => {
      setState({
        isLoggedIn: false,
        user: {}
        })
    })
  }
  // remove the user state on logout

  const loggingOut = () => state.isLoggedIn === false
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Home state={state}/>
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

          {state.isLoggedIn ?
            (
              <>
                <Route path="/individual">
                  <Individual 
                    user_id ={state.user.id} 
                    onClick={handleLogout}
                  />
                </Route>

                <Route path="/organization">

                  <Organization 
                    organization_id={state.user.id}
                    onClick={handleLogout}
                  />
                </Route>
              </>
            ) : (
              <Redirect to='/' />
            ) 
          }
        </Switch>
      </div>
    </Router>
  );
}


export default App;