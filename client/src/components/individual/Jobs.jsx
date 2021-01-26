import { React, useState, useEffect } from 'react';
import axios from 'axios';
import ReferredJobs from './job_components/ReferredJobs'
import OpenPositions from './job_components/OpenPositions'

const Jobs = ({user_id, organization_id}) => {
  const [options, setOptions] = useState([]);
  const [orgJobs, setOrgJobs] = useState([]);
  const [referredJobs, setReferredJobs] = useState([]);
  const headerStyle = {
    color: "rgb(150, 150, 150)",
    fontSize: "250%",
    fontFamily: "Garamond, serif",
    fontWeight: "100"
  }

  useEffect(() => {    
    Promise.all([
      axios.get(`http://localhost:8080/api/v1/job/by_organization_id/${organization_id}`),
      axios.get(`http://localhost:8080/api/v1/job_reference/by_user_id/${user_id}`),
      axios.get(`http://localhost:8080/api/v1/connection/${user_id}`)
    ]).then((all) => {
      setOrgJobs(all[0].data);
      setReferredJobs(all[1].data);
      
      const newOptions = all[2].data.map((connectionArray) => {
        const {id, name} = connectionArray[0];
        return {candidate_name: name, referred_by_id: user_id, candidate_id: id, accepted: false}
      });
      setOptions(newOptions)

    }).catch((err) => {
      console.log(err);
    });;

  }, []);
  
  const handleSubmit = (selected) => {
    axios.post('http://localhost:8080/api/v1/job_reference', {selected}, {withCredentials: true})
    .then((res) => {
    })
    .catch((err) => {
      console.log(err);
    });
  };

  const handleAccept = (reference_id) => {
    const jobInfo = {"id": reference_id, "accepted": true};
    axios.put(`http://localhost:8080/api/v1/job_reference/${reference_id}`, {jobInfo}, {withCredentials: true})
    .then((res) => {
    })
    .catch((err) => {
      console.log(err);
    });
  };

  return (
    <>
      <article className='jobs'>
      <div style={headerStyle}>Jobs Referred To You</div>
      <div> 
          <ReferredJobs
            referredJobs={referredJobs}
            handleAccept={handleAccept}
          />
      </div> 
      { orgJobs && <div>
        <OpenPositions
        options={options}
        orgJobs={orgJobs}
        handleSubmit={handleSubmit}
        />
     </div>} 
      </article>
    </>
  )
};

export default Jobs;