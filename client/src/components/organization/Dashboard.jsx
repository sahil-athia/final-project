import { useState } from 'react'

import Body from "./dashboard_components/Body"
import EditBody from "./dashboard_components/EditBody"
import "./dashboard.css"

const Dashboard = ({profiles}) => {
  const [edit, setEdit] = useState(false)

  //Hardcode for now, needs org auth
  const organization_id = 1;
  const profile = profiles.filter(profile => profile.id === organization_id)[0];
  
  return (
  <article>
    <div class='profile'>
    </div>
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
        name={profile.name}
        industry={profile.industry}
        website={profile.website}
        email={profile.email}
        location={profile.location}
        introduction={profile.introduction}
        image_url={profile.image_url}
        onClick={setEdit} 
      />}
    </div>
  </article>
  )
};

export default Dashboard;