export default function EditFooter(props){
  const done = () => {
    props.onClick(prev => ({
      ...prev,
      footer: false
    }))
  }
  
  return(
    <div>
      EDIT SECTION
      <br/>
      <button onClick={done}>
        Done
      </button>
    </div>
  )
}