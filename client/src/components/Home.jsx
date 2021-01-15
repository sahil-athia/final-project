import {Link} from 'react-router-dom'
import {fragment} from "react"

export default function Home(props) {
  return (
    <>
      <h1> This Is the Home Page</h1>
      <Link to="/main">Main</Link>
    </>
  )
}