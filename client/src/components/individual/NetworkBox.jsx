import axios from "axios";
import { Link } from "react-router-dom";
import UserPage from "./UserPage";

export default function NetworkBox(props) {
  const createConnection = () => {
    let data = {
      recipient_id: props.id,
      sender_id: props.user_id
    }
    axios.post('/api/v1/connection', {data}, {withCredentials: true})
    .then(res => console.log(res))
    .catch((err) => {
      console.log(err);
    });
  }

  return(
    <div>
      <hr></hr>
      <h2>{props.name}: {props.industry}</h2>
      <p>{props.email}</p>
      <p>{props.summary}</p>
      <Link
        to={{
          pathname: "/individual/user_page",
          hash: `#${props.id}` 
        }}
      >View</Link>
      <button onClick={createConnection}>Connect</button>
      <hr></hr>
    </div>
  )
}