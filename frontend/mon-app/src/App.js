import './App.css';
import React, { useState, useEffect } from "react";
import Header from './components/header_components';
import getUser from './services/user_service';
import { Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { Menu } from '@mui/icons-material';


function App() {
  return (
    <div className="App">
      <Appbarrr></Appbarrr>
      <Header></Header>
     <br></br>
     <div className="ListUsers">
     <UserTile></UserTile>
     </div>
    
    </div>
  );
}

export default App;



function UserTile() {
  const [Loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const userData = await getUser();
        console.log(userData);
        setData(userData);

        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  let freee = "pas de données";

  // Créez une liste d'éléments JSX à partir des données utilisateur
  //see : https://aguidehub.com/blog/2023-03-17-how-to-make-mui-table-with-body-scrollable-in-react-js/
  const userList = data.map((user, index) => (
    <div className='userTile' key={index}>
      <div>Prenom : {user.surname}</div>
      <div>Nom : {user.name}</div>
      <div>id : {user.id}</div>
    </div>
  ));

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
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  </div>
  ); 
}


function Appbarrr() {
  return(
    <AppBar>
    <Toolbar>
      <IconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label="menu"
        sx={{ mr: 2 }}
      >
        <Menu />
      </IconButton>
      <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
        Gestion 
      </Typography>
      <Button color="inherit">Add</Button>
      <Button color="inherit">Delete</Button>
    </Toolbar>
  </AppBar>
  );
}

