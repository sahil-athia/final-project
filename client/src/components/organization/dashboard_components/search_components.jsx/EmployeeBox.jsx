import axios from "axios";
import { Link } from "react-router-dom";
import UserPage from "./UserPage";

const EmployeeBox = () => {
  const { organization_id, id, name, email, summary, industry, reload } = props;
  
  const verifyEmployee = () => {
    const user_id = { id, organization_id };
    axios.put('/api/v1/connection', {user_id}, {withCredentials: true})
    .then(reload(current => !current))
    .catch((err) => {
      console.log(err);
    });
  }

  return(
    <div>
      <hr></hr>
      <h2>{name}: {industry}</h2>
      <p>{email}</p>
      <p>{summary}</p>
      <Link
        to={{
          pathname: "/individual/user_page",
          hash: `#${id}` 
        }}
      >View</Link>
      <button onClick={verifyEmployee}>Add</button>
      <hr></hr>
    </div>
  )
};

export default EmployeeBox;