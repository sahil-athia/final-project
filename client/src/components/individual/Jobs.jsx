import { React, useState, useEffect } from 'react';
import Select from 'react-dropdown-select';
import axios from 'axios';
import './Modal.css'
import Modal from './Modal'

const Jobs = ({user_id, organization_id}) => {
  const [show, setShow] = useState(false)
  const [options, setOptions] = useState();
  const [selected, setSelected] = useState();
  const [jobId, setJobId] = useState();
  const [jobs, setJobs] = useState();
  
  useEffect(() => {    
    Promise.all([
      axios.get(`http://localhost:8080/api/v1/job/by_organization_id/${organization_id}`),
      axios.get(`http://localhost:8080/api/v1/shared_job/${user_id}`)
      // axios.get(`http://localhost:8080/api/v1/connection/${user_id}`)
    ]).then((all) => {
      console.log(all);
      setJobs(all[0].data);
    // axios.get(`http://localhost:8080/api/v1/job/by_organization_id/${organization_id}`)
    // .then((res) => {
    //   console.log(res);
    //   setJobs(res.data);
      // Hardcode for now, need to populate database
      // const newOptions = all[1].data.map((connectionArray) => {
      //   const {id, name, organization_id} = connectionArray[0];
      //   return {label: name, referee_id: user_id, candidate_id: id, job_id: jobId, organization_id}
      // });
      const newOptions = [
        {label: 'name1', referee_id: user_id, candidate_id: 2, job_id: jobId, organization_id},
        {label: 'name2', referee_id: user_id, candidate_id: 3, job_id: jobId, organization_id},
        {label: 'name3', referee_id: user_id, candidate_id: 4, job_id: jobId, organization_id}
      ];
      console.log(newOptions)
      setOptions(newOptions)

    }).catch((err) => {
      console.log(err);
    });;

    // axios.get(`http://localhost:8080/api/v1/shared_job/${user_id}`)
    // .then((res) => {
    //   console.log(res);
    // }).catch((err) => {
    //   console.log(err);
    // });;

  }, []);
  console.log(jobs)
  console.log(jobId)
  console.log(options);
  console.log(selected);
  
  const handelSubmit = (selected) => {
    const selectedWithId = {...selected[0], job_id: jobId};
    console.log(selectedWithId);
    axios.post('http://localhost:8080/api/v1/shared_job', {selectedWithId}, {withCredentials: true})
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
  };

  const organizationJobs = jobs.map((job) => (
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
      <button className="btn" type="button" onClick={() => {
        setShow(true);
        setJobId(job.id);
      }}>
        SHARE AND REFER
        </button>
        <Modal show={show} setShow={setShow}>
          This is inside the modal!
          <form onSubmit={(e) => { 
            e.preventDefault();
            console.log(selected);
            handelSubmit(selected)}}>
            <Select
              options={options}
              values={[]}
              name="select"
              onChange={(value) => {
                console.log(value);
                setSelected(value);
              }}
            />
            <button type="submit" >Submit</button>
          </form>
        </Modal>
      <hr />
    </div>
  ));

  return (
    <>
      <article class='jobs'>
      <h1>This is the Jobs component</h1>
      <h2>Jobs you have been referred to</h2> 
      
      <h2>Jobs From your employer</h2>
        {organizationJobs}
      </article>
    </>
  )
};

export default Jobs;