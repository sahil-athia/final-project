import RemoveEmployee from './RemoveEmployee';

export default function CurrentEmployee(props) {
  return(
    <div className="employee-box" key={props.id}>
      <h4>Name: {props.name}</h4>
      <p>Summary: {props.summary}</p>
      <p>Industry: {props.industry}</p>
      <p>Skills: {props.skills}</p>
      <p>Education: {props.education}</p>
      <p>Experience: {props.experience}</p>
      <p>Email: {props.email}</p>
      <p>Location: {props.location}</p>
      <p>Contact: {props.contact}</p>
      <div>
        <RemoveEmployee
          id={props.id}
          organization_id={props.organization_id}
          reload={props.reload}
          localReload={props.setReload}
        />
      </div>
      <hr/>
    </div>
  )
}