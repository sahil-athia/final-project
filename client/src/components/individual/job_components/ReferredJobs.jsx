import { React, useState, useEffect } from 'react';
import Select from 'react-dropdown-select';
import './Modal.css'
import Modal from './Modal'

const ReferredJobs = (props) => {
  const {show, setShow, options, setOptions, selected, setSelected, jobId, setJobId, orgJobs, setOrgJobs, referredJobs, setReferredJobs, handleAccept} = props;
  
  const jobList = referredJobs.map((job) => (
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
      <button className="btn" type="button" onClick={(e) => {
        e.preventDefault();
        handleAccept(job.id, job.organization_id);
      }}>
        ACCEPT REFERENCE
        </button>
        {/* <Modal show={show} setShow={setShow}>
          This is inside the modal!
          <form onSubmit={(e) => { 
            e.preventDefault();
            console.log(selected);
            handleSubmit(selected)}}>
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
        </Modal> */}
      <hr />
    </div>
  ));

  return jobList;

};

export default ReferredJobs;