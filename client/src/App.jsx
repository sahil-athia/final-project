// import logo from './logo.svg';
import './App.css';
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
import Main from "./components/Main"
import Organization from "./components/Organization"
import Individual from "./components/Individual"
import Login from "./components/Login"
import Signup from "./components/Signup"


function App() {
  let history = useHistory();
  const [state, setState] = useState({isLoggedIn: false, user: {}})

  useEffect(() => {
    loginStatus()

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

  const handleLogout = () => {
    let user = state.user
    axios.post("http://localhost:8080/logout", {user}, {withCredentials: true})
    .then(() => {
      setState({
        isLoggedIn: false,
        user: {}
        })
    })
    
  }
  // remove the user state on logout
  return (
    <Router>
      {/* {() => state.isLoggedIn === false && <Redirect to='/' />} */}
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
            <Home state={state}/>
          </Route>

          <Route path="/main">
            <Main />
          </Route>
          
          <Route path="/individual">
            {state.isLoggedIn &&  
            <Individual 
              user_id ={state.user.id} 
              onClick={handleLogout}
            />}
          </Route>

          <Route path="/organization">
            <Organization state={state}/>
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