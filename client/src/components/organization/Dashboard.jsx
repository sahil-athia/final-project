import { useState } from 'react'

import Head from "./profile_components/Head"
import EditHead from "./profile_components/EditHead"
import Body from "./profile_components/Body"
import EditBody from "./profile_components/EditBody"
import Footer from "./profile_components/Footer"
import EditFooter from "./profile_components/EditFooter"

import "./dashboard.css"

const Dashboard = ({profile, reload}) => {
  const [edit, setEdit] = useState({head:false, body:false, footer:false})

  return (
  <article>
    <div className="user_profile">
      {!edit && <Head 
        name={profile.name}
        industry={profile.industry}
        image_url={profile.image_url}
        onClick={setEdit} 
      />}
      {edit && <EditHead
        name={profile.name}
        industry={profile.industry}
        image_url={profile.image_url}
        onClick={setEdit} 
        reload={reload}
      />}
      {!edit && <Body 
        introduction={profile.introduction}
        onClick={setEdit} 
      />}
      {edit && <EditBody
        introduction={profile.introduction}
        onClick={setEdit} 
        reload={reload}
      />}
      {!edit && <Footer 
        website={profile.website}
        email={profile.email}
        location={profile.location}
        onClick={setEdit} 
      />}
      {edit && <EditFooter
        website={profile.website}
        email={profile.email}
        location={profile.location}
        onClick={setEdit} 
        reload={reload}
      />}
    </div>
  </article>
  )
};

export default Dashboard;