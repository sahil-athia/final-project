// import MakeReference from '../../icons/MakeReference.png';
import './position.scss'


const ShowPosition = ({job, onReference}) => {
  
  return (
    <div className="job-box" >
      <img src="https://upload-icon.s3.us-east-2.amazonaws.com/uploads/icons/png/10625049341582994876-512.png" alt="job-icon" className="job-icon"></img>
      <div className="job-title"><b>{job.title}</b></div>
      <div className="job-description"><em>{job.description}</em></div>
      <div className="job-salary" ><strong>{job.salary}</strong></div>
      <button onClick={onReference} className="refer-button">
        Refer
      </button>
    </div>
  )
};

export default ShowPosition;

{/* <img className="reference-btn" onClick={onReference} src={MakeReference} alt="Reference"/> */}