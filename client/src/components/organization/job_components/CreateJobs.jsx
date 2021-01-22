import { useState } from 'react'
import axios from 'axios';
import Save from '../../../icons/Save.png';
import Cancel from '../../../icons/Cancel.png';

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
      <form className="create-form" autoComplete="off" onSubmit={handleSubmit}>
        <div className="form-line">
          <div className="form-line-title">Title: </div>
          <input
            className="form-line-input"
            type="text"
            name="title"
            value={state.title}
            onChange={event => setState(prev => ({...prev, title: event.target.value}))}
          />
        </div>
        <div className="form-line">
          <div className="form-line-title">Salary: </div>
          <input
            className="form-line-input"
            type="text"
            name="salary"
            value={state.salary}
            onChange={event => setState(prev => ({...prev, salary: event.target.value}))}
          />
       </div>
       <div className="form-line">
          <div className="form-line-title">Description: </div>
          <input
            className="form-line-input"
            type="text"
            name="description"
            value={state.description}
            onChange={event => setState(prev => ({...prev, description: event.target.value}))}
          />
        </div>
        <div className="form-submit">
          <button className="cancel-btn">
            <img className="cancel-btn" src={Cancel} alt="Cancel"/>
            Cancel
          </button>
          <button className="save-btn" type="submit">
            <img className="save-btn" src={Save} alt="Save"/>
            Save
          </button>

        </div>
      </form>
  );

};

export default CreateJobs;