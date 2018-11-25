import React from 'react';
import './results.scss';


class Results extends React.Component{
  constructor(props){
    super(props)
  }


  render(){
    return(
      <div id="result-section">
        {this.props.results.map((e)=> <img className="result-pic"  onClick={() => this.props.handleClick(e.id)} src={e.poster} alt="" srcSet=""/>)}
      </div>
    )
  }
}


export default Results
