import {useEffect, useState} from 'react'
import axios from 'axios';
import { Link } from "react-router-dom";

export default function Login(props) {
  const [state, setState] = useState({ 
    username: '',
    email: '',
    password: '',
    errors: ''
   })
  const [name, setName] = useState(props.name || ""); 
  const [email, setEmail] = useState(props.email || ""); 
  const [password, setPassword] = useState(props.password || ""); 
   
  const handleSubmit = (event) => {
    event.preventDefault()
  };

  return(
    
    <div>
        <h1>Log In</h1>        
      <form onSubmit={handleSubmit}>
          <input
            placeholder="username"
            type="text"
            name="username"
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