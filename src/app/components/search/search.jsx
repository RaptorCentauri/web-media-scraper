import React from 'react';
import './search.scss';
import searchIconSrc from './searchIcon.svg';

const Search = (props) =>
  <input onChange={props.handleInputChange} placeholder="Enter a Movie Title" />
export default Search
