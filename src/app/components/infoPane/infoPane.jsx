import React from 'react';

const InfoPane = (props) =>
    <div>
        <h5>Name: {props.name}</h5>
        <h5>Plot: {props.plot}</h5>
        <h5>Rating: {props.rated}</h5>
        <h5>Runtime: {props.runtime}</h5>
        <h5>Director: {props.director}</h5>
        <h5>Production Company: {props.production}</h5>

    </div>

export default InfoPane

