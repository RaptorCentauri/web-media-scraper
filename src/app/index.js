import React from 'react';
import {render} from 'react-dom';
import Search from "./components/search/search.jsx"

class App extends React.Component{

  state = {
    searchParam: ""
  }

  handleSearchInputChange = (e) => {
      const target = e.target;
      const value = target.value;
      this.setState({searchParam: value})
  }

  handleSearchClick = () => {
    console.log(`searcing for ${this.state.searchParam}`);
  }

    render(){
        return(
            <div className='App'>
                <Search handleInputChange={this.handleSearchInputChange} handleClick={this.handleSearchClick}/>
            </div>
        );
    }
}

render(<App/>,window.document.getElementById('root'));
