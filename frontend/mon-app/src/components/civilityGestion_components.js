import getCivility from "../services/civility_service";
import FloatingActionButtons from "./floatingactionbuttons_components";
import { Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';
import React, { useState, useEffect } from "react";


function CivilityGestion() {
    const [data, setData] = useState([]);
  
    useEffect(() => {
      async function fetchData() {
        try {
          const userData = await getCivility();
          console.log(userData);
          setData(userData);
  
        } catch (error) {
          console.error(error);
    ;
        }
      }
  
      fetchData();
    }, []);
  
    //see : https://aguidehub.com/blog/2023-03-17-how-to-make-mui-table-with-body-scrollable-in-react-js/
    
    return (
      <div>
      <div style={{ position: "sticky", top: 0 }}>
        <Table>
          <TableHead>
            <TableRow
              style={{
                backgroundColor: "#f5f5f5",
                height: "35px"
              }}
            >
              <TableCell>Civility Id</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Users</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
        </Table>
      </div>
      <div style={{ height: "300px", overflow: "auto" }}>
        <Table style={{ tableLayout: "fixed" }}>
          <TableBody>
            {data.map((civ, index) => {
              return (
                <TableRow key={index}>
                  <TableCell>{civ.id}</TableCell>
                  <TableCell>{civ.status}</TableCell>
                  <TableCell>{JSON.stringify(civ.user)}</TableCell>
                  <TableCell><FloatingActionButtons  objectId={civ.id} path={"civility-gestion"}></FloatingActionButtons></TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </div>
    </div>
    ); 
  }

  
  export default CivilityGestion;