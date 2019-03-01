import React, { Component } from 'react';
import logo from '../logo.svg';
import '../sass/App.scss';

import Divider from '@material-ui/core/Divider';

import CounterComponentState from './CounterComponentState';
import CounterComponentStateEditor from './CounterComponentStateEditor';

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

        <div className='example-container'>
          <h1>Counter with Component level State</h1>
          <CounterComponentState  initialCount={ 0 } />
          <CounterComponentStateEditor />
        </div>

        <Divider />
      </div>
    );
  }
}

export default App;
