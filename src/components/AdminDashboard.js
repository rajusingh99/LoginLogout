// import React from 'react';
import Record from '../records.json';
import React, { useState } from "react";

function Fetch() {
    // const data = require()
    const [isAdmin, setIsAdmin] = useState(false);
    return (
     <div class="App">
         <h3>Admin Dashboard </h3> <br></br><br></br>
         
         {Record.map((item)=>{
            if(item.Role!=="admin"){
              return(
                <table class="table table-hover">
                    <tr>
                      <th scope="col">Id</th>
                      <th scope="col">Name</th>
                      <th scope="col">Email</th>
                      <th scope="col">Role</th>
                    </tr>
               
                  <tr>
                  <td scope="row">{item.id}</td>
                  <td>{item.Name}</td>
                  <td>{item.Email}</td>
                  <td>{item.Role}</td>
                  </tr>
               
                </table>
              )
            }
         })}
     </div>
    );
  }

  export default Fetch;