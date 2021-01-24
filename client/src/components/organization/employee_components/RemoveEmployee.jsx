import { useState } from 'react'
import axios from 'axios';
import Confirm from '../../individual/small_components/Confirm';

const RemoveEmployee = ({id, reload, localReload}) => {

  const [show, setShow] = useState(false);

  const deleteJob = () => {
    const data = { "id": id, "organization_id": null, "verified": false };
    axios.put(`http://localhost:8080/api/v1/user/${id}`, {data}, {withCredentials: true})
    .then(() => {
      reload(currentState => !currentState);
      setShow(false);
      localReload(currentState => !currentState);
    })
    .catch((err) => console.log(err));
  }

  const deleteCancel = () => {
    setShow(false)
  }

  return(
    <div>
      {!show && <button onClick={() => setShow(true)}>Remove</button>}
      {show && <> 
        <Confirm
          message="Are you sure you want to remove this employee?"
          deleteConfirm={deleteJob}
          deleteCancel={deleteCancel}
        />
      </>}
    </div>
  )
};

export default RemoveEmployee;