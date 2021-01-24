import { useState } from 'react';

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
    <form onSubmit={() => beforeSubmit()}>
      <label>
        Refer your connections:
        <select value={data} defaultValue={'DEFAULT'} onChange={(event) => setData(event.target.value)}>
          <option value="DEFAULT" disabled>By Name</option>
          {formedOptions}
        </select>
      </label>
      <input type="submit" value="Submit" />
    </form>
  )
};

export default MakeReference;
