import { useState } from 'react'
import axios from 'axios';

const EditBody = ({id, introduction, onClick, reload}) => {
  const [state, setState] = useState(introduction); 

  const handleSubmit = (event) => {
    event.preventDefault()
    axios.post(`http://localhost:8080/api/v1/organization/update_body`, {state}, {withCredentials: true})
    .then(() => {
      reload(currentState => !currentState)
      onClick(false)
    })
    .catch((err) => console.log(err));
  };
  
  return(
    <div className="body-form">
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