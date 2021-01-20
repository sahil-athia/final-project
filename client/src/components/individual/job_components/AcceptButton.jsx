import { React, useState, useEffect } from 'react';

const AcceptButton = (props) => {
  const { id, organization_id, handleAccept} = props;
  const [show, setShow] = useState(true);

  const handelClick = (event) => {
    event.preventDefault();
    handleAccept(id, organization_id);
    setShow(false)
  };

  return (
    <div>
      <div>
        {show && <button onClick={handelClick}>Accept Reference</button>}
      </div>
      <div>
        {!show && <button disabled={true}>Accepted</button>}
      </div>
    </div>
  )
  
};

export default AcceptButton;