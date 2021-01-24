const Head = ({ name, industry, image_url, onClick }) => {
  const edit = () => {
    onClick(prev => ({
      ...prev,
      head: true
    }))
  };

  return(
    <>
      <div className="user_header">
        <div className="user_summary">
          <h1>{name}<hr></hr></h1>
          <h3><em>{industry}</em></h3>
          {onClick && <button onClick={edit}>
            Edit
          </button>}
        </div>

        <div className="image-box">
          <img src={image_url} className="stack user_resume" alt="Your Resume"></img>
        </div>
      </div>
    </>
  )
};

export default Head;