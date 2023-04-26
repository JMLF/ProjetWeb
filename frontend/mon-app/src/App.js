import './App.css';
import React, { useState, useEffect } from "react";
import Header from './components/header_components';
import getUser from './services/user_service';
import { Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';
import Appbarrr from './components/appbar_components';
import FloatingActionButtons from './components/floatingactionbuttons_components';
import getCivility from './services/civility_service';


function App() {
  const [displayGestion, setdisplayGestion] = useState(false);
 

  const handlePage = () => {
    if (displayGestion == true) {
      setdisplayGestion(false);
    }
    else {
      setdisplayGestion(true);
    }
  };

  return (
    <div className="App">
      <Appbarrr onAction={handlePage} displayGestion={displayGestion}></Appbarrr>
     <br></br>

     {displayGestion ? 
     <div>
      <br></br> 
      <br></br> 
      <h2>Gestion utilisateurs</h2>
      <UserGestion></UserGestion>
      <br></br>
      <h2>Gestion civilitées</h2>
      <CivilityGestion></CivilityGestion>
       </div> 
     :
     <div>
      <br></br>
     <Header></Header>
 <div className="ListUsers">
 <UserTile></UserTile>
 </div>
 </div>
     }

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


function UserGestion() {
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
                <TableCell><FloatingActionButtons></FloatingActionButtons></TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  </div>
  ); 
}

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
                <TableCell><FloatingActionButtons></FloatingActionButtons></TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  </div>
  ); 
}

