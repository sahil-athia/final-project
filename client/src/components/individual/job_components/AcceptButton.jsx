import { React, useState } from 'react';

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
      {!hide && <button onClick={handelClick}>Accept</button>}
      {hide && <button disabled={true}>Accepted</button>}

    </div>
  )
  
};

export default AcceptButton;