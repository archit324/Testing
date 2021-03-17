import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import logo from '../logo.svg'
import bell from '../bell.svg'
class Navtravel extends Component{
    render(){
        return (
         <div>
            <Navbar className="justify-content-between">
            <Navbar.Brand href="#home">
              <img
              src={logo}
              width="50"
              height="50"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
               />
              </Navbar.Brand>
              <Nav>
                <Nav.Item>
                  <Nav.Link href="/Travel">Travel</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href="/Expense">Expense</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href="/MyTrips">My Trips</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href="/Notifications"><img src = {bell}></img></Nav.Link>
                </Nav.Item>
              </Nav>
            </Navbar>
        </div>
    )
    }
}

export default Navtravel;