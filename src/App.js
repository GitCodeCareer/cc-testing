import React, { Component } from 'react';
import logo from './logo.svg';
import { render } from 'react-dom';
import JobsPage from './pages/jobs.page';
import LoginPage from './pages/login.page';
import RegisterPage from './pages/register.page';
import {
  HashRouter as Router,
  Route,
  Link,
  Switch,
} from "react-router-dom";

import './App.css';

function App() {
  return (
    <div className="App">
      <div style={{color: "red"}}>
      <h1>Please Scroll</h1>
      </div>
      <Router>
       <Link to="/" activeClassName="active">LoginPage</Link>
       <Link to="/register" activeClassName="active">RegisterPage</Link>
       <Link to="/jobs" activeClassName="active">JobsPage</Link>

       <Switch>
         <Route path="/" component={LoginPage} exactt></Route>
         <Route path="/register" component={RegisterPage} exact></Route>
         <Route path="/jobs" component={JobsPage} exact ></Route>
       </Switch>
     </Router>
      // <Router>
      //   <Route path="/" component={LoginPage} exact/>
      //   <Route path="/register" component={RegisterPage} exact/>
      //   <Route path="/jobs" component={JobsPage} exact />
      // </Router>
    </div>
  );
}

export default App;
