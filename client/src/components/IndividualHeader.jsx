import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


export default function IndividualHeader(props) {
  return(
    <div>
       <nav>
        <ul>
          <Link to="/individual"> Profile </Link>
          <Link to="/individual/networking"> Networking </Link>
          <Link to="/individual/connections"> Connections </Link>
          <Link to="/individual/jobs"> Jobs </Link>
          {/* <Link to="/individual/notifications"> Notifications </Link> */}
          <button onClick={props.onClick} >Logout</button>
        </ul>
      </nav>
    </div>
  )
}