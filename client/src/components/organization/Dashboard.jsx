import { useState } from 'react'

import Head from "./profile_components/Head"
import EditHead from "./profile_components/EditHead"
import Body from "./profile_components/Body"
import EditBody from "./profile_components/EditBody"
import Footer from "./profile_components/Footer"
import EditFooter from "./profile_components/EditFooter"

import "./dashboard.css"

const Dashboard = ({id, profile, reload}) => {
  const [edit, setEdit] = useState({head: false, body: false, footer: false})

  return (
  <article>
    <div className="user_profile">
      {!edit.head && <Head 
        name={profile.name}
        industry={profile.industry}
        image_url={profile.image_url}
        onClick={setEdit} 
      />}
      {edit.head && <EditHead
        id={id}
        name={profile.name}
        industry={profile.industry}
        image_url={profile.image_url}
        onClick={setEdit} 
        reload={reload}
      />}
      {!edit.body && <Body 
        introduction={profile.introduction}
        onClick={setEdit} 
      />}
      {edit.body && <EditBody
        id={id}
        introduction={profile.introduction}
        onClick={setEdit} 
        reload={reload}
      />}
      {!edit.footer && <Footer 
        website={profile.website}
        email={profile.email}
        location={profile.location}
        onClick={setEdit} 
      />}
      {edit.footer && <EditFooter
        id={id}
        website={profile.website}
        location={profile.location}
        onClick={setEdit} 
        reload={reload}
      />}
    </div>
  </article>
  )
};

export default Dashboard;