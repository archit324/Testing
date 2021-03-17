import React, { Component } from 'react';
import './App.css';
import Navtravel from './components/nav-travel'; 
import StatusBar from './components/statusBar';
import { Card } from 'react-bootstrap';
class App extends Component {
 
  render() {
    return (
      <div>
        <Card>
          <Card.Header>
            <Navtravel></Navtravel>
          </Card.Header>
            <StatusBar></StatusBar>
        </Card>
      </div>
    );
  }
}

export default App;