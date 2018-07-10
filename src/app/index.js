import React from 'react';
import {render} from 'react-dom';
import Search from "./components/search/search.jsx"
import searchOMDB from './helperFunctions/searchOMDB';
import Results from './components/results/results';

class App extends React.Component{

  state = {
    searchParam: "",
    searchResults: []
  }

  handleSearchInputChange = (e) => {
      const target = e.target;
      const value = target.value;
      this.setState({searchParam: value})
  }

  handleSearchClick = async () => {
     let result = await searchOMDB(this.state.searchParam);
      this.setState({searchResults: result});
  }

  handeResultClick = async () => {
      console.log('clicked a thing');
  }

    render(){
        return(
            <div className='App'>
                <Search handleInputChange={this.handleSearchInputChange} handleClick={this.handleSearchClick}/>
                {this.state.searchResults.map(i => <Results key={i} imdb={i.imdbid} title={i.title} handleClick={this.handeResultClick}/>)}
            </div>
        );
    }
}

render(<App/>,window.document.getElementById('root'));
