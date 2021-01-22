export default function EditFooter(props){
  const edit = () => {
    props.onClick(prev => ({
      ...prev,
      footer: true
    }))
  }
  return(
    <footer className="profile-footer">
      <div>
        <h5>{props.email}</h5>
        <h5>{props.contact}</h5>
        <h5>{props.location}</h5>
      </div>
      {props.onClick && <button onClick={edit}>
        Edit
      </button>}
    </footer>
  )
}