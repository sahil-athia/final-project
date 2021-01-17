import { useState, useEffect } from "react";
import './Modal.css'
import Modal from './Modal'

const Jobs = ({jobs, job_references}) => {
  const [show, setShow] = useState(false)

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
            <form action>
              <label for="friends">Choose a friend:</label>
              <select name="friends" id="friends">
                <option value="a">A</option>
                <option value="b">B</option>
                <option value="c">C</option>
                <option value="d">D</option>
              </select>
              <button>Submit</button>
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