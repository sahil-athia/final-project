import "./profile.css"
export default function Profile(props){
  return (
    <div className="user_profile">
      <div>
        <h1>{props.name}</h1>
        <h3>Industry: {props.industry}</h3>
        <h2>Summary: {props.summary}</h2>
      </div>

      <section>
        <hr></hr>
        <h1>Information</h1>

        <h2>Skills:</h2>
        <h4>{props.skills}</h4>
        <br></br>

        <h2>Education:</h2>
        <h4>{props.education}</h4>
        <br></br>

        <h2>Experience:</h2>
        <h4>{props.experience}</h4>
        <br></br>
      </section>

      <footer>
        <p>{props.email}</p>
        <p>{props.contact}</p>
        <p>{props.location}</p>
      </footer>
      
      <img src={props.resume_url} className="user_resume"></img>
    </div>
  )
}