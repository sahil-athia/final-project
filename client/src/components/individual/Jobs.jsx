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
  const [buttonContent, setButtonContent] = useState('Accept Reference');

  console.log(buttonContent);
  useEffect(() => {    
    Promise.all([
      axios.get(`http://localhost:8080/api/v1/job/by_organization_id/${organization_id}`),
      axios.get(`http://localhost:8080/api/v1/job_reference/${user_id}`)
      // axios.get(`http://localhost:8080/api/v1/connection/${user_id}`)
    ]).then((all) => {
      console.log(all);
      setOrgJobs(all[0].data);
      setReferredJobs(all[1].data[0]);
      // Hardcode for now, need to populate database
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
  console.log(orgJobs);
  console.log(referredJobs);
  console.log(jobId);
  console.log(options);
  console.log(selected);
  
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

  console.log(acceptedJobs);
  const acceptedJobList = acceptedJobs.map((job) => (
  <div>
    <div>id: </div>
    <div>{job.id}</div>
    <div>title: </div>
    <div>{job.title}</div>
    <div>description: </div>
    <div>{job.description}</div>
    <div>salary: </div>
    <div>{job.salary}</div>
    <div>organization_id: </div>
    <div>{job.organization_id}</div>
    <hr/>
  </div>
  ));

  return (
    <>
      <article class='jobs'>
      <h1>This is the Jobs component</h1>
      <h2>Jobs you have been referred to</h2> 
        <ReferredJobs
          referredJobs={referredJobs}
          handleAccept={handleAccept}
          buttonContent={buttonContent}
          setButtonContent={setButtonContent}
        />
      <h2>Job references you have accepted</h2> 
      {acceptedJobList}
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
      </article>
    </>
  )
};

export default Jobs;