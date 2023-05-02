import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getUserById } from "../services/user_service";
//import { getCivility } from "../services/civility_service";
import getCivility from "../services/civility_service";
import {
  Container,
  TextField,
  Button,
  Grid,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";

export default function AdminUser() {
  const { userId } = useParams();

  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [civilities, setCivilities] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const userData = await getUserById(userId);
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

  useEffect(() => {
    async function fetchCivilities() {
      try {
        const civilityData = await getCivility();
        console.log(civilityData);
        setCivilities(civilityData);
      } catch (error) {
        console.error(error);
      }
    }

    fetchCivilities();
  }, []);

  const handleChange = (event) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };

  const handleUpdateUser = () => {
    // Mettre à jour l'utilisateur en utilisant la fonction d'update de l'API
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Modifier l'utilisateur
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Prénom"
            name="surname"
            value={data.surname}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Nom"
            name="name"
            value={data.name}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="ID"
            name="id"
            value={data.id}
            onChange={handleChange}
            disabled
          />
        </Grid>
         <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
            <InputLabel>Civilité</InputLabel>
            <Select
              value={data.civilityId}
              name="civilityId"
              onChange={handleChange}
            >
              {civilities.map((civility) => (
                <MenuItem key={civility.id} value={civility.id}>
                  {civility.status}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Statut de civilité"
            name="civilityStatus"
            value={data.civility.status}
            onChange={handleChange}
            disabled
          />
        </Grid>
        <Grid item xs={12}>
          <Button
            variant="contained"
            color="primary"
            onClick={handleUpdateUser}
          >
            Mettre à jour
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
}
