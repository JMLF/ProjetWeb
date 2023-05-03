import { Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';
import FloatingActionButtons from './floatingactionbuttons_components';
import React, { useState, useEffect } from "react";
import { getTickets } from '../services/ticket_service';

function TicketGestion() {
    const [data, setData] = useState([]);
  
    useEffect(() => {
      async function fetchData() {
        try {
          const userData = await getTickets();
          console.log(userData);
          setData(userData);
  
        } catch (error) {
          console.error(error);
        }
      }
  
      fetchData();
    }, []);
    
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
              <TableCell>Id</TableCell>
              <TableCell>Titre</TableCell>
              <TableCell>Description</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
        </Table>
      </div>
      <div style={{ height: "300px", overflow: "auto" }}>
        <Table style={{ tableLayout: "fixed" }}>
          <TableBody>
            {data.map((user, index) => {
              return (
                <TableRow key={index}>
                  <TableCell>{user.id}</TableCell>
                  <TableCell>{user.titre}</TableCell>
                  <TableCell>{user.description}</TableCell>
                  <TableCell>{user.status}</TableCell>
                  <TableCell><FloatingActionButtons objectId={user.id} path={"ticket-gestion"}></FloatingActionButtons></TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </div>
    </div>
    ); 
  }

  export default TicketGestion;