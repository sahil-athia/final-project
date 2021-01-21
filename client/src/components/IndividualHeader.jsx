
import { Navbar, Nav, Button } from 'react-bootstrap'
import './IndividualHeader.scss'
export default function IndividualHeader(props) {
  const handleBack = () => {
    window.location.pathname = '/'
  }
  return(
    <div>
    <Navbar bg="" variant="">
      <Navbar.Brand className="brand" >Insight</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link className="link" href="/individual">Profile</Nav.Link>
        <Nav.Link className="link" href="/individual/networking">Networking</Nav.Link>
        <Nav.Link className="link" href="/individual/connections">Connections</Nav.Link>
        <Nav.Link className="link" href="/individual/jobs">Jobs</Nav.Link>
      </Nav>
        <button onClick={() => props.onClick(handleBack)} >Logout</button>
    </Navbar>
    </div>
  )
}