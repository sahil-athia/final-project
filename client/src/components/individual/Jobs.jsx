import { React, useState, useEffect } from 'react';
import axios from 'axios';
import ReferredJobs from './job_components/ReferredJobs'
import OrganizationJobs from './job_components/OrganizationJobs'

const Jobs = ({user_id, organization_id}) => {
  const [show, setShow] = useState(false)
  const [options, setOptions] = useState([]);
  const [selected, setSelected] = useState([]);
  const [jobId, setJobId] = useState(null);
  const [orgJobs, setOrgJobs] = useState([]);
  const [referredJobs, setReferredJobs] = useState([]);
  const [acceptedJobs, setAcceptedJobs] = useState([]);

  useEffect(() => {    
    Promise.all([
      axios.get(`http://localhost:8080/api/v1/job/by_organization_id/${organization_id}`),
      axios.get(`http://localhost:8080/api/v1/job_reference/${user_id}`)
      // axios.get(`http://localhost:8080/api/v1/connection/${user_id}`)
    ]).then((all) => {
      setOrgJobs(all[0].data);
      setReferredJobs(all[1].data);

      //Hard code for now, need connections data
      // const newOptions = all[2].data.map((connectionArray) => {
      //   const {id, name, organization_id} = connectionArray[0];
      //   return {label: name, referred_by_id: user_id, candidate_id: id, job_id: jobId, organization_id, accepted: false}
      // });
      const newOptions = [
        {label: 'name1', referred_by_id: user_id, candidate_id: 2, job_id: jobId, organization_id, accepted: false},
        {label: 'name2', referred_by_id: user_id, candidate_id: 3, job_id: jobId, organization_id, accepted: false},
        {label: 'name3', referred_by_id: user_id, candidate_id: 4, job_id: jobId, organization_id, accepted: false}
      ];
      setOptions(newOptions)

    }).catch((err) => {
      console.log(err);
    });;

  }, []);
  
  const handleSubmit = (selected) => {
    const selectedWithId = {...selected[0], job_id: jobId};
    axios.post('http://localhost:8080/api/v1/job_reference', {selectedWithId}, {withCredentials: true})
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
  };

  const handleAccept = (job_id, organization_id) => {
    const jobInfo = {job_id, organization_id};
    axios.post('http://localhost:8080/api/v1/job_reference/job', {jobInfo}, {withCredentials: true})
    .then((res) => {
      console.log(res);
      axios.get(`http://localhost:8080/api/v1/job/${job_id}`)
      .then((res) => {
        console.log(res);
        setAcceptedJobs(prev => [...prev, res.data]);
      })
      .catch((err) => {
        console.log(err);
      });
    })
    .catch((err) => {
      console.log(err);
    });
  };

  const acceptedJobList = acceptedJobs.map((job) => (
  <div key={job.id}>
    <div>Title: {job.title}</div>
    <div>Description: {job.description}</div>
    <div>Salary: {job.salary}</div>
    <hr/>
  </div>
  ));

  return (
    <>
      <article className='jobs'>
      <h1>This is the Jobs component</h1>
      <h2>Jobs you have been referred to</h2>
      <div> 
          <ReferredJobs
            referredJobs={referredJobs}
            handleAccept={handleAccept}
          />
      </div> 
      <div>
        <h2>Job references you have accepted</h2> 
        <div>{acceptedJobList}</div>
      </div> 
      <div>
      <h2>Jobs From your employer</h2>
        <OrganizationJobs
        show={show}
        setShow={setShow}
        options={options}
        selected={selected}
        setSelected={setSelected}
        setJobId={setJobId}
        orgJobs={orgJobs}
        handleSubmit={handleSubmit}
        />
     </div> 
      </article>
    </>
  )
};

export default Jobs;