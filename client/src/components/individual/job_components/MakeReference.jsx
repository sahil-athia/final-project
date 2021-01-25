import { useState } from 'react';
import "./reference.scss"

const MakeReference = ({job_id, organization_id, offReference, options, handleSubmit}) => {
  const [data, setData] = useState(); 
  const formedOptions = options.map((option) => {
    return (<option key={option.candidate_id} value={option.candidate_id}>{option.candidate_name}</option>);
  });

  const beforeSubmit = () => {
    const selected = options.filter((option) => option['candidate_id'] === Number(data))[0];
    handleSubmit({...selected, job_id, organization_id});
    offReference();
  };

  return (
    <div className="job-box" >
    <form onSubmit={event => event.preventDefault()} className="reference-form">
      <div className="reference-select">
        <div className="select-title">Refer your connections</div>
        <select className="select-box" value={data} defaultValue={'DEFAULT'} onChange={(event) => setData(event.target.value)}>
          <option value="DEFAULT" disabled>By Name</option>
          {formedOptions}
        </select>
      </div>
      <div className="reference-actions">      
        <button className="reference-actions" onClick={() => offReference()}>Cancel</button>
        <button className="reference-actions" onClick={() => beforeSubmit()}>Submit</button> 
      </div>
    </form>
    </div>
  )
};

export default MakeReference;
