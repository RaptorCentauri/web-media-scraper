import React from 'react';
import './search.scss';
import searchIconSrc from './searchIcon.svg';

const Search = (props) =>
  <div id='search-div'>
    <div id='search-field'>
        <input onChange={props.handleInputChange} placeholder="Enter a Movie or TV Show"/>
            <img src={searchIconSrc} alt="" onClick={props.handleClick}/> 
    </div>
  </div>
  
export default Search
