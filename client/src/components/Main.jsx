import {Link} from 'react-router-dom'

export default function Main(props) {
  return (
    <div>
      <h1>This is the MAIN page</h1>
      <Link to="/">Home</Link>
    </div>
  )
}