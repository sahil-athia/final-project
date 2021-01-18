export default function Confirm(props) {

  return(
    <main>
      <h1>{props.message}</h1>
      <section className="appointment__actions">
        <button onClick={props.deleteCancel}>Cancel</button>
        <button onClick={props.deleteConfirm}>Confirm</button>
      </section>
    </main>
  );
}