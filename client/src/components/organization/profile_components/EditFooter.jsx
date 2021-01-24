import { useState } from 'react'
import axios from 'axios';
import { Form } from 'react-bootstrap';

const EditFooter = (props) => {
  const [website, setWebsite] = useState(props.website); 
  const [location, setLocation] = useState(props.location); 

  const handleSubmit = (event) => {
    event.preventDefault()
    const data = { 'id': props.id, website, location };
    axios.put(`http://localhost:8080/api/v1/organization/${props.id}`, {data}, {withCredentials: true})
    .then(() => {
      props.reload(currentState => !currentState)
      props.onClick(prev => ({
        ...prev,
        footer: false
      }))
    })
    .catch((err) => console.log(err));
  };
  
  return(
    <div className="footer-form">
      <div className="form-box">
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Website:</Form.Label>
            <Form.Control 
              as="textarea" 
              rows={1} 
              placeholder="website"
              type="text"
              name="website"
              value={website}
              onChange={event => setWebsite(event.target.value)}
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
};

export default EditFooter;