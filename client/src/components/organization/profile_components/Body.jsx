const Body = ( {introduction, onClick} ) => {

  const edit = () => {
    onClick(prev => ({
      ...prev,
      body: true
    }))
  }
  return(
    <div className="body">
    <section className="body-content">
        <div className="info-box introduction">
          <h2>Introduction:</h2>
          <br></br>
          <h4>{introduction}</h4>
        </div>
      </section>
      {onClick && <button onClick={edit} className="edit-button-body">
          Edit
        </button>}
    </div>
  )
};

export default Body;