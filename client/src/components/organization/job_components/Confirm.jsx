const Confirm = ({message, deleteCancel, deleteConfirm}) => {

  return(
    <section className="delete-confirmation">
      <div className="delete-msg">
        <h4>{message}</h4>
      </div>
      <div className="delete-actions">
        <button className="delete-actions-cancel" onClick={deleteCancel}>Cancel</button>
        <button className="delete-actions-confirm" onClick={deleteConfirm}>Confirm</button>
      </div>
    </section>
  );
};

export default Confirm;