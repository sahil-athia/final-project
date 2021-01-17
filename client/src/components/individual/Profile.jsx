// import "./profile.scss"
export default function Profile(props){
  return (
    <div className="user_profile">
      <h1>{props.name}</h1>
      <h3>{props.industry}</h3>

      <h2>Summary</h2>
      <h2>Skills</h2>
      <h2>Education</h2>
      <h2>Experience</h2>

      <footer>
        <p>{props.email}</p>
        <p>Contact</p>
        <p>Location</p>
      </footer>
      
      <img src={props.resume_url} className="user_resume"></img>
    </div>
  )
}