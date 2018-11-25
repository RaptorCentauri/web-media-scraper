import "babel-polyfill";

import './index.scss'

import {render} from 'react-dom';
import React from 'react';
import {CastPane, InfoPane, Results, Search} from './components/index'
import {getByID, searchTMDB} from '../API/index'

class App extends React.Component{

  state = {
    searchParam: "",
    searchResults: [],
    info:false,
  }

  componentWillMount = async () => {
    let result = await getByID(862);
     this.setState({info: result});

     this.setState({searchParam: 'Toy Story'})

  }


  componentDidUpdate = async () => {
    let result = await searchTMDB(this.state.searchParam);
     this.setState({searchResults: result});
  }

  handleSearchInputChange = (e) => {
      const target = e.target;
      const value = target.value;

      if(value){
        this.setState({searchParam: value})
      }

  }

  handleSearchClick = async () => {
     let result = await searchTMDB(this.state.searchParam);
      this.setState({searchResults: result});
  }

  handeResultClick = async (id) => {
      console.log('I WAS CLICKED!', id);
      let result = await getByID(id);
      this.setState({info: result});
  }

    render(){
        return(
            <div  className='App'>
                 <Search handleInputChange={this.handleSearchInputChange} handleClick={this.handleSearchClick.bind(this)}/>

                 <Results results={this.state.searchResults} handleClick={this.handeResultClick}/>


                  <InfoPane
                      poster={this.state.info.poster}
                      title={this.state.info.title}
                      plot={this.state.info.overview}m
                      director={this.state.info.director}
                  />

                {this.state.info.cast && <CastPane cast={this.state.info.cast}/>}

            </div>
        );
    }
}

render(<App/>,window.document.getElementById('root'));
