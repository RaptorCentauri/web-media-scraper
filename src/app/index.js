import React from 'react';
import {render} from 'react-dom';

class App extends React.Component{
    render(){
        return(
            <div className='App'>
              <h1>This is the App</h1>
            </div>
        );
    }
}

render(<App/>,window.document.getElementById('root'));
