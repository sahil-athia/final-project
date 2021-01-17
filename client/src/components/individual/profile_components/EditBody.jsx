export default function EditBody(props){
  const done = () => {
    props.onClick(prev => ({
      ...prev,
      body: false
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