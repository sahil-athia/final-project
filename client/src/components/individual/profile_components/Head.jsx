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
          <h3><em>{props.industry}</em></h3>
          <h5> {props.summary}</h5>
          {props.onClick && <button onClick={edit}>
            Edit
          </button>}
        </div>

        <div className="image-box">
          <div>
            <img src={props.resume_url || "https://cdn.corporatefinanceinstitute.com/assets/investment-banking-resume-template-example.png"} className="stack user_resume" alt="Your Resume"></img>
          </div>
          <div >
            <img src={props.photo || "https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png"} className="stack user_photo" alt="Your Profile Photo"></img>
          </div>
        </div>
      </div>
    </>
  )
}