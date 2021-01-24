const EditFooter = ({ website, email, location, onClick }) => {
  const edit = () => {
    onClick(prev => ({
      ...prev,
      footer: true
    }))
  }
  return(
    <footer className="profile-footer">
      <div>
        <h5>{website}</h5>
        <h5>{email}</h5>
        <h5>{location}</h5>
      </div>
      {onClick && <button onClick={edit}>
        Edit
      </button>}
    </footer>
  )
};

export default EditFooter;