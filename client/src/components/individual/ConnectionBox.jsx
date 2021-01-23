import axios from 'axios'
import {useState} from 'react'
import Confirm from './small_components/Confirm'
import Status from './small_components/Status.jsx'
import { useHistory, Link } from "react-router-dom";

export default function ConnectionBox(props) {
  const [confirm, setConfirm] = useState(false)
  const [loading, setLoading] = useState(false)

  const removeConnection = () => {
    setLoading(true)
    setConfirm(false)
    let data = {
      recipient_id: props.id,
      sender_id: props.user_id
    }
    setTimeout(() => {
      axios.delete(`/api/v1/connection/${props.user_id}`, {data}, {withCredentials: true})
      .then(() => props.reload(current => !current))
      .then(() => {
        setLoading(false)
      })
      .catch((e) => console.log(e))
    }, 1000)
    
  }

  const deleteCancel = () => {
    setConfirm(false)
  }
  return(
    <>
    {loading === true && <div className="user-box"><Status message="Removing"/></div>}
    {(confirm || loading) === false && 
    <div className="user-box">
      <div className="user-information">
        <img src={props.photo || "https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png"} alt="Your Profile Photo"></img>

        <div>
          <h2>{props.name}</h2>
          <h4><em>{props.industry}</em></h4>
          <p>{props.email}</p>
        </div>
      </div>
      <div className="options">
      <svg style={{width:"2.5em", height:"2.5em", margin:"1em"}} viewBox="0 0 24 24" onClick={() => setConfirm(true)}>
      <path fill="currentColor" d="M1.46,8.88L2.88,7.46L5,9.59L7.12,7.46L8.54,8.88L6.41,11L8.54,13.12L7.12,14.54L5,12.41L2.88,14.54L1.46,13.12L3.59,11L1.46,8.88M15,4A4,4 0 0,1 19,8A4,4 0 0,1 15,12A4,4 0 0,1 11,8A4,4 0 0,1 15,4M15,5.9A2.1,2.1 0 0,0 12.9,8A2.1,2.1 0 0,0 15,10.1C16.16,10.1 17.1,9.16 17.1,8C17.1,6.84 16.16,5.9 15,5.9M15,13C17.67,13 23,14.33 23,17V20H7V17C7,14.33 12.33,13 15,13M15,14.9C12,14.9 8.9,16.36 8.9,17V18.1H21.1V17C21.1,16.36 17.97,14.9 15,14.9Z" />
      </svg>
      <svg style={{width:"2.5em", height:"2.5em", margin:"1em"}} viewBox="0 0 24 24" xlinkHref={`/individual/user_page#${props.id}`}>
        <a href={`/individual/user_page#${props.id}`}>
        <path fill="currentColor" d="M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17M12,4.5C7.14,4.5 2.78,7.5 1,12C3.39,18.08 10.25,21.06 16.33,18.67C19.38,17.47 21.8,15.06 23,12C21.22,7.5 16.86,4.5 12,4.5M7,22H9V24H7V22M11,22H13V24H11V22M15,22H17V24H15V22Z" />
        </a>
      </svg>
      </div>
    </div>}
    {confirm === true && <Confirm
      message="Are you sure you want to remove this connection?"
      deleteConfirm={removeConnection}
      deleteCancel={deleteCancel}
    />}
  </>
  )
}