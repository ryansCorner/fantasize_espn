import React from 'react'
import logo from './logo.svg';
import './App.css';
import ESPN from './services/espnService'
import League from './League';
import { withRouter } from 'react-router-dom'
import Layout from './components/templates/layout/Layout';
// import ESPN from '../ESPN-Fantasy-Football-API/src/client'

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <Layout />
      {/* <League /> */}
    </div>

  );
}

export default withRouter(App);
