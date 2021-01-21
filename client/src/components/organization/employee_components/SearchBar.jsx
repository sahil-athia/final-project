import React from 'react';
import { Form } from 'react-bootstrap';

const SearchBar = ({input, onChange, setSearch}) => {
  const BarStyling = {width:"20rem",background:"#F2F1F9", border:"none", padding:"0.5rem"};

  return (
    <Form>
      <Form.Group controlId="exampleForm.ControlSelect1">
        <Form.Label><h2>Search new employees</h2></Form.Label>
        <Form.Control as="select" onChange={e => setSearch(e.target.value)}>
          <option>By Name</option>
          <option>By Email</option>
        </Form.Control>
      </Form.Group>
      <input 
       style={BarStyling}
       key="random1"
       value={input}
       placeholder={"here"}
       onChange={(e) => onChange(e.target.value)}
      />
    </Form>
  );
}

export default SearchBar