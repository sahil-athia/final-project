const Body = (props) => {
  const { name, industry, website, email, location, introduction, image_url, onClick } = props; 
//When org_authentication available, replace onClick to isLoggedIn!!!
  return(
    <>
    {onClick && <button onClick={() => onClick(true)}>
      Edit
    </button>}
      <div className="organization_profile_body">
        <h1>{name}</h1>
        <h3>Industry: {industry}</h3>
        <h3>Website: {website}</h3>
        <h3>Email: {email}</h3>
        <h3>Location: {location}</h3>
        <div>
          <h2>Introduction: {introduction}</h2>
          <img src={image_url} className="organization_image"></img>
        </div>
        
      </div>
      </>
  )
};

export default Body;