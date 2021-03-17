import React, { Component } from 'react';
import Table from 'react-bootstrap/Table'
import GridTable from '@nadavshaar/react-grid-table';
class StatusTable extends Component{

    rows = [
        { 
            "id": 1, 
            "Requestor": "wotham0", 
            "TripId": "Male", 
            "RequestDate": "12/08/2019", 
            "TravelDate": "03/08/2019",
            "servicerequested": "B/Y",
            "estimatedcost": "",
        },
        { 
            "id": 2, 
            "Requestor": "dbraddon2", 
            "TripId": "Female", 
            "RequestDate": "16/07/2018", 
            "TravelDate": "03/08/2019",
            "servicerequested": "b/y",  
            "estimatedcost": "",
        },
        { 
            "id": 'Checkbox', 
            "Requestor": "dridett3", 
            "TripId": "Male", 
            "RequestDate": "20/11/2016", 
            "TravelDate": "03/08/2019",
            "servicerequested": "b/y",   
            "estimatedcost": "",      
        },
        { 
            "id": 4, 
            "Requestor": "gdefty6", 
            "TripId": "Female", 
            "RequestDate": "03/08/2019", 
            "TravelDate": "03/08/2019",
            "servicerequested": "b/y",
            "estimatedcost": "",
        },
        { 
            "id": 5, 
            "Requestor": "hbeyer9", 
            "TripId": "Male", 
            "RequestDate": "03/08/2019",
            "TravelDate": "03/08/2019",
            "servicerequested": "y",
            "estimatedcost": "",
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
            label: 'Travel Date',
        },
        {
            id: 6, 
            field: 'servicerequested', 
            label: 'Service Requested',
        },
        {
            id: 7, 
            field: 'estimatedcost', 
            label: 'Estimated Cost',
        },
        {
            id: 8, 
            field: 'status', 
            label: 'Status',
        }
    ];

    render(){
        return(
            <div>
                <GridTable columns={this.columns} rows={this.rows}></GridTable>
            </div>
        )
    }

}

export default StatusTable;                