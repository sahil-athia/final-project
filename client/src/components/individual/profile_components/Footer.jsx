export default function EditFooter(props){
  const edit = () => {
    props.onChange(prev => ({
      ...prev,
      footer: true
    }))
  }
  return(
    <footer>
        <hr></hr>
        <button onChange={edit}>
          Edit
        </button>
        <p>{props.email}</p>
        <p>{props.contact}</p>
        <p>{props.location}</p>
      </footer>
  )
}