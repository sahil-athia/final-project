const Head = ({ name, industry, image_url, onClick }) => {
  const edit = () => {
    onClick(prev => ({
      ...prev,
      head: true
    }))
  };

  return(
    <>
      <div className="org_header">
        <div className="org_summary">
          <h1 className="org_name">{name}<hr></hr></h1>
          <h3><em>{industry}</em></h3>
          {onClick && <button onClick={edit}>
            Edit
          </button>}
        </div>

        <div className="image-box">
          <img src={image_url || "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTN8fGJ1c2luZXNzfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"} className="stack org_pic" alt="Your Resume"></img>
        </div>
      </div>
    </>
  )
};

export default Head;