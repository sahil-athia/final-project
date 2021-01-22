import { Link } from "react-router-dom";
import {useHistory} from 'react-router-dom'
import {useCallback} from 'react'

const OrganizationHeader = (props) => {
  let history = useHistory()
  const handleBack = () => {
    window.location.pathname = '/'
  }
  return(
    <div>
       <nav>
        <ul>
          <Link to="/organization/dashboard"> Dashboard </Link>
          <Link to="/organization/employees"> Employees </Link>
          <Link to="/organization/jobs"> Jobs </Link>
          <button type="button" onClick={() => props.onClick(handleBack)}>Logout</button>
        </ul>
      </nav>
    </div>
  )
};

export default OrganizationHeader;

//onClick={props.onClick(handleBack)}