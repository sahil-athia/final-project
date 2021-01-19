import { useState } from 'react'
import axios from 'axios';
import Confirm from '../../individual/small_components/Confirm';

const DeleteJob = (props) => {
  const {id, reload} = props; 
  const [show, setShow] = useState(false);

  const deleteJob = () => {
    const state = { id };
    console.log("----inside-----")
    console.log("id", id)
    console.log("props", props)
    console.log("show", show)
    axios.delete(`/api/v1/job/${id}`, {state}, {withCredentials: true})
    .then(() => reload(currentState => !currentState))
    .then(() => setShow(false))
  }

  const deleteCancel = () => {
    setShow(false)
  }
  
  console.log("----outside-----")
  console.log("id", id)
  console.log("props", props)
  console.log("show", show)
  return(
    <div>
      {!show && <button onClick={() => setShow(true)}>Delete</button>}
      {show && <> 
        <Confirm
          message="Are you sure you want to DELETE this job?"
          deleteConfirm={deleteJob}
          deleteCancel={deleteCancel}
        />
      </>}
    </div>
  )
};

export default DeleteJob;