import React from 'react';
import './results.scss';

const Results = (props) =>
    <div id="mini-result" onClick={props.handleClick}>
        <img src={props.poster} alt="" srcset=""/>
        <div id="mini-info">
            <h5>Title: {props.title}</h5>
            <h5>Release Date: {props.year}</h5>
            <h5>Type: {props.type}</h5>
        </div>
    </div>

export default Results
