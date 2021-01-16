import {Link} from 'react-router-dom'
import {fragment} from "react"
import './Home.scss'
export default function Home(props) {
  
  return (
    <>
      <div className="home">
        <h1> This Is the Home Page</h1>
        <Link to='/login'>Log In</Link>
        <br></br>
        <Link to='/signup'>Sign Up</Link>
      </div>
    </>
  )
}