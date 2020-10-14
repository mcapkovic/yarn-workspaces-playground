import React from 'react';
import logo from './logo.svg';
import './App.css';
import shared from '@my-playground/shared-utils';
import { Button, Input } from 'typescript-package';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      
        <p>
        multiply 2 and 3 = {shared.multiply(2, 3)}
        <br />
        <Button message='test'/>
        <br/>
        <Input />
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
