export default function NetworkBox(props) {
  console.log(props)
  return(
    <div>
      <hr></hr>
      <h2>{props.name}: {props.industry}</h2>
      <p>{props.email}</p>
      <p>{props.summary}</p>
      <hr></hr>
    </div>
  )
}