export default function Head(props){
  const edit = () => {
    props.onClick(prev => ({
      ...prev,
      head: true
    }))
  }

  return(
    <>
      <div className="user_header">
        <div className="user_summary">
          <h1>{props.name}<hr></hr></h1>
          <h3>Industry: {props.industry}</h3>
          <h5>Summary: {props.summary}</h5>
          {props.onClick && <button onClick={edit}>
            Edit
          </button>}
        </div>

        <div className="image-box">
          <div>
            <img src={props.resume_url} className="stack user_resume"></img>
          </div>
          <div >
            <img src={props.photo} className="stack user_photo"></img>
          </div>
        </div>
      </div>
    </>
  )
}