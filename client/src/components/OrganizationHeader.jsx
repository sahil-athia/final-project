import { Link } from "react-router-dom";
import {useHistory} from 'react-router-dom'
import { Navbar, Nav } from 'react-bootstrap'
import './IndividualHeader.scss'

const OrganizationHeader = (props) => {
  let history = useHistory()
  const handleBack = () => {
    window.location.pathname = '/'
  }
  return(
    <div>
    <Navbar bg="" variant="">
      <Navbar.Brand className="brand" >Insight</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link className="link" href="/organization/dashboard">Profile</Nav.Link>
        <Nav.Link className="link" href="/organization/employees">Employees</Nav.Link>
        <Nav.Link className="link" href="/organization/jobs">Jobs</Nav.Link>
        <button type="button" onClick={() => props.onClick(handleBack)}>Logout</button>
      </Nav>
    </Navbar>
  </div>
  )
};

export default OrganizationHeader;

//onClick={props.onClick(handleBack)}

  