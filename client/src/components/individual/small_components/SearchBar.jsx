import React, {useRef} from 'react';
import { Form } from 'react-bootstrap';
import './SearchBar.scss'

const SearchBar = (props) => {
  const clear = () => {
    props.onChange('')
  }

  return (
    <Form>
      <Form.Group controlId="exampleForm.ControlSelect1">
        <Form.Label>Select Search Option: </Form.Label>
        <Form.Control as="select" onChange={e => props.setSearch(e.target.value)}>
          <option>By Name</option>
          <option>By Industry</option>
        </Form.Control>
      </Form.Group>
      
         <div className="search">
            <input type="checkbox" id="trigger" className="search__checkbox" />
            <label className="search__label-init" htmlFor="trigger"></label>
            <label className="search__label-active" htmlFor="trigger" onClick={() => clear()}></label>
            <div className="search__border"></div>
            <input 
              type='text'
              key="random1"
              value={props.input}
              placeholder=" "
              onChange={(e) => props.onChange(e.target.value)}
              className="search__input"
            />
            <div className="search__close" onClick={() => clear()}></div>
        </div>
    </Form>
  );
}

export default SearchBar