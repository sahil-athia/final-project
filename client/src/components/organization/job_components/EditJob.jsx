import { useState } from 'react'

const EditJob = (props) => {
  const { id, onSave, onCancel} = props; 
  const [data, setData] = useState(props); 
  
  return(
    <form className="edit-form" autoComplete="off" onSubmit={event => event.preventDefault()}>
        <div className="edit-line">
          <div className="edit-line-lable">Title: </div>
          <input
            className="edit-line-input"
            placeholder="Title"
            type="text"
            name="title"
            value={data.title}
            onChange={event => setData(prev => ({...prev, title: event.target.value}))}
          />
        </div>
        <div className="edit-line">
          <div className="edit-line-lable">Salary: </div>
          <input
            className="edit-line-input"
            placeholder="Salary"
            type="text"
            name="salary"
            value={data.salary}
            onChange={event => setData(prev => ({...prev, salary: event.target.value}))}
          />
        </div>
        <div className="edit-line">
          <div className="edit-line-lable">Description: </div>
          <input
            className="edit-line-input" 
            placeholder="Description"
            type="text"
            name="description"
            value={data.description}
            onChange={event => setData(prev => ({...prev, description: event.target.value}))}
          />    
        </div>
        <div className="edit-actions">      
          <button className="edit-actions" onClick={() => onCancel()}>Cancel</button>
          <button className="edit-actions" onClick={() => onSave(id, data)}>Save</button>
        </div>
    </form>
  )
};

export default EditJob;