import { useState } from 'react'

import Body from "./dashboard_components/Body"
import EditBody from "./dashboard_components/EditBody"
import "./dashboard.css"

const Dashboard = ({profile, reload}) => {
  const [edit, setEdit] = useState(false)

  return (
  <article>
    <div className="organization_profile">
      {!edit && <Body 
        name={profile.name}
        industry={profile.industry}
        website={profile.website}
        email={profile.email}
        location={profile.location}
        introduction={profile.introduction}
        image_url={profile.image_url}
        onClick={setEdit} 
      />}
      {edit && <EditBody
        id={profile.id}
        name={profile.name}
        industry={profile.industry}
        website={profile.website}
        email={profile.email}
        location={profile.location}
        introduction={profile.introduction}
        image_url={profile.image_url}
        onClick={setEdit} 
        reload={reload}
      />}
    </div>
  </article>
  )
};

export default Dashboard;