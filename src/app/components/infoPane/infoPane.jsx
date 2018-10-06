import React from 'react';
import './InfoPane.scss';

const InfoPane = (props) =>
    <div id='info-pane'>
        <div id='info-top'>
                <img src={props.poster} alt="" />
            <div id='info-top-text'>
                <h2>Name: {props.name}</h2>
                <h2>Director: {props.director}</h2>
            </div>

        </div>
        <div id='info-bottom'>
            <h2>Plot: {props.plot}</h2>
            <h2>Rating: {props.rated}</h2>
            <h2>Runtime: {props.runtime}</h2>
            <h2>Release Date: {props.released}</h2>
            <h2>Production Company: {props.production}</h2>
        </div>

    </div>

export default InfoPane

