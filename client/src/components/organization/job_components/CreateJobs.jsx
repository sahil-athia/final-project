import { useState } from 'react'
import axios from 'axios';
import Save from '../../../icons/Save.png';

const CreateJobs = ({organization_id, setNewJob, reload}) => {
  const [state, setState] = useState({title: '', salary: '', description: ''}); 

  const handleSubmit = (event) => {
    event.preventDefault()
    const jobInfo = {...state, organization_id}
    axios.post(`http://localhost:8080/api/v1/job`, {jobInfo}, {withCredentials: true})
    .then(() => {
      reload(currentState => !currentState);
      setNewJob(false);
    })
    .catch((err) => console.log(err));
  };

  return (
      <form className="edit-form" autoComplete="off" onSubmit={handleSubmit}>
        <div className="form-line">
          <label className="form-line-title">Title 
          <input
            className="form-line-input"
            type="text"
            name="title"
            value={state.title}
            onChange={event => setState(prev => ({...prev, title: event.target.value}))}
          />
          </label>
        </div>
        <div className="form-line">
          <label className="form-line-title">Salary
          <input
            className="form-line-input"
            type="text"
            name="salary"
            value={state.salary}
            onChange={event => setState(prev => ({...prev, salary: event.target.value}))}
          />
          </label>
       </div>
       <div className="form-line">
          <label className="form-line-title">Description
          <input
            className="form-line-input"
            type="text"
            name="description"
            value={state.description}
            onChange={event => setState(prev => ({...prev, description: event.target.value}))}
          />
          </label>
        </div>
        <div className="form-submit">
          <button className="save-btn" type="submit">
            Save   
          <img className="save-btn" src={Save} alt="Save"/>
          </button>

        </div>
      </form>
  );

};

export default CreateJobs;