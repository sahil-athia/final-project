import { useState, useEffect } from 'react';
import Edit from '../../..//icons/Edit.png';
import Delete from '../../..//icons/Delete.png';
import Reference from '../../..//icons/Reference.png';

const ShowJob = ({job, onEdit, onDelete, onReference}) => {
  return (
    <>
      <div className="job-info">Title: {job.title}</div>
      <div className="job-info">Salary: {job.salary}</div>
      <div className="job-info">Description: {job.description}</div>
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
        <button className="reference-btn" onClick={onReference}>
          <img className="reference-btn" src={Reference} alt="Reference"/>
        </button>
      </section>

  </>
  )
};

export default ShowJob;
