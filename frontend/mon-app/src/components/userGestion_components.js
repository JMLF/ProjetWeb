import { Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';
import FloatingActionButtons from './floatingactionbuttons_components';
import React, { useState, useEffect } from "react";
import {getUser} from '../services/user_service';

function UserGestion() {
    const [data, setData] = useState([]);
  
    useEffect(() => {
      async function fetchData() {
        try {
          const userData = await getUser();
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
              <TableCell>User Id</TableCell>
              <TableCell>Surname</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Gender</TableCell>
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
                  <TableCell>{user.surname}</TableCell>
                  <TableCell>{user.name}</TableCell>
                  <TableCell>{user.civility.status}</TableCell>
                  <TableCell><FloatingActionButtons objectId={user.id} path={"user-gestion"}></FloatingActionButtons></TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </div>
    </div>
    ); 
  }

  export default UserGestion;