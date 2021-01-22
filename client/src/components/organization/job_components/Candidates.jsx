import { React, useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import Reference from '../../..//icons/Reference.png';

const Candidates = ({job_id, organization_id, hideCandidates}) => {
  const [data, setData] = useState([])

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
    <div className="reference-card" key={candidate.id}>
      <div className="reference-card-candidate">
        <h4>Candidate Name: {candidate.name}</h4>
        <p>Email: {candidate.email}</p>
        <p>Summary: {candidate.summary}</p>
        {/* <div>Skills: {candidate.skills}</div>
        <div>Education: {candidate.education}</div>
        <div>Experience: {candidate.experience}</div>
        <div>Location: {candidate.location}</div>
        <div>Contact: {candidate.contact}</div>
        <img src={candidate.resume_url} className="user_resume"></img> */}
      </div>
      <div className="reference-card-referee">
        <h4> Referred by: {referee.name}</h4>
        <p>Email: {referee.email}</p>
      </div>
    </div>
    )
  })

  let itemsToShow;
  if (list.length) {
    itemsToShow = list;
  } else {
    itemsToShow = <p>No references yet.</p>;
  }

  return (
    <>
        {itemsToShow}
        <button className="reference-btn" onClick={hideCandidates}>
          <img className="reference-btn" src={Reference} alt="Reference"/>
          Hide Reference
        </button>
    </>
  )
  
};

export default Candidates;