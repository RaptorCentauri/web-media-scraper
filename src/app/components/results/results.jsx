import React from 'react';

const Results = (props) =>
    <div onClick={props.handleClick}>
        <h5>{props.title}</h5>
    </div>

export default Results
