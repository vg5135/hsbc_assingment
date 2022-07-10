import React from 'react';
import { Table } from 'reactstrap';


const TableData = ({users}) => {
    
  return (
   <div>
{        users.length >0 ? <Table striped>
        <thead>
          <tr>
            <th>Name</th>
            <th>Phone</th>
            <th>Username</th>
            <th>Website</th>
            <th>Email</th>
            <th>Address</th>
            <th>Company</th>
          </tr>
        </thead>
        <tbody>
         {users?.map(user=>{
             return (
                <tr>
                <td>{user.name}</td>
                <td>{user.phone}</td>
                <td>{user.username}</td>
                <td>{user.website}</td>
                <td>{user.email}</td>
                <td>{user.address.city}</td>
                <td>{user.company.name}</td>
              </tr>
             )
         })}
        </tbody>
      </Table>: <p>No user found!</p>}
    </div> 
  )
}

export default TableData