import axios from "axios";
import Status from './small_components/Status.jsx'
import '../../sass/UserBox.scss';
import { useState } from 'react'
export default function NetworkBox(props) {
  const [loading, setLoading] = useState(false)

  const createConnection = () => {
    setLoading(true)
    let data = {
      recipient_id: props.id,
      sender_id: props.user_id
    }
    setTimeout(() => {
      axios.post('/api/v1/connection', {data}, {withCredentials: true})
      .then(() => props.reload(current => !current))
      .then(() => setLoading(false))
      .catch((err) => {
        console.log(err);
      });
    }, 1000)
    
  }

  return(
    <div className="user-box">
    {loading === true 
    ? <Status message="Adding"/> 
    : <>
        <div className="user-information">
          <img src={props.photo || "https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png"} alt="Your Profile Photo"></img>
          <div>
              <h2>{props.name}</h2>
              <h4><em>{props.industry}</em></h4>
              <p>{props.email}</p>
            </div>
          </div>
          <div className="options">
          <svg style={{width:"2.5em", height:"2.5em", margin:"1em"}} viewBox="0 0 24 24" onClick={createConnection}>
            <path fill="currentColor" d="M15,4A4,4 0 0,0 11,8A4,4 0 0,0 15,12A4,4 0 0,0 19,8A4,4 0 0,0 15,4M15,5.9C16.16,5.9 17.1,6.84 17.1,8C17.1,9.16 16.16,10.1 15,10.1A2.1,2.1 0 0,1 12.9,8A2.1,2.1 0 0,1 15,5.9M4,7V10H1V12H4V15H6V12H9V10H6V7H4M15,13C12.33,13 7,14.33 7,17V20H23V17C23,14.33 17.67,13 15,13M15,14.9C17.97,14.9 21.1,16.36 21.1,17V18.1H8.9V17C8.9,16.36 12,14.9 15,14.9Z" />
          </svg>
          <svg style={{width:"2.5em", height:"2.5em", margin:"1em"}} viewBox="0 0 24 24" xlinkHref={`/individual/user_page#${props.id}`}>
            <a href={`/individual/user_page#${props.id}`}>
            <path fill="currentColor" d="M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17M12,4.5C7.14,4.5 2.78,7.5 1,12C3.39,18.08 10.25,21.06 16.33,18.67C19.38,17.47 21.8,15.06 23,12C21.22,7.5 16.86,4.5 12,4.5M7,22H9V24H7V22M11,22H13V24H11V22M15,22H17V24H15V22Z" />
            </a>
          </svg>
        </div>
      </>
    }
    </div>
  )
}

{/* <Link
        to={{
          pathname: "/individual/user_page",
          hash: `#${props.id}` 
        }}
      >View</Link> */}