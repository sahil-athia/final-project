import { useState } from 'react'
import axios from 'axios';
import { useHistory, Link } from "react-router-dom";
import  Alert  from "react-bootstrap/Alert"
import { Form } from 'react-bootstrap';

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
  const [type, setType] = useState("user")
  const [error, setError] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    let user = {
      name: name,
      email: email,
      password: password,
      password_confirmation: password_confirmation,
      profile_type: type
    }
    axios.post(`http://localhost:8080/api/v1/${type}`, {user}, {withCredentials: true})
    .then(response => {
      
      if (response.data.status === 'created') {
        console.log(response)
        props.handleLogin(response.data)
        setError(false)
        if (response.data.user.profile_type === "organization") {
          history.push("/organization")
        } else  {
          history.push("/individual")
        }
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
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Label>Select Profile Type: </Form.Label>
            <Form.Control as="select" onChange={e => setType(e.target.value)}>
              <option>user</option>
              <option>organization</option>
            </Form.Control>
        </Form.Group>

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
      
        </Form>
      </div>
  )
}