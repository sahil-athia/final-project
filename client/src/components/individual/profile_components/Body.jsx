export default function Body(props){
  const edit = () => {
    props.onClick(prev => ({
      ...prev,
      body: true
    }))
  }
  return(
    <div className="body">
    <section className="body-content">
        <div className="info-box skills">
          <h2>Skills:</h2>
          <br></br>
          <h4>{props.skills}</h4>
        </div>

        <div className="info-box education">
          <h2>Education:</h2>
          <br></br>
          <h4>{props.education}</h4>
        </div>

        <div className="info-box experience">
          <h2>Experience:</h2>
          <br></br>
          <h4>{props.experience}</h4>
        </div>
      </section>
      {props.onClick && <button onClick={edit} className="edit-button-body">
          Edit
        </button>}
    </div>
  )
}