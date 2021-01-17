import { useState } from 'react'

export default function EditBody(props){
  const [skills, setSkills] = useState(props.skills); 
  const [education, setEducation] = useState(props.education); 
  const [experience, setExperience] = useState(props.experience); 

  const handleSubmit = (event) => {
    event.preventDefault()

    props.onClick(prev => ({
      ...prev,
      body: false
    }))
  };
  
  return(
    <div>
      <h1>EDIT SECTION</h1>
      <form onSubmit={handleSubmit}>
          <input
            placeholder="skills"
            type="text"
            name="skills"
            value={skills}
            onChange={event => setSkills(event.target.value)}
          />
          <input
            placeholder="education"
            type="text"
            name="education"
            value={education}
            onChange={event => setEducation(event.target.value)}
          />
          <input 
            placeholder="experience"
            type="text"
            name="experience"
            value={experience}
            onChange={event => setExperience(event.target.value)}
          />          
        
          <button placeholder="submit" type="submit">
            Done
          </button>
      
        </form>
    </div>
  )
}