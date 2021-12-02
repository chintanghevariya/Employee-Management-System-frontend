import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import ListEmployees from './components/ListEmployee';
import CreateEmployees from './components/CreateEmployee';
import ViewEmployees from './components/ViewEmployee';

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
                          <Route path = "/" exact component = {ListEmployees}></Route>
                          <Route path = "/employees" component = {ListEmployees}></Route>
                          <Route path = "/add/:id" component = {CreateEmployees}></Route>
                          <Route path = "/view/:id" component = {ViewEmployees}></Route>
                    </Switch>
                </div>
                <div>
                <footer className = "footer">
                <div class="footer-copyright text-center py-3">© 2021 Copyright:
                <span> Assignment 2 - by Chintan</span>
                </div>
                </footer>
            </div>
        </Router>
    </div>
    
  );
}

export default App;
