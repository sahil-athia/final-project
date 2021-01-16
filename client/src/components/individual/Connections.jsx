import {Link} from 'react-router-dom'

export default function Connections(props) {
  console.log(props)
  return (
    <>
      <h1>This is the Connections component</h1>
      <p>{props.user_id}</p>
    </>
  )
}