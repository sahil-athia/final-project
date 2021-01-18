import { React, useState, useEffect } from 'react';
import Select from 'react-dropdown-select';
import './Modal.css'
import Modal from './Modal'

const OrganizationJobs = (props) => {
  const {show, setShow, options, setOptions, selected, setSelected, jobId, setJobId, orgJobs, setOrgJobs, referredJobs, setReferredJobs, handelSubmit} = props;
  
  const organizationJobs = orgJobs.map((job) => (
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

  return organizationJobs;

};

export default OrganizationJobs;