import React, { Component } from 'react';
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'

class StatusBar extends Component{
    render(){
        return(<div>
        <Navbar className=" justify-content-between">
          <div>
           <Nav defaultActiveKey="/home" className="flex-column">
           <Nav.Link >My Approvals</Nav.Link>
            
           </Nav>
            <Nav defaultActiveKey="/home" as="ul">
                <Nav.Item as="li">
                   <Nav.Link href="/PendingApprovals">Pending Approvals</Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
                   <Nav.Link href="/ApprovedTrips">Approved Trips</Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
                   <Nav.Link href="/RejectedTrips">Rejected Trips</Nav.Link>
            </Nav.Item>
            </Nav>
            </div>
            <Form inline>
             
               <Button type="submit" className = "margin-5">Approve All</Button>
               <Button type="submit" className = "margin-5">Reject All</Button>
               <FormControl type="text" placeholder="Search" className=" mr-sm-2" />
               
            </Form>
        </Navbar>
        </div>
        )
    }
}

export default StatusBar;