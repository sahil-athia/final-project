import axios from "axios";
import { Link, useHistory } from "react-router-dom";

import '../../sass/UserBox.scss';

export default function NetworkBox(props) {
  
  const createConnection = () => {
    let data = {
      recipient_id: props.id,
      sender_id: props.user_id
    }
    axios.post('/api/v1/connection', {data}, {withCredentials: true})
    .then(props.reload(current => !current))
    .catch((err) => {
      console.log(err);
    });
  }

  return(
    <div className="user-box">
      <div className="user-information">
        <img src={props.photo || "https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png"} alt="Your Profile Photo"></img>
        <div>
          <h2>{props.name}: {props.industry}</h2>
          <p>{props.email}</p>
        </div>
      </div>
      <div className="options">
      <svg style={{width:"2em", height:"2em", margin:"1em"}} viewBox="0 0 24 24" onClick={createConnection}>
        <path fill="currentColor" d="M15,14C12.33,14 7,15.33 7,18V20H23V18C23,15.33 17.67,14 15,14M6,10V7H4V10H1V12H4V15H6V12H9V10M15,12A4,4 0 0,0 19,8A4,4 0 0,0 15,4A4,4 0 0,0 11,8A4,4 0 0,0 15,12Z" />
      </svg>
      <svg style={{width:"2em", height:"2em", margin:"1em"}} viewBox="0 0 24 24" xmlns={`/individual/user_page#${props.id}`}>
        <a href={`/individual/user_page#${props.id}`}>
          <path fill="currentColor" d="M12,9A3,3 0 0,1 15,12A3,3 0 0,1 12,15A3,3 0 0,1 9,12A3,3 0 0,1 12,9M12,4.5C16.86,4.5 21.22,7.5 23,12C20.61,18.08 13.75,21.06 7.67,18.67C4.62,17.47 2.2,15.06 1,12C2.78,7.5 7.14,4.5 12,4.5M3.18,12C5.56,16.87 11.45,18.89 16.32,16.5C18.28,15.54 19.86,13.96 20.82,12C18.44,7.13 12.55,5.11 7.68,7.5C5.72,8.46 4.14,10.04 3.18,12M9,22H7V24H9V22M13,22H11V24H13V22M17,22H15V24H17V22Z" />
        </a>
      </svg>
      </div>
    </div>
  )
}

{/* <Link
        to={{
          pathname: "/individual/user_page",
          hash: `#${props.id}` 
        }}
      >View</Link> */}