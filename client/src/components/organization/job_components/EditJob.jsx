import { useState } from 'react'
import axios from 'axios';

const EditJob = (props) => {
  const { id, reload, title, salary, description} = props; 
  const [data, setData] = useState(props); 
  const [show, setShow] = useState(false);
  const handleSubmit = (event) => {
    console.log("data", data)
    event.preventDefault()
    const state = {...data};
    console.log("state", state)
    axios.put(`http://localhost:8080/api/v1/job/${id}`, {state}, {withCredentials: true})
    .then(() => {
      reload(currentState => !currentState)
    })
    .then(() => handelClick())
    .catch((err) => console.log(err));
  };

  const handelClick = () => {
    setShow(currentState => !currentState)
  };
  
  return(
    <div>
      {!show && <button onClick={handelClick}>Edit</button>}
      {show && <> 
        <h5>EDIT SECTION</h5>
        <form onSubmit={handleSubmit}>
            Title:
            <input
              placeholder="title"
              type="text"
              name="title"
              value={data.title}
              onChange={event => setData(prev => ({...prev, title: event.target.value}))}
            />
            <br></br>
            Salary:
            <input
              placeholder="salary"
              type="text"
              name="salary"
              value={data.salary}
              onChange={event => setData(prev => ({...prev, salary: event.target.value}))}
            />
            <br></br>
            Description:
            <input 
              placeholder="description"
              type="text"
              name="description"
              value={data.description}
              onChange={event => setData(prev => ({...prev, description: event.target.value}))}
            />          
            <br></br>
            <button onClick={handleSubmit}>Done</button>
        
        </form>
      </>}
    </div>
  )
};

export default EditJob;