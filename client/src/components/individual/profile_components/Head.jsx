export default function Head(props){
  const edit = () => {
    props.onClick(prev => ({
      ...prev,
      head: true
    }))
  }

  return(
    <>
    <button onClick={edit}>
      Edit
    </button>
      <div className="user_header">
        <h1>{props.name}</h1>
        <h3>Industry: {props.industry}</h3>
        <div>
          <h2>Summary: {props.summary}</h2>
          <img src={props.resume_url} className="user_resume"></img>
        </div>
        
      </div>
      </>
  )
}