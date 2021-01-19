import { useState } from 'react'
import axios from 'axios';
import { Link, useHistory } from "react-router-dom";
import  Alert  from "react-bootstrap/Alert"
import { Form } from 'react-bootstrap';

export default function Login(props) {
  let history = useHistory();
  // const [state, setState] = useState({ 
  //   name: '',
  //   email: '',
  //   password: '',
  //   errors: ''
  //  })
  const [name, setName] = useState(props.name || ""); 
  const [email, setEmail] = useState(props.email || ""); 
  const [password, setPassword] = useState(props.password || "");
  const [type, setType] = useState("user") 
  const [error, setError] = useState(false)
   
  const handleSubmit = (event) => {
    event.preventDefault()
    let user = {
      name: name,
      email: email,
      password: password,
      profile_type: type
    }
    axios
    .post('http://localhost:8080/login', {user}, {withCredentials: true})
    .then(response => {
      if (response.data.logged_in) {
        console.log(response.data)
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
          console.log(response.data.errors)
      }
    })
    .catch(error => console.log('api errors:', error))
  };

  return(
    <div>
      <h1>Log In</h1>        
      {error && 
      <Alert variant="danger" onClose={() => setError(false)} dismissible>
        <Alert.Heading>Error!</Alert.Heading>
          <p>
            Invalid login credentials, please try again
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
      <button placeholder="submit" type="submit">
            Log In
          </button>          
          <div>
            or <Link to='/signup'>sign up</Link>
          </div>
          
         </Form>
      </div>
  )
}