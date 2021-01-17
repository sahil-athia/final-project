import {useEffect, useState} from 'react'
import axios from 'axios';
import { Redirect, Link, useHistory } from "react-router-dom";

export default function Login(props) {
  let history = useHistory();
  const [state, setState] = useState({ 
    name: '',
    email: '',
    password: '',
    errors: ''
   })
  const [name, setName] = useState(props.name || ""); 
  const [email, setEmail] = useState(props.email || ""); 
  const [password, setPassword] = useState(props.password || ""); 
   
  const handleSubmit = (event) => {
    event.preventDefault()
    let user = {
      name: name,
      email: email,
      password: password
    }
    axios.post('http://localhost:8080/login', {user}, {withCredentials: true})
    .then(response => {
      if (response.data.logged_in) {
        props.handleLogin(response.data)
        history.push("/individual")
      } else {
        setState({
          errors: response.data.errors
        })
      }
    })
    .catch(error => console.log('api errors:', error))
  };

  return(
    <div>
        <h1>Log In</h1>        
      <form onSubmit={handleSubmit}>
          <input
            placeholder="name"
            type="text"
            name="name"
            value={name}
            onChange={event => setName(event.target.value)}
          />
          <input
            placeholder="email"
            type="text"
            name="email"
            value={email}
            onChange={event => setEmail(event.target.value)}
          />
          <input
            placeholder="password"
            type="password"
            name="password"
            value={password}
            onChange={event => setPassword(event.target.value)}
          />         
      <button placeholder="submit" type="submit">
            Log In
          </button>          
          <div>
            or <Link to='/signup'>sign up</Link>
          </div>
          
         </form>
      </div>
  )
}