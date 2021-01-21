import { Link } from "react-router-dom";

const OrganizationHeader = (props) => {
  return(
    <div>
       <nav>
        <ul>
          <Link to="/organization/dashboard"> Dashboard </Link>
          <Link to="/organization/employees"> Employees </Link>
          <Link to="/organization/jobs"> Jobs </Link>
          {/* <Link to="/organization/notifications"> Notifications </Link> */}
          <button onClick={props.onClick} >Logout</button>
        </ul>
      </nav>
    </div>
  )
};

export default OrganizationHeader;