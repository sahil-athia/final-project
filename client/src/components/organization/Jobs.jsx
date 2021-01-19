import { React, useState, useEffect } from 'react';
import axios from 'axios';
import CreateJobs from './job_components/CreateJobs';
import CurrentJobs from './job_components/CurrentJobs';

const Jobs = ({organization_id, current_jobs}) => {

  return (
    <>
      <article class='jobs'>
      <h1>This is the Jobs component</h1>
      <CurrentJobs
        current_jobs={current_jobs}
      />
      <CreateJobs
      />
      </article>
    </>
  )

  // useEffect(() => {    
  //   axios.get(`/api/v1/connection/${userId}`)
  //   .then((res) => {
  //     console.log(res.data);
  //     const newOptions = res.data.map((connectionArray) => {
  //       const {id, name, organization_id} = connectionArray[0];
  //       return {label: name, referee_id: userId, candidate_id: id, job_id: jobId, organization_id}
  //     });
  //     console.log(newOptions)
  //     setOptions(newOptions)
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //   });
  // }, []);
  // console.log(jobId)
  // console.log(options);
  // console.log(selected);
  
  // const handelSubmit = (selected) => {
  //   const selectedWithId = {...selected[0], job_id: jobId};
  //   console.log(selectedWithId);
  //   axios.post('http://localhost:8080/api/v1/shared_job', {selectedWithId}, {withCredentials: true})
  //   .then((res) => {
  //     console.log(res);
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //   });
  // };


  // const organizationJobReferences = job_references.map((job_reference) => (
  //   <div>
  //     <div>id: </div>
  //     <div>{job_reference.id}</div>
  //     <div>organization_id: </div>
  //     <div>{job_reference.organization_id}</div>
  //     <div>referred_by_id: </div>
  //     <div>{job_reference.referred_by_id}</div>
  //     <div>referred_by_id: </div>
  //     <div>{job_reference.referred_by_id}</div>
  //   </div>
  // ));

  
};

export default Jobs;