import { useState } from 'react'

export default function EditFooter(props){
  const [contact, setContact] = useState(props.contact); 
  const [location, setLocation] = useState(props.location);

  const handleSubmit = (event) => {
    event.preventDefault()

    props.onClick(prev => ({
      ...prev,
      footer: false
    }))
  };
  
  return(
    <div>
      <h1>EDIT SECTION</h1>
      <form onSubmit={handleSubmit}>
          <input
            placeholder="contact"
            type="text"
            name="contact"
            value={contact}
            onChange={event => setContact(event.target.value)}
          />
          <input
            placeholder="location"
            type="text"
            name="location"
            value={location}
            onChange={event => setLocation(event.target.value)}
          />        
        
          <button placeholder="submit" type="submit">
            Done
          </button>
      
        </form>
    </div>
  )
}