import { React } from 'react';
import Select from 'react-dropdown-select';
import './Modal.css'
import Modal from './Modal'

const OrganizationJobs = (props) => {
  const {show, setShow, options, selected, setSelected, setJobId, orgJobs, handleSubmit} = props;
  
  const jobList = orgJobs.map((job) => (
    <div key={job.id}>
      <div>Title: {job.title}</div>
      <div>Description: {job.description}</div>
      <div>Salary: {job.salary}</div>
      <button className="btn" type="button" onClick={() => {
        setShow(true);
        setJobId(job.id);
      }}>
        Refer Someone
        </button>
        <Modal show={show} setShow={setShow}>
          Please choose one of your connections:
          <form onSubmit={(e) => { 
            e.preventDefault();
            handleSubmit(selected)}}>
            <Select
              options={options}
              values={[]}
              name="select"
              onChange={(value) => {
                setSelected(value);
              }}
            />
            <button type="submit" >Submit</button>
          </form>
        </Modal>
      <hr />
    </div>
  ));

  return jobList;

};

export default OrganizationJobs;