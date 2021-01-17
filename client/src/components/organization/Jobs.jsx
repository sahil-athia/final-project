import { React, useState, useEffect } from 'react';
import Select from 'react-dropdown-select';
import axios from 'axios';
import './Modal.css'
import Modal from './Modal'

const Jobs = ({jobs, job_references}) => {
  const [show, setShow] = useState(false)
  
  const userId = 1;
  const options = [{label: "1", value: "1"}, {label: "2", value: "2"}];
  
  const [sender, setSenderState] = useState();

  useEffect(() => {
    axios.get(`/api/v1/connection/sender_id/${userId}`)
    .then((res) => {
      console.log(res.data);
    }).catch((err) => {
    console.log(err);
    });
  }, []);
  // useEffect(() => {
  //   axios.get('/api/v1/connection')
  //   .then((res) => {
  //     // console.log(res.data);
  //     let result = [];
  //     for (let i = 0; i < res.data.length; i++) {
  //       if (res.data[i]['sender_id'] === userId) {
  //         result.push(res.data[i]['recipient_id']);
  //       }
  //     };
  //     console.log(result);
  //   }).catch((err) => {
  //   console.log(err);
  //   });
  // }, []);

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
          <form>
            <Select
              options={options}
              values={[]}
              name="select"
              onChange={(value) => console.log(value)}
            />
            <button>Send</button>
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