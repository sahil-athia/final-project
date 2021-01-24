import { useState } from 'react'
import axios from 'axios';
import { Form } from 'react-bootstrap';

const EditBody = (props) => {
  const [state, setState] = useState(props.introduction); 

  const handleSubmit = (event) => {
    event.preventDefault()
    const data = { 'id': props.id, 'introduction': state };
    axios.put(`http://localhost:8080/api/v1/organization/${props.id}`, {data}, {withCredentials: true})
    .then(() => {
      props.reload(currentState => !currentState)
      props.onClick(prev => ({
        ...prev,
        body: false
      }))
    })
    .catch((err) => console.log(err));
  };
  
  return(
    <div className="org-body-form">
      <div className="form-box">
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Introduction:</Form.Label>
            <Form.Control 
              as="textarea" 
              rows={4} 
              placeholder="introduction"
              type="text"
              name="introduction"
              value={state}
              onChange={event => setState(event.target.value)}
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

export default EditBody;