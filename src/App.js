import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import ListEmployeeComponent from './components/ListEmployeeComponent';
import CreateEmployeeComponent from './components/CreateEmployeeComponent';
import ViewEmployeeComponent from './components/ViewEmployeeComponent';

function App() {
  return (
    <div>
        <Router>
            <div>
                <header>
                    <nav className="navbar navbar-dark bg-dark">
                        <div className="navbar-brand"><h3><b className="text-center">Employee Management App</b></h3></div>
                    </nav>
                </header>
            </div>
                <div className="container">
                    <Switch> 
                          <Route path = "/" exact component = {ListEmployeeComponent}></Route>
                          <Route path = "/employees" component = {ListEmployeeComponent}></Route>
                          <Route path = "/add/:id" component = {CreateEmployeeComponent}></Route>
                          <Route path = "/view/:id" component = {ViewEmployeeComponent}></Route>
                    </Switch>
                </div>
                <div>
                <footer className = "footer">
                    <span>Full Stack development (Assignment 2) - by Rutik Patel</span>
                </footer>
            </div>
        </Router>
    </div>
    
  );
}

export default App;
