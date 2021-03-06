import "./profile.scss"
import Head from "./profile_components/Head"
import EditHead from "./profile_components/EditHead"
import Body from "./profile_components/Body"
import EditBody from "./profile_components/EditBody"
import Footer from "./profile_components/Footer"
import EditFooter from "./profile_components/EditFooter"

import { useState } from 'react'

export default function Profile(props){
  const [edit, setEdit] = useState({head:false, body:false, footer:false})
  

  return (
    <div className="user_profile">
      {!edit.head && <Head 
        name={props.name}
        industry={props.industry}
        summary={props.summary}
        resume_url={props.resume_url}
        photo={props.photo}
        onClick={setEdit}
      />}
      {edit.head && <EditHead 
        user_id={props.user_id}
        summary={props.summary}
        resume_url={props.resume_url}
        industry={props.industry}
        photo={props.photo}
        onClick={setEdit} 
        reload={props.reload}
      />}

      {!edit.body && <Body 
        skills={props.skills}
        education={props.education}
        experience={props.experience}
        onClick={setEdit}
      />}
      {edit.body && <EditBody
        user_id={props.user_id}
        skills={props.skills}
        education={props.education}
        experience={props.experience}
        onClick={setEdit} 
        reload={props.reload}
      />}

      {!edit.footer && <Footer 
        email={props.email}
        contact={props.contact}
        location={props.location}
        onClick={setEdit}
      />}
      {edit.footer && <EditFooter
        user_id={props.user_id}
        contact={props.contact}
        location={props.location}
        onClick={setEdit} 
        reload={props.reload}
      />}
    </div>
  )
}