import React from 'react'
import Loader from '../../..//icons/Loader.png';
import "./Status.scss"
export default function Status(props) {

  return(
    <main className="appointment__card appointment__card--status">
      <div className="status-box">
      <img
        className="appointment__status-image"
        src={Loader}
        alt="Loading"
      />
      <h3 className="semi-bold">{props.message}</h3>
      </div>
    </main>
  );
}