import axios from 'axios';
import { useState } from 'react'
import { useHistory } from "react-router-dom";

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
    <div>
      <h1>EDIT SECTION</h1>
      <form onSubmit={handleSubmit}>
          Industry: 
          <input
            placeholder="industry"
            type="text"
            name="industry"
            value={industry}
            onChange={event => setIndustry(event.target.value)}
          />
          <br></br>

          Summary: 
          <input
            placeholder="summary"
            type="text"
            name="summary"
            value={summary}
            onChange={event => setSummary(event.target.value)}
          />
          <br></br>

          Resume Url: 
          <input 
            placeholder="url"
            type="text"
            name="url"
            value={url}
            onChange={event => setUrl(event.target.value)}
          />          
          <br></br>

          <button placeholder="submit" type="submit">
            Done
          </button>
      
        </form>
    </div>
  )
}