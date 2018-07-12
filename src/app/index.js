import React from 'react';
import {render} from 'react-dom';
import Search from "./components/search/search.jsx"
import searchOMDB from './helperFunctions/searchOMDB.js';
import Results from './components/results/results.jsx';
import InfoPane from './components/infoPane/infoPane.jsx';
import './index.scss'

import getById from './helperFunctions/getByID';

class App extends React.Component{

  state = {
    searchParam: "",
    searchResults: [],
    info:false,
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

  handeResultClick = async (id) => {
      let result = await getById(id);
      this.setState({info: result});
  }

    render(){
        return(
            <div className='App'>
                <Search handleInputChange={this.handleSearchInputChange} handleClick={this.handleSearchClick}/>
                <div id='search-results'>
                {this.state.searchResults.map(i => <Results  key={i.imdbid} title={i.title} type={i.type.charAt(0).toUpperCase()+i.type.slice(1)} year={i.year} poster={i.poster} handleClick={this.handeResultClick.bind(this, i.imdbid)}/>)}
                </div>
                {/* {this.state.info ?  */}
                <InfoPane 
                    name={this.state.info.name}
                    plot={this.state.info.plot}
                    rated={this.state.info.rated}
                    runtime={this.state.info.runtime}
                    director={this.state.info.director}
                    production={this.state.info.production}
                />
                {/* : false */}
                {/* } */}
            </div>
        );
    }
}

render(<App/>,window.document.getElementById('root'));
