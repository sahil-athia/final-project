import React from 'react';
import { Form } from 'react-bootstrap';
const SearchBar = (props) => {
  const BarStyling = {width:"20rem",background:"#F2F1F9", border:"none", padding:"0.5rem"};

  return (
    <Form>
      <Form.Group controlId="exampleForm.ControlSelect1">
        <Form.Label>Select Search Option: </Form.Label>
        <Form.Control as="select" onChange={e => props.setSearch(e.target.value)}>
          <option>By Name</option>
          <option>By Industry</option>
        </Form.Control>
      </Form.Group>
      <input 
       style={BarStyling}
       key="random1"
       value={props.input}
       placeholder={"search network"}
       onChange={(e) => props.onChange(e.target.value)}
      />
    </Form>
  );
}

export default SearchBar