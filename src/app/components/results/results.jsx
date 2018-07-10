import React from 'react';

const Results = (props) =>
    <div onClick={props.handleClick}>
        <h5>{props.title}</h5>
        <h6>{props.imdb}</h6>
    </div>

export default Results
