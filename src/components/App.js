import React, { Component } from 'react';
import logo from '../logo.svg';
import '../sass/App.scss';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <header className='App-header'>
          <img src={ logo } className='App-logo' alt='logo' />
           
          <p>
            React Hooks Examples
          </p>

          <a href='https://reactjs.org/docs/hooks-reference.html'
             target='_blank'
             rel='noopener noreferrer'>
            <i>React Hooks Documentation</i>
          </a>
        </header>
      </div>
    );
  }
}

export default App;
