import React, { Component } from 'react';
import './App.css';
import Navtravel from './components/nav-travel'; 
import StatusBar from './components/statusBar';
import { Card } from 'react-bootstrap';
import Travel from './components/blank';
import Home from './components/home';
import {Route,Switch} from 'react-router-dom';
import StatusTable from './components/statusTable';
class App extends Component {
 
  render() {
    return (
      <div>
        <Card>
          <Card.Header>
            <Navtravel></Navtravel>
          </Card.Header>
            <Switch>
         <Route path="/Travel" component={Travel}></Route>
         <Route path="/" component={Home}></Route>
         
        </Switch>
        </Card>
        
        <StatusTable></StatusTable>
      </div>
    );
  }
}

export default App;