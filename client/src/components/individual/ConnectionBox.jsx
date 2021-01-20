import axios from 'axios'
import {useState} from 'react'
import Confirm from './small_components/Confirm'
import { useHistory, Link } from "react-router-dom";

export default function ConnectionBox(props) {
  let history = useHistory()
  const [confirm, setConfirm] = useState(false)

  const removeConnection = () => {
    let data = {
      recipient_id: props.id,
      sender_id: props.user_id
    }
    console.log(data)
    axios.delete(`/api/v1/connection/${props.user_id}`, {data}, {withCredentials: true})
    .then(() => props.reload(current => !current))
    .then(() => setConfirm(false))
  }

  const deleteCancel = () => {
    setConfirm(false)
  }
  return(
    <>
    {confirm === false && 
      <div>
      <hr></hr>
      <h2>{props.name}: {props.industry}</h2>
      <p>{props.email}</p>
      <p>{props.summary}</p>
      <hr></hr>
      <Link
        to={{
          pathname: "/individual/user_page",
          hash: `#${props.id}` 
        }}
      >View</Link>
      <button onClick={() => setConfirm(true)}>Remove</button>
      </div>}
    {confirm === true && <Confirm
      message="are you sure you want to delete this connection?"
      deleteConfirm={removeConnection}
      deleteCancel={deleteCancel}
    />}
  </>
  )
}