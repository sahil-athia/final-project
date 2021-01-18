import { useState } from 'react'
import axios from 'axios';

export default function EditFooter(props){
  const [contact, setContact] = useState(props.contact); 
  const [location, setLocation] = useState(props.location);

  const handleSubmit = (event) => {
    event.preventDefault()
    let data = {
      contact: contact,
      location: location,
      id: props.user_id
    }
    axios.post(`/api/v1/user/update_footer`, {data}, {withCredentials: true})
    .then(() => {
      props.reload(current => !current)
      props.onClick(prev => ({
        ...prev,
        footer: false
      }))
    })
  };
  
  return(
    <div>
      <h1>EDIT SECTION</h1>
      <form onSubmit={handleSubmit}>
          Contact:
          <input
            placeholder="contact"
            type="text"
            name="contact"
            value={contact}
            onChange={event => setContact(event.target.value)}
          />
          <br></br>
          Location:
          <input
            placeholder="location"
            type="text"
            name="location"
            value={location}
            onChange={event => setLocation(event.target.value)}
          />        
          <br></br>
          
          <button placeholder="submit" type="submit">
            Done
          </button>
      
        </form>
    </div>
  )
}