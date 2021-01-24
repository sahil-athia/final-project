import axios from 'axios';
import { useState } from 'react'
import { Form } from 'react-bootstrap';


const EditHead = ({ name, industry, image_url, onClick, reload }) => {
  const [state, setState] = useState({name, industry, image_url}); 

  const handleSubmit = (event) => {
    event.preventDefault()
    axios.post(`/api/v1/user/update_head`, {state}, {withCredentials: true})
    .then(() => {
      reload(current => !current)
      onClick(prev => ({
        ...prev,
        head: false
      }))
    })
  };
  
  return(
    <div className="head-form">
      <div className="form-box">
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Name:</Form.Label>
            <Form.Control 
              as="textarea" 
              rows={1} 
              placeholder="name"
              type="text"
              name="name"
              value={name}
              onChange={event => setState(prev => ({...prev, name: event.target.value}))}
            />
          </Form.Group>

          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Industry:</Form.Label>
            <Form.Control 
              as="textarea" 
              rows={1} 
              placeholder="industry"
              type="text"
              name="industry"
              value={industry}
              onChange={event => setState(prev => ({...prev, industry: event.target.value}))}
            />
          </Form.Group>

          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Image Url:</Form.Label>
            <Form.Control 
              as="textarea" 
              rows={1} 
              placeholder="image url"
              type="text"
              name="image url"
              value={image_url}
              onChange={event => setState(prev => ({...prev, image_url: event.target.value}))}
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

export default EditHead;