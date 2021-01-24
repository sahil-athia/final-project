import { React, useState } from 'react';
import './accept.scss'

const AcceptButton = (props) => {
  const { reference_id, handleAccept, accepted } = props;
  const [hide, setHide] = useState(accepted);

  const handelClick = (event) => {
    event.preventDefault();
    handleAccept(reference_id);
    setHide(true)
  };

  return (
    <div>
      {!hide && <button className="accept-button" onClick={handelClick}>Accept</button>}
      {hide && <button className="accept-button" disabled={true} style={{backgroundColor: "rgb(0, 197, 0)"}}>Accepted</button>}

    </div>
  )
  
};

export default AcceptButton;