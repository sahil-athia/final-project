
import { Navbar, Nav } from 'react-bootstrap'

export default function IndividualHeader(props) {
  const handleBack = () => {
    window.location.pathname = '/'
  }
  return(
    <>
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand >Insight</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="/individual">Profile</Nav.Link>
        <Nav.Link href="/individual/networking">Networking</Nav.Link>
        <Nav.Link href="/individual/connections">Connections</Nav.Link>
        <Nav.Link href="/individual/jobs">Jobs</Nav.Link>
        <button onClick={() => props.onClick(handleBack)} >Logout</button>
      </Nav>
    </Navbar>
  </>
  )
}