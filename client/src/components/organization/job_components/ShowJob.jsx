import { useState, useEffect } from 'react';
import Candidates from './Candidates';
import Edit from '../../..//icons/Edit.png';
import Delete from '../../..//icons/Delete.png';

const ShowJob = ({job, reload, onEdit, onDelete}) => {
  return (
    <>
      <div>Title: {job.title}</div>
      <div>Salary: {job.salary}</div>
      <div>Description: {job.description}</div>
      <section className="job-actions">
        <img
          className="edit-btn"
          src={Edit}
          alt="Edit"
          onClick={onEdit}
        />
        <img
          className="delete-btn"
          src={Delete}
          alt="Delete"
          onClick={onDelete}
        />
        <Candidates
          job_id={job.id}
          organization_id={job.organization_id}
        />
      </section>

  </>
  )
};

export default ShowJob;
