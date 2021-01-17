export default function Head(props){
  const edit = () => {
    props.onChange(prev => ({
      ...prev,
      footer: true
    }))
  }
  
  return(
    <>
    <button onChange={edit}>
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