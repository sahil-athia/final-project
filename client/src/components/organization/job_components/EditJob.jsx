import { useState } from 'react'
import axios from 'axios';

const EditJob = (props) => {
  const { id, onSave, onCancel} = props; 
  const [data, setData] = useState(props); 
  
  return(
    <form autoComplete="off" onSubmit={event => event.preventDefault()}>
        <input
          placeholder="Title"
          type="text"
          name="title"
          value={data.title}
          onChange={event => setData(prev => ({...prev, title: event.target.value}))}
        />
        <input
          placeholder="Salary"
          type="text"
          name="salary"
          value={data.salary}
          onChange={event => setData(prev => ({...prev, salary: event.target.value}))}
        />
        <input 
          placeholder="Description"
          type="text"
          name="description"
          value={data.description}
          onChange={event => setData(prev => ({...prev, description: event.target.value}))}
        />          
        <button onClick={() => onCancel()}>Cancel</button>
        <button onClick={() => onSave(id, data)}>Save</button>
    
    </form>
  )
};

export default EditJob;