import React from 'react';
import './InfoPane.scss';

const InfoPane = (props) =>
    <div id='info-pane'>
        <img id='info-pic' src={props.poster} alt="" />

          <h1 id='info-title'>{props.title}</h1>
          <h6 id='info-director'>Directed by {props.director}</h6>

          <h5 id='info-plot'>{props.plot}</h5>
    </div>

export default InfoPane
