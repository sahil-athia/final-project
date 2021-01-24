import { useState } from 'react'
import axios from 'axios';
import { Form } from 'react-bootstrap';

const EditFooter = ({ id, website, location, onClick, reload }) => {
  const [state, setState] = useState({website, location}); 

  const handleSubmit = (event) => {
    event.preventDefault()
    axios.post(`/api/v1/user/update_footer`, {state}, {withCredentials: true})
    .then(() => {
      reload(current => !current)
      onClick(prev => ({
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
            <Form.Label>Website:</Form.Label>
            <Form.Control 
              as="textarea" 
              rows={1} 
              placeholder="website"
              type="text"
              name="website"
              value={website}
              onChange={event => setState(prev => ({...prev, website: event.target.value}))}
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
              onChange={event => setState(prev => ({...prev, location: event.target.value}))}
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