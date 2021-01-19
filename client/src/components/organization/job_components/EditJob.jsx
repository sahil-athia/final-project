import { useState } from 'react'
import axios from 'axios';

const EditJob = (props) => {
  const { id, reload} = props; 
  const [state, setState] = useState(props); 
  const [show, setShow] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault()
    axios.put(`http://localhost:8080/api/v1/job/${id}`, {state}, {withCredentials: true})
    .then(() => {
      reload(currentState => !currentState)
      handelClick();
    })
    .catch((err) => console.log(err));
  };

  const handelClick = () => {
    setShow(currentState => !currentState)
  };
  
  return(
    <div>
      {!show && <button onClick={handelClick}>Edit</button>}
      {show && <> 
        <button onClick={handleSubmit}>Done</button>
        <h5>EDIT SECTION</h5>
        <form onSubmit={handleSubmit}>
            Title:
            <input
              placeholder="title"
              type="text"
              name="title"
              value={state.title}
              onChange={event => setState(prev => ({...prev, title: event.target.value}))}
            />
            <br></br>
            Salary:
            <input
              placeholder="salary"
              type="text"
              name="salary"
              value={state.salary}
              onChange={event => setState(prev => ({...prev, salary: event.target.value}))}
            />
            <br></br>
            Description:
            <input 
              placeholder="description"
              type="text"
              name="description"
              value={state.description}
              onChange={event => setState(prev => ({...prev, description: event.target.value}))}
            />          
            <br></br>
            <button placeholder="submit" type="submit">
              Done
            </button>
        
        </form>
      </>}
    </div>
  )
};

export default EditJob;