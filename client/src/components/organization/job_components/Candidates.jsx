import { React, useState, useEffect } from 'react';
import axios from 'axios';

const Candidates = ({job_id, organization_id, reload}) => {
  const [data, setData] = useState([])

  useEffect(() => {
    axios.get(`http://localhost:8080/api/v1/job_reference/by_job_id/${job_id}`)
    .then((res) => {
      console.log(res)
      setData(res.data)
    }).catch((err) => {
      console.log(err);
    });
  }, [reload])

  console.log("data", data)
  const list = data.map(reference => {
    const candidate = reference.candidate[0];
    const referee = reference.referee[0];
    console.log("candidate name", candidate.name);
    <div>
      <h3> Candidate: </h3>
      <div>{candidate.name}</div>
      <div>{candidate.email}</div>
      <div>{candidate.summary}</div>
      <br/>
      <h3> Referee: </h3>
      <div>{referee.name}</div>
      <div>{referee.email}</div>
    </div>
  })


  return (
    <>
      <div>{list}</div>
    </>
  )
  
};

export default Candidates;