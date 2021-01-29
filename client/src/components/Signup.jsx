import { useState } from 'react'
import axios from 'axios';
import { useHistory, Link } from "react-router-dom";
import  Alert  from "react-bootstrap/Alert"
import { Form, Button } from 'react-bootstrap';
import './Login.scss'
import Loading from "./Loading"

export default function Signup(props) {
  let history = useHistory();
  const [name, setName] = useState(""); 
  const [email, setEmail] = useState(""); 
  const [password, setPassword] = useState(""); 
  const [password_confirmation, setPassword_confirmation] = useState(""); 
  const [type, setType] = useState("user")
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = (event) => {
    setLoading(true)
    event.preventDefault()
    let user = {
      name: name,
      email: email,
      password: password,
      password_confirmation: password_confirmation,
      profile_type: type
    }
      axios.post(`/api/v1/${type}`, {user}, {withCredentials: true})
      .then(response => {
        
        if (response.data.status === 'created') {
          setLoading(false)
          props.handleLogin(response.data)
          setError(false)
          if (response.data.user.profile_type === "organization") {
            history.push("/organization")
          } else  {
            history.push("/individual")
          }
        } else {
          if(response.data.errors) {
            setLoading(false)
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
      {error && 
          <Alert variant="info" onClose={() => setError(false)} dismissible style={{position: "relative", zIndex: "100"}}>
            <Alert.Heading>Error!</Alert.Heading>
              <p>
                Please ensure all fields are filled in correctly
              </p>
        </Alert>
        }  
      <h1>Insight</h1>
        </div>

        <div className="form-box">
        <h1>Sign Up</h1>      
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Label>Select Profile Type: </Form.Label>
            <Form.Control as="select" onChange={e => setType(e.target.value)}>
              <option>user</option>
              <option>organization</option>
            </Form.Control>
        </Form.Group>

          <Form.Group controlId="formBasicEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control 
              placeholder="name"
              type="text"
              name="name"
              value={name}
              onChange={event => setName(event.target.value)}
            />
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
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
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

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password Confirmation</Form.Label>
            <Form.Control 
              placeholder="password confirmation"
              type="password"
              name="password_confirmation"
              value={password_confirmation}
              onChange={event => setPassword_confirmation(event.target.value)}
            />
          </Form.Group>         
        
          <Button variant="primary" placeholder="submit" type="submit">Signup</Button>{' '}         
          <p>or <Link to='/login'>Login</Link></p>

      
        </Form>
        </div>
        </div>
      </section>
      )
  )
}