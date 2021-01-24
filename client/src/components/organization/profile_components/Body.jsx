const Body = ( {introduction, onClick} ) => {

  const edit = () => {
    onClick(prev => ({
      ...prev,
      body: true
    }))
  }
  return(
    <div className="org-body">
    <section className="body-content">
        <blockquote>
          <h4>
            {introduction}
           </h4>
        </blockquote>
      </section>
      {onClick && <button onClick={edit} className="edit-button-body">
          Edit
        </button>}
    </div>
  )
};

export default Body;

