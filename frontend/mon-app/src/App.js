import './App.css';
import React, { useState, useEffect } from "react";
import Header from './components/header_components';
import getUser from './services/user_service';

function App() {
  return (
    <div className="App">
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
    <div className="UsersTiles">
      <div>{Loading? freee : userList}</div>
      <br></br>
    </div>
  ); 
}


