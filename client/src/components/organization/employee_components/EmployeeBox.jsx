import axios from "axios";
import { useState } from 'react'
import Status from '../../individual/small_components/Status.jsx'
const EmployeeBox = (props) => {
  const { organization_id, id, name, email, industry, reload, localReload, photo_url } = props;
  const [loading, setLoading] = useState(false)
  const centerStyle = {marginTop: "auto", marginBottom: "auto"}


  const verifyEmployee = () => {
    setLoading(true)
    const data = { "id": id, "organization_id": organization_id, "verified": true };

    setTimeout(() => {
      axios.put(`/api/v1/user/${id}`, {data}, {withCredentials: true})
      .then(() => {
        localReload(currentState => !currentState)
        reload(currentState => !currentState)
      })
      .then(() => setLoading(false))
      .catch((err) => {
        console.log(err);
      });
    }, 1000)

  }

  return(
    <div className="user-box">
    {loading === true 
    ? <Status message="Adding"/> 
    : <>
        <div className="user-information">
          <img src={photo_url || "https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png"} alt="Your Profile Pic"></img>

          <div className="user-details">
            <h2>{name}</h2>
            <h4><em>{industry}</em></h4>
            <p>{email}</p>
          </div>
        </div>
        <div className="options" style={centerStyle}>
        <svg style={{width:"2.5em", height:"2.5em", margin:"1em", marginTop:"2.5em"}} viewBox="0 0 24 24" onClick={verifyEmployee}>
        <path fill="currentColor" d="M23 12L20.6 9.2L20.9 5.5L17.3 4.7L15.4 1.5L12 3L8.6 1.5L6.7 4.7L3.1 5.5L3.4 9.2L1 12L3.4 14.8L3.1 18.5L6.7 19.3L8.6 22.5L12 21L15.4 22.5L17.3 19.3L20.9 18.5L20.6 14.8L23 12M18.7 16.9L16 17.5L14.6 19.9L12 18.8L9.4 19.9L8 17.5L5.3 16.9L5.5 14.1L3.7 12L5.5 9.9L5.3 7.1L8 6.5L9.4 4.1L12 5.2L14.6 4.1L16 6.5L18.7 7.1L18.5 9.9L20.3 12L18.5 14.1L18.7 16.9M16.6 7.6L18 9L10 17L6 13L7.4 11.6L10 14.2L16.6 7.6Z" />
        </svg>
        <svg style={{width:"2.5em", height:"2.5em", margin:"1em", marginTop:"2.5em"}} viewBox="0 0 24 24" xlinkHref={`/organization/user_page#${id}`}>
          <a href={`/organization/user_page#${id}`}>
            <path fill="currentColor" d="M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17M12,4.5C7.14,4.5 2.78,7.5 1,12C3.39,18.08 10.25,21.06 16.33,18.67C19.38,17.47 21.8,15.06 23,12C21.22,7.5 16.86,4.5 12,4.5M7,22H9V24H7V22M11,22H13V24H11V22M15,22H17V24H15V22Z" />
          </a>
        </svg>
        </div>
        </>
      }
  </div>
  )
};

export default EmployeeBox;