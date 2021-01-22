import axios from 'axios';
import { useState } from 'react'
import { useHistory } from "react-router-dom";
import { Form } from 'react-bootstrap';


export default function EditHead(props){
  let history = useHistory();
  const [industry, setIndustry] = useState(props.industry); 
  const [summary, setSummary] = useState(props.summary); 
  const [url, setUrl] = useState(props.resume_url); 

  const handleSubmit = (event) => {
    event.preventDefault()
    let data = {
      industry: industry,
      summary: summary,
      resume_url: url,
      id: props.user_id
    }
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
            <Form.Label>Industry:</Form.Label>
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
              placeholder="url"
              type="text"
              name="url"
              value={url}
              onChange={event => setUrl(event.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Summary:</Form.Label>
            <Form.Control 
              as="textarea" 
              rows={4} 
              placeholder="summary"
              type="text"
              name="summary"
              value={summary}
              onChange={event => setSummary(event.target.value)}
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