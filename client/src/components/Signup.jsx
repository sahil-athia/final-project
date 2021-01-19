import {useEffect, useState} from 'react'
import axios from 'axios';
import { useHistory, Link } from "react-router-dom";
import  Alert  from "react-bootstrap/Alert"

export default function Signup(props) {
  let history = useHistory();
  // const [state, setState] = useState({ 
  //   name: '',
  //   email: '',
  //   password: '',
  //   password_confirmation: '',
  //   errors: ''
  //  })
  const [name, setName] = useState(""); 
  const [email, setEmail] = useState(""); 
  const [password, setPassword] = useState(""); 
  const [password_confirmation, setPassword_confirmation] = useState(""); 
  const [error, setError] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    let user = {
      name: name,
      email: email,
      password: password,
      password_confirmation: password_confirmation
    }
    axios.post('http://localhost:8080/api/v1/user', {user}, {withCredentials: true})
    .then(response => {
      
      if (response.data.status === 'created') {
        setError(false)
        props.handleLogin(response.data)
        history.push("/indvidual")
      } else {
        if(response.data.errors) {
          setError(true)
        }
      }
    })
    .catch(error => console.log('api errors:', error))
  };

  return(
    <div>
        <h1>Sign Up</h1>   
        {error && 
          <Alert variant="danger" onClose={() => setError(false)} dismissible>
            <Alert.Heading>Error!</Alert.Heading>
              <p>
                Please ensure all fields are filled in correctly
              </p>
        </Alert>
        }     
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
          <div>
            or <Link to='/login'>Login</Link>
          </div>
      
        </form>
      </div>
  )
}