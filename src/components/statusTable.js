import React, { Component } from 'react';
import Table from 'react-bootstrap/Table'
// import GridTable from '@nadavshaar/react-grid-table';
import { Card } from 'react-bootstrap';
import "./Component.css"
class StatusTable extends Component{

    rows = [
        { 
            id: 1, 
            Requestor: "Michael", 
            TripId: "1889289", 
            RequestDate: "12/08/2019", 
            TravelDate: "03/08/2019",
            servicerequested: "B/Y",
            estimatedcost: "6577",
        },
        { 
            id: 2, 
            Requestor: "Rajesh", 
            TripId: "19020279382", 
            RequestDate: "16/07/2018", 
            TravelDate: "03/08/2019",
            servicerequested: "b/y",  
            estimatedcost: "7001",
        },
        { 
            "id":'', 
            Requestor: "Akash", 
            TripId: "7929892", 
            RequestDate: "20/11/2016", 
            TravelDate: "03/08/2019",
            servicerequested: "b/y",   
            estimatedcost: "7900",      
        },
        { 
            id: 4, 
            Requestor: "Umang", 
            TripId: "28817286371", 
            RequestDate: "03/08/2019", 
            TravelDate: "03/08/2019",
            servicerequested: "b/y",
            estimatedcost: "1600",
        },
        { 
            id: 5, 
            Requestor: "Iman", 
            TripId: "Male", 
            RequestDate: "03/08/2019",
            TravelDate: "03/08/2019",
            servicerequested: "y",
            estimatedcost: "1567",
        }
    ];

     columns = [
        {
            id: 'checkbox', 
            field: 'username', 
            label: 'Username',
        }, 
        {
            id: 2, 
            field: 'Requestor', 
            label: 'Requestor',
        },
        {
            id: 3, 
            field: 'TripId', 
            label: 'Trip Id',
        },
        {
            id: 4, 
            field: 'RequestDate', 
            label: 'Request Date',
        },
        {
            id: 5, 
            field: 'TravelDate', 
            label: 'Travel Dat',
       },
        { 
            id : 6,
            field: 'servicerequested', 
            label: 'Service Requested',
        },
        {
            id: 8, 
            field: 'status', 
            label: 'Status',
        }
    ];

    render(){
        return(
            <div className="container paddingtop10">
              {/* <div className = "border-outer "> */}
                <Table 
                borderless
                id="table"
                >                
                <thead>
                    <tr>
                         <th ><input type="checkbox"></input></th>
                         <th >Requestor</th>
                         <th >Trip Id</th>
                         <th >Request Date</th>
                         <th >Service Requested</th>
                         <th>Estimated Cost</th>
                         <th><img src = "https://www.svgrepo.com/show/117126/dots-menu.svg" width="20"
              height="20"></img></th>
                         
                    </tr>
                   </thead>
                   <tbody>
                          {this.rows.map((item,index)=>{
                              return(
                                  <tr id="row">
                                      <th ><input type="checkbox"></input></th>

                                <td key={index}>{item.id}</td>
                                <td>{item.Requestor }</td>
                                <td>{item.TripId }</td>
                                <td>{item.RequestDate}</td>
                                <td>{item.TravelDate}</td>
                                <td>{item.servicerequested}</td>
                                <td>{item.estimatedcost}</td>
                                <td><img src = "https://cdn4.iconfinder.com/data/icons/text-editor/154/horizontal-additional-menu-dots-512.png" width="20"
              height="20"></img></td>
                        </tr>
                        )
                              
                          })}
                       
                   </tbody>
                </Table>
                {/* </div> */}
            </div>
        )
    }

}

export default StatusTable;                