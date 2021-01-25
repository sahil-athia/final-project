import { Link } from "react-router-dom";

const ShowEmployee = ({ id, name, email, summary, skills, experience, onDelete}) => {

  return(
    <>
      <div className="employee-box-name">{name}</div>
      <p>Email: {email}</p>
      <p>Summary: {summary}</p>
      <p>Skills: {skills}</p>
      <p>Experience: {experience}</p>
      <div className="employee-actions">
        <Link
            className="employee-actions-link"
            to={{
              pathname: "/organization/user_page",
              hash: `#${id}` 
            }}>
          View profile
        </Link>
        <button
          className="delete-btn"
          alt="Remove"
          onClick={onDelete}
        >Remove</button>
      </div>
    </>
)};

export default ShowEmployee;