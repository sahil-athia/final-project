export default function Body(props){
  const edit = () => {
    props.onChange(prev => ({
      ...prev,
      footer: true
    }))
  }
  return(
    <section >
        <hr></hr>
        <button onChange={edit}>
          Edit
        </button>
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
  )
}