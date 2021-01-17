import "./profile.css"
import Head from "./profile_components/Head"
import EditHead from "./profile_components/Head"
import Body from "./profile_components/Body"
import EditBody from "./profile_components/EditBody"
import Footer from "./profile_components/Footer"
import EditFooter from "./profile_components/EditFooter"

import { useState } from 'react'

export default function Profile(props){
  const [edit, setEdit] = useState({head:false, body:false, footer:false})
  console.log(edit)
  return (
    <div className="user_profile">
      {!edit.head && <Head 
        name={props.name}
        industry={props.industry}
        summary={props.summary}
        resume_url={props.resume_url}
        onClick={setEdit}
      />}
      {edit.head}

      {!edit.body && <Body 
        skills={props.skills}
        education={props.education}
        experience={props.experience}
        onClick={setEdit}
      />}
      {edit.body}

      {!edit.footer && <Footer 
        email={props.email}
        contact={props.contact}
        location={props.location}
        onClick={setEdit}
      />}
      {edit.footer}
    </div>
  )
}