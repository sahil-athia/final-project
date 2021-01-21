import { React } from 'react';

const AcceptButton = (props) => {
  const { id, organization_id, handleAccept, show, setShow} = props;

  const handelClick = (event) => {
    event.preventDefault();
    handleAccept(id, organization_id);
    setShow(false)
  };

  return (
    <div>
      {show && <button onClick={handelClick}>Accept Reference</button>}
    </div>
  )
  
};

export default AcceptButton;