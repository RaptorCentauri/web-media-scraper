import React from 'react';
import './castPane.scss';

class CastPane extends React.Component{
  constructor(props){
    super(props)
    console.log(this.props);
  }

  render(){
    return(
      <div id="cast-section">
        {this.props.cast.map((e)=>
          <div className='cast-pane'>
              <img className='cast-pic' src={e.profilePic} alt="" />
              <h5 className='cast-actor'>{e.name}</h5>
          </div>
        )}

      </div>
    )
  }
}


export default CastPane
