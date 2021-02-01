import { React, useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import Reference from '../../..//icons/Reference.png';
import Close from '../../..//icons/Close.png';

const Candidates = ({job_id,  hideCandidates}) => {
  const [data, setData] = useState([])
  useEffect (() => {
    axios.get(`/api/v1/job_reference/by_job_id/${job_id}`)
    .then((res) => {
      setData(res.data);
    }).catch((err) => {
      console.log(err);
    });
  }, []);

  const list = data.map((reference, index) => {
    const candidate = reference.candidate[0];
    const referee = reference.referee[0];
    return(
    <div className="reference-card" key={index}>
      <div className="reference-card-body">
        <div className="reference-card-candidate">
          <div className="reference-card-line">Name: {candidate.name}</div>
          <div className="reference-card-line">Email: {candidate.email}</div>
        </div>
        <div className="reference-card-referee">
          <div className="reference-card-line">Referred by: {referee.name}</div>
          <div className="reference-card-line">Email: {referee.email}</div>
        </div>
      </div>
      <div className="reference-card-actions">
        <Link
          to={{
            pathname: "/organization/user_page",
            hash: `#${candidate.id}` 
          }}>
          <img className="show-reference-btn" src={Reference} alt="Reference"/>
        </Link>
        <button className="close-reference-btn" onClick={hideCandidates}>
          <img className="close-reference-btn" src={Close} alt="Close"/>
        </button>
      </div>
    </div>
    )
  })

  let itemsToRender;
  if (list.length) {
    itemsToRender = list;
  } else {
    itemsToRender = (<>
      <div className="reference-card2">
        <div className="reference-card-line2">No references yet.</div>
      </div>
      <div className="reference-card-actions2">
        <img className="close-reference-btn2" onClick={hideCandidates} src={Close} alt="Close"/>
      </div>
    </>);
  }

  return (
    <>
      {itemsToRender}
    </>
  )
  
};

export default Candidates;