// import React from 'react';
import Record from '../records.json';
import React, { useState } from "react";

function Fetch() {
    // const data = require()
    const [isAdmin, setIsAdmin] = useState(false);
    return (
     <div class="App">
         <h3>Admin Dashboard </h3> <br></br><br></br>
         {
          Record && Record.map(record=>
          {
            return (
              <div className ="box" key={record.id}>
              
            < table class="table table-success table-striped">
                 
                 <tr>
                   <th> Id </th>
                   <th class="col3"> Name </th>
                   <th> Email </th>
                   <th> Role </th>
                 </tr>
                 <tr>
                  <td>{ record.id}</td>
                   <td>{ record.Name}</td>
                   <td>{ record.Email}</td>
                   <td>{ record.Role}</td>
                 </tr>
                </table> 
               
              </div>
            )
          })
         }
     </div>
    );
  }

  export default Fetch;