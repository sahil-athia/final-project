import { useState } from 'react'
import axios from 'axios';

const CreateJobs = ({organization_id, setNewJob, reload}) => {
  const [state, setState] = useState({title: '', salary: '', description: ''}); 

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(state);
    const jobInfo = {...state, organization_id}
    axios.post(`http://localhost:8080/api/v1/job`, {jobInfo}, {withCredentials: true})
    .then(() => {
      reload(currentState => !currentState);
      setNewJob(false);
    })
    .catch((err) => console.log(err));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          Title: 
          <input
            placeholder="title"
            type="text"
            name="title"
            value={state.title}
            onChange={event => setState(prev => ({...prev, title: event.target.value}))}
          />
        </div>
        <br/>
        <div>
          Salary: 
          <input
            placeholder="salary"
            type="text"
            name="salary"
            value={state.salary}
            onChange={event => setState(prev => ({...prev, salary: event.target.value}))}
          />
       </div>
       <br/>
       <div>
          Description: 
          <input
            placeholder="description"
            type="text"
            name="description"
            value={state.description}
            onChange={event => setState(prev => ({...prev, description: event.target.value}))}
          />
        </div>
        <br/>
        <div>
          <button placeholder="submit" type="submit">
            Done
          </button>
        </div>
      </form>
    </div>
  );

};

export default CreateJobs;