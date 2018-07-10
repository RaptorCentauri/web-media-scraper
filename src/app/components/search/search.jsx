import React from 'react';

const Search = (props) =>
  <div>
    <input onChange={props.handleInputChange} placeholder="Enter a Movie or TV Show"/>
    <button onClick={props.handleClick}>Search</button>
  </div>
  
export default Search
