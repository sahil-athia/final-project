import axios from 'axios';
import { useState } from 'react'

export default function EditHead(props){
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
    axios.post(`http://localhost:8080/api/v1/user/update_head`, {data}, {withCredentials: true})
    .then(() => {
      props.onClick(prev => ({
        ...prev,
        head: false
      }))
    })

  };
  
  return(
    <div>
      <h1>EDIT SECTION</h1>
      <form onSubmit={handleSubmit}>
          <input
            placeholder="industry"
            type="text"
            name="industry"
            value={industry}
            onChange={event => setIndustry(event.target.value)}
          />
          <input
            placeholder="summary"
            type="text"
            name="summary"
            value={summary}
            onChange={event => setSummary(event.target.value)}
          />
          <input 
            placeholder="url"
            type="text"
            name="url"
            value={url}
            onChange={event => setUrl(event.target.value)}
          />          
        
          <button placeholder="submit" type="submit">
            Done
          </button>
      
        </form>
    </div>
  )
}