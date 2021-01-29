import { useState } from 'react'
import axios from 'axios';
import { Link, useHistory } from "react-router-dom";
import  Alert  from "react-bootstrap/Alert"
import { Form, Button } from 'react-bootstrap';
import './Login.scss'
import Loading from "./Loading"

export default function Login(props) {
  let history = useHistory();
  // const [state, setState] = useState({ 
  //   name: '',
  //   email: '',
  //   password: '',
  //   errors: ''
  //  })
  const [email, setEmail] = useState(props.email || ""); 
  const [password, setPassword] = useState(props.password || "");
  const [type, setType] = useState("user") 
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)
   
  const handleSubmit = (event) => {
    setLoading(true)
    event.preventDefault()
    let user = {
      email: email,
      password: password,
      profile_type: type
    }
      axios
      .post('/login', {user}, {withCredentials: true})
      .then(response => {
        if (response.data.logged_in) {
          setLoading(false)
          props.handleLogin(response.data)
          setError(false)
  
          if (response.data.user.profile_type === "organization") {
            history.push("/organization/dashboard")
          } else  {
            history.push("/individual")
          }
          
        } else {
          setLoading(false)
            if(response.data.errors) {
              setError(true)
            }
        }
      })
      .catch(error => console.log('api errors:', error))
    
  };

  return(
    loading ? (
      <Loading/>
      ) : (
<section className='login'>
      <div className="box">
        <div className="text-box">
          <h1>Insight</h1>
        </div>

      <div className="form-box">
      <h1>Log In</h1>        
      {error && 
      <Alert variant="info" onClose={() => setError(false)} dismissible>
        <Alert.Heading>Error!</Alert.Heading>
          <p>
            Invalid login credentials, please try again
          </p>
      </Alert>
      }

      <Form onSubmit={handleSubmit} >

        <Form.Group controlId="exampleForm.ControlSelect1" className="form-input">
          <Form.Label>Select Profile Type: </Form.Label>
          <Form.Control as="select" onChange={e => setType(e.target.value)}>
            <option>user</option>
            <option>organization</option>
          </Form.Control>
        </Form.Group>

        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control 
            placeholder="email"
            type="text"
            name="email"
            value={email}
            onChange={event => setEmail(event.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control 
            placeholder="password"
            type="password"
            name="password"
            value={password}
            onChange={event => setPassword(event.target.value)}
          />
        </Form.Group>     

        <Button variant="primary" placeholder="submit" type="submit">Login</Button>{' '}         
        <div>
          or <Link to='/signup'>sign up</Link>
        </div>
          
      </Form>
      </div>
      </div>
    </section>
      )
    
  )
}