import { React, useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import Reference from '../../..//icons/Reference.png';

const Candidates = ({job_id, organization_id}) => {
  const [data, setData] = useState([])
  const [show, setShow] = useState(false);

  const handelClick = () => {
    setShow(currentState => !currentState)
  };

  useEffect (() => {
    axios.get(`http://localhost:8080/api/v1/job_reference/by_job_id/${job_id}`)
    .then((res) => {
      setData(res.data)
    }).catch((err) => {
      console.log(err);
    });
  }, []);

  const list = data.map(reference => {
    const candidate = reference.candidate[0];
    const referee = reference.referee[0];
    return(
    <div key={candidate.id}>
      <h3> Referee: </h3>
      <div>Name: {referee.name}</div>
      <div>Email: {referee.email}</div>
      <br/>
      <h3> Candidate: </h3>
      <div>Name: {candidate.name}</div>
      <div>Email: {candidate.email}</div>
      <div>Summary: {candidate.summary}</div>
      <div>Skills: {candidate.skills}</div>
      <div>Education: {candidate.education}</div>
      <div>Experience: {candidate.experience}</div>
      <div>Location: {candidate.location}</div>
      <div>Contact: {candidate.contact}</div>
      <img src={candidate.resume_url} className="user_resume"></img>
      <hr/>
    </div>
    )
  })

  let itemsToRender;
  if (list.length) {
    itemsToRender = list;
  } else {
    itemsToRender = <p>No references yet.</p>;
  }

  return (
    <>
      {!show &&
        <button className="reference-btn" onClick={handelClick}>
          <img className="reference-btn" src={Reference} alt="Reference"/>
          Show Reference
        </button>
      }
      {show && <> 
        <button className="reference-btn" onClick={handelClick}>
          <img className="reference-btn" src={Reference} alt="Reference"/>
          Hide Reference
        </button>
        {itemsToRender}
      </>}
    </>
  )
  
};

export default Candidates;