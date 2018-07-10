import React from 'react';

const Search = (props) =>
  <div>
    <input onChange={props.handleInputChange} placeholder="Enter a Movie or TV Show"/>
  </div>

export default Search
