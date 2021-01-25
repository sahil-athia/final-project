import React from 'react';
import { Form } from 'react-bootstrap';

const SearchBar = ({input, onChange, setSearch}) => {
  
    const clear = () => {
      onChange('')
    }
  return (
    <Form className="search-form">
      <Form.Group controlId="exampleForm.ControlSelect1">
        <Form.Label><h2>Search new employees</h2></Form.Label>
        <Form.Control as="select" onChange={e => setSearch(e.target.value)}>
          <option>By Name</option>
          <option>By Email</option>
        </Form.Control>
      </Form.Group>
      <div className="search">
            <input type="checkbox" id="trigger" className="search__checkbox" />
            <label className="search__label-init" htmlFor="trigger" style={{left: "19rem"}}></label>
            <label className="search__label-active" htmlFor="trigger" onClick={() => clear()}></label>
            <div className="search__border"></div>
            <input 
              type='text'
              key="random1"
              value={input}
              placeholder=''
              onChange={(e) => onChange(e.target.value)}
              className="search__input"
            />
            <div className="search__close" onClick={() => clear()}></div>
        </div>  
    </Form>
  );
}

export default SearchBar