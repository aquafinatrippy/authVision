import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import AuthScreen from './views/Auth'
import './App.css';

function App() {
  return (
    <Router>
    <div className="App">
      <div className="sideNav">
      </div>
      <div className="mainContent">
        <Route path="/" exact component={AuthScreen} />
      </div>
    </div>
  </Router>
  );
}

export default App;
