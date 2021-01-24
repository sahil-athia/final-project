// import MakeReference from '../../icons/MakeReference.png';

const ShowPosition = ({job, onReference}) => {
  
  return (
    <>
      <div>Title: {job.title}</div>
      <div>Description: {job.description}</div>
      <div>Salary: {job.salary}</div>
      <button onClick={onReference}>
      {/* <img className="reference-btn" onClick={onReference} src={MakeReference} alt="Reference"/> */}
        Refer Someone
      </button>
    </>
  )
};

export default ShowPosition;
