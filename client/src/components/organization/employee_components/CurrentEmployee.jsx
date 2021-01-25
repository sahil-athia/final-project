import { Link } from "react-router-dom";
import RemoveEmployee from './RemoveEmployee';

export default function CurrentEmployee(props) {
  return(
    <div className="employee-box" key={props.id}>
      <div className="employee-box-name">{props.name}</div>
      <p>Email: {props.email}</p>
      <p>Summary: {props.summary}</p>
      <p>Skills: {props.skills}</p>
      <p>Experience: {props.experience}</p>
      <div>
      <Link
          to={{
            pathname: "/organization/user_page",
            hash: `#${props.id}` 
          }}>
        View profile
      </Link>
        <RemoveEmployee
          id={props.id}
          organization_id={props.organization_id}
          reload={props.reload}
          localReload={props.setReload}
        />
      </div>
      <hr/>
    </div>
  )
}