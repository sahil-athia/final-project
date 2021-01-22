import { useState } from 'react'
import axios from 'axios';
import { Form } from 'react-bootstrap';

export default function EditBody(props){
  const [skills, setSkills] = useState(props.skills); 
  const [education, setEducation] = useState(props.education); 
  const [experience, setExperience] = useState(props.experience); 

  const handleSubmit = (event) => {
    event.preventDefault()
    let data = {
      skills: skills,
      education: education,
      experience: experience,
      id: props.user_id
    }
    axios.post(`/api/v1/user/update_body`, {data}, {withCredentials: true})
    .then(() => {
      props.reload(current => !current)
      props.onClick(prev => ({
        ...prev,
        body: false
      }))
    })
  };
  
  return(
    <div className="body-form">
      <div className="form-box">
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label>Skills:</Form.Label>
          <Form.Control 
            as="textarea" 
            rows={4} 
            placeholder="skills"
            type="text"
            name="skills"
            value={skills}
            onChange={event => setSkills(event.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label>Education:</Form.Label>
          <Form.Control 
            as="textarea" 
            rows={4} 
            placeholder="education"
            type="text"
            name="education"
            value={education}
            onChange={event => setEducation(event.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label>Experience</Form.Label>
          <Form.Control 
            as="textarea" 
            rows={4} 
            placeholder="experience"
            type="text"
            name="experience"
            value={experience}
            onChange={event => setExperience(event.target.value)}
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