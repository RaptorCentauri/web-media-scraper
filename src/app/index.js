import React from 'react';
import {render} from 'react-dom';
import Search from "./components/search/search.jsx"
import searchOMDB from './helperFunctions/searchOMDB';
import Results from './components/results/results';
import InfoPane from './components/infoPane/infoPane';

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
    //   console.log(this.state.info);
      
  }

    render(){
        return(
            <div className='App'>
                <Search handleInputChange={this.handleSearchInputChange} handleClick={this.handleSearchClick}/>
                {this.state.searchResults.map(i => <Results  key={i.imdbid} title={i.title} handleClick={this.handeResultClick.bind(this, i.imdbid)}/>)}
                {this.state.info ? 
                <InfoPane 
                    name={this.state.info.name}
                    plot={this.state.info.plot}
                    rated={this.state.info.rated}
                    runtime={this.state.info.runtime}
                    director={this.state.info.director}
                    production={this.state.info.production}
                />
                : false
                }
            </div>
        );
    }
}

render(<App/>,window.document.getElementById('root'));
