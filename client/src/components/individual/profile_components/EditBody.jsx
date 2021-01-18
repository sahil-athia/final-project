import { useState } from 'react'
import axios from 'axios';

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
    <div>
      <h1>EDIT SECTION</h1>
      <form onSubmit={handleSubmit}>
          Skills:
          <input
            placeholder="skills"
            type="text"
            name="skills"
            value={skills}
            onChange={event => setSkills(event.target.value)}
          />
          <br></br>

          Education:
          <input
            placeholder="education"
            type="text"
            name="education"
            value={education}
            onChange={event => setEducation(event.target.value)}
          />
          <br></br>

          Experience:
          <input 
            placeholder="experience"
            type="text"
            name="experience"
            value={experience}
            onChange={event => setExperience(event.target.value)}
          />          
          <br></br>

          <button placeholder="submit" type="submit">
            Done
          </button>
      
        </form>
    </div>
  )
}