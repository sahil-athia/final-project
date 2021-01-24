import axios from 'axios';
import { useState } from 'react'
import { Form } from 'react-bootstrap';


const EditHead = (props) => {
  const [industry, setIndustry] = useState(props.industry); 
  const [url, setUrl] = useState(props.image_url); 

  const handleSubmit = (event) => {
    event.preventDefault()
    const data = { industry, image_url, id: props.user_id };
    axios.post(`/api/v1/user/update_head`, {data}, {withCredentials: true})
    .then(() => {
      props.reload(current => !current)
      props.onClick(prev => ({
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
            <Form.Label>Industry & Title:</Form.Label>
            <Form.Control 
              as="textarea" 
              rows={1} 
              placeholder="industry"
              type="text"
              name="industry"
              value={industry}
              onChange={event => setIndustry(event.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Resume Url:</Form.Label>
            <Form.Control 
              as="textarea" 
              rows={1} 
              placeholder="resume url"
              type="text"
              name="resume url"
              value={url}
              onChange={event => setUrl(event.target.value)}
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