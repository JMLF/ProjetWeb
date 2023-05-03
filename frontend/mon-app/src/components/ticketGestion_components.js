import { Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';
import FloatingActionButtons from './floatingactionbuttons_components';
import React, { useState, useEffect } from "react";
import { getTickets } from '../services/ticket_service';


function TicketGestion() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const ticketData = await getTickets();
        console.log(ticketData);
        setData(ticketData);

      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, []);

  const handleTicketDeleted = (deletedTicketId) => {
    const updatedTickets = data.filter((data) => data.id !== deletedTicketId);
    setData(updatedTickets);
  };



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
            {data.map((ticket, index) => {
              return (
                <TableRow key={index}>
                  <TableCell>{ticket.id}</TableCell>
                  <TableCell>{ticket.titre}</TableCell>
                  <TableCell >{ticket.description}</TableCell>
                  <TableCell>{ticket.status}</TableCell>
                  <TableCell><FloatingActionButtons objectId={ticket.id} onTicketDeleted={handleTicketDeleted} path={"ticket-gestion"}></FloatingActionButtons></TableCell>
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