import axios from "axios";
import { Link } from "react-router-dom";

const EmployeeBox = (props) => {
  const { organization_id, id, name, email, summary, industry, reload, localReload } = props;
  
  const verifyEmployee = () => {
    const data = { "id": id, "organization_id": organization_id, "verified": true };
    axios.put(`http://localhost:8080/api/v1/user/${id}`, {data}, {withCredentials: true})
    .then(() => {
      localReload(currentState => !currentState)
      reload(currentState => !currentState)
    })
    .catch((err) => {
      console.log(err);
    });
  }

  return(
    <div>
      <hr></hr>
      <h3>{name}</h3>
      <p>{industry}</p>
      <p>{email}</p>
      <p>{summary}</p>
      <Link
        to={{
          pathname: "/organization/user_page",
          hash: `#${id}` 
        }}
      >View</Link>
      <button onClick={verifyEmployee}>Add</button>
      <hr></hr>
    </div>
  )
};

export default EmployeeBox;