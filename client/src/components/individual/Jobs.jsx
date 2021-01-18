import { React, useState, useEffect } from 'react';
import Select from 'react-dropdown-select';
import axios from 'axios';
import './job_components/Modal.css'
import Modal from './job_components/Modal'
import ReferredJobs from './job_components/ReferredJobs'
import OrganizationJobs from './job_components/OrganizationJobs'

const Jobs = ({user_id, organization_id}) => {
  const [show, setShow] = useState(false)
  const [options, setOptions] = useState([]);
  const [selected, setSelected] = useState([]);
  const [jobId, setJobId] = useState(null);
  const [orgJobs, setOrgJobs] = useState([]);
  const [referredJobs, setReferredJobs] = useState([]);

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
    })
    .catch((err) => {
      console.log(err);
    });
  };

  return (
    <>
      <article class='jobs'>
      <h1>This is the Jobs component</h1>
      <h2>Jobs you have been referred to</h2> 
        <ReferredJobs
          show={show}
          setShow={setShow}
          options={options}
          setOptions={setOptions}
          selected={selected}
          setSelected={setSelected}
          jobId={jobId}
          setJobId={setJobId}
          orgJobs={orgJobs}
          setOrgJobs={setOrgJobs}
          referredJobs={referredJobs}
          setReferredJobs={setReferredJobs}
          handleAccept={handleAccept}
        />
      <h2>Jobs From your employer</h2>
        <OrganizationJobs
        show={show}
        setShow={setShow}
        options={options}
        setOptions={setOptions}
        selected={selected}
        setSelected={setSelected}
        jobId={jobId}
        setJobId={setJobId}
        orgJobs={orgJobs}
        setOrgJobs={setOrgJobs}
        referredJobs={referredJobs}
        setReferredJobs={setReferredJobs}
        handleSubmit={handleSubmit}
        />
      </article>
    </>
  )
};

export default Jobs;