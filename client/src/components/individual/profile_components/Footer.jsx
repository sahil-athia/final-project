export default function EditFooter(props){
  const edit = () => {
    props.onClick(prev => ({
      ...prev,
      footer: true
    }))
  }
  return(
    <footer>
        <hr></hr>
        {props.onClick && <button onClick={edit}>
          Edit
        </button>}
        <p>{props.email}</p>
        <p>{props.contact}</p>
        <p>{props.location}</p>
      </footer>
  )
}