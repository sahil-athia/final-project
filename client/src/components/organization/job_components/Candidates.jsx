import { React, useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';

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
    return(<div>
      <h3> Candidate: </h3>
      <div>{candidate.name}</div>
      <div>{candidate.email}</div>
      <div>{candidate.summary}</div>
      <br/>
      <h3> Referee: </h3>
      <div>{referee.name}</div>
      <div>{referee.email}</div>
    </div>)
  })

  let itemsToRender;
  if (list.length) {
    itemsToRender = list;
  } else {
    itemsToRender = <p>No references yet.</p>;
  }

  return (
    <>
      {!show && <button onClick={handelClick}>Show Reference</button>}
      {show && <> 
        <button onClick={handelClick}>Hide Reference</button>
        {itemsToRender}
      </>}
    </>
  )
  
};

export default Candidates;