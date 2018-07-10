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
      // const name = target.name;

      this.setState({searchParam: value})
      console.log(this.state.searchParam);
      // this.props.changeCredentials(name, value)
  }

    render(){
        return(
            <div className='App'>
                <Search handleInputChange={this.handleSearchInputChange}/>
            </div>
        );
    }
}

render(<App/>,window.document.getElementById('root'));
