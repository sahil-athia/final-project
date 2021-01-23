import './Confirm.scss'
import { Button } from "react-bootstrap"

export default function Confirm(props) {
  return(
    <main className="connection__actions">
      <p className="remove-message">{props.message}</p>
      <section>
        <Button variant="success" onClick={props.deleteCancel}>Go Back</Button>
        <Button variant="danger" onClick={props.deleteConfirm}>Remove</Button>
      </section>
    </main>
  );
}