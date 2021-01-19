import { useState } from 'react'
import axios from 'axios';
import Confirm from '../../individual/small_components/Confirm';

const DeleteJob = (props) => {
  const {id, reload} = props; 
  const [show, setShow] = useState(false);

  const deleteJob = () => {
    axios.delete(`http://localhost:8080/api/v1/job/${id}`)
    .then(() => reload(currentState => !currentState))
    .then(() => setShow(false))
    .catch((err) => console.log(err));
  }

  const deleteCancel = () => {
    setShow(false)
  }

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