import { React, useState, useEffect } from 'react';
import Select from 'react-dropdown-select';
import axios from 'axios';
import './Modal.css'
import Modal from './Modal'

const Jobs = ({jobs, job_references}) => {
  const [show, setShow] = useState(false)
  const [options, setOptions] = useState();
  const [selected, setSelected] = useState();
  //Example ids, needs to read from sessions later
  const userId = 1;
  const jobId = 2;

  useEffect(() => {    
    axios.get(`/api/v1/connection/${userId}`)
    .then((res) => {
      console.log(res.data);
      const newOptions = res.data.map((connectionArray) => {
        const {id, name, organization_id} = connectionArray[0];
        return {label: name, referee_id: userId, candidate_id: id, job_id: jobId, organization_id}
      });
      console.log(newOptions)
      setOptions(newOptions)
    })
    .catch((err) => {
      console.log(err);
    });
  }, []);
  console.log(options);

  console.log(selected);
  
  const handelSubmit = (selected) => {
    axios.post('http://localhost:8080/api/v1/shared_job', {selected}, {withCredentials: true})
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
      <button className="btn" type="button" onClick={() => setShow(true)}>
        SHARE
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
                console.log(selected);
              }}
            />
            <button type="submit" >Submit</button>
          </form>
        </Modal>
      <button>REFER</button>
      <hr />
    </div>
  ));

  const organizationJobReferences = job_references.map((job_reference) => (
    <div>
      <div>id: </div>
      <div>{job_reference.id}</div>
      <div>organization_id: </div>
      <div>{job_reference.organization_id}</div>
      <div>referred_by_id: </div>
      <div>{job_reference.referred_by_id}</div>
      <div>referred_by_id: </div>
      <div>{job_reference.referred_by_id}</div>
    </div>
  ));

  return (
    <>
      <article class='jobs'>
      <h1>This is the Jobs component</h1>
        {organizationJobs}
        {organizationJobReferences}
      </article>
    </>
  )
};

export default Jobs;