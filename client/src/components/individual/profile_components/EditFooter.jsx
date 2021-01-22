import { useState } from 'react'
import axios from 'axios';
import { Form } from 'react-bootstrap';

export default function EditFooter(props){
  const [contact, setContact] = useState(props.contact); 
  const [location, setLocation] = useState(props.location);

  const handleSubmit = (event) => {
    event.preventDefault()
    let data = {
      contact: contact,
      location: location,
      id: props.user_id
    }
    axios.post(`/api/v1/user/update_footer`, {data}, {withCredentials: true})
    .then(() => {
      props.reload(current => !current)
      props.onClick(prev => ({
        ...prev,
        footer: false
      }))
    })
  };
  
  return(
    <div className="footer-form">
      <div className="form-box">
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Contact:</Form.Label>
            <Form.Control 
              as="textarea" 
              rows={1} 
              placeholder="contact"
              type="text"
              name="contact"
              value={contact}
              onChange={event => setContact(event.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Location:</Form.Label>
            <Form.Control 
              as="textarea" 
              rows={1} 
              placeholder="location"
              type="text"
              name="location"
              value={location}
              onChange={event => setLocation(event.target.value)}
            />
          </Form.Group>          
          <button placeholder="submit" type="submit">
            Done
          </button>
      
        </Form>
      </div>
    </div>
  )
}