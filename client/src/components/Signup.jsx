import {useEffect, useState} from 'react'
import axios from 'axios';
import { Link, Redirect } from "react-router-dom";

export default function Signup(props) {
  let user;
  const [state, setState] = useState({ 
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
    errors: ''
   })
  const [name, setName] = useState(""); 
  const [email, setEmail] = useState(""); 
  const [password, setPassword] = useState(""); 
  const [password_confirmation, setPassword_confirmation] = useState(""); 

  const handleSubmit = (event) => {
    event.preventDefault()
    user = {
      name: name,
      email: email,
      password: password,
      password_confirmation: password_confirmation
    }
    axios.post('http://localhost:8080/api/v1/user', {user}, {withCredentials: true})
    .then(response => {
      console.log(response)
      if (response.data.status === 'created') {
        props.handleLogin(response.data)
        return redirect()
      } else {
        setState({
          errors: response.data.errors
        })
      }
    })
    .catch(error => console.log('api errors:', error))
  };


  const redirect = () => {
    props.history.push("/")
  }

  return(
    <div>
        <h1>Sign Up</h1>        
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
          <input
            placeholder="password confirmation"
            type="password"
            name="password_confirmation"
            value={password_confirmation}
            onChange={event => setPassword_confirmation(event.target.value)}
          />
        
          <button placeholder="submit" type="submit">
            Sign Up
          </button>
      
        </form>
      </div>
  )
}