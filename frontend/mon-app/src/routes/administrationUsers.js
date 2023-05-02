import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Snackbar } from "@mui/material";
import {Alert} from "@mui/material";
import { getUserById, updateUser , deleteUserById} from "../services/user_service";
import getCivility from "../services/civility_service";
import { Box } from "@mui/system";
import { useNavigate } from 'react-router-dom';
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
  const navigate = useNavigate();
  const { userId } = useParams();


  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [civilities, setCivilities] = useState([]);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState("success");


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

  const handleUpdateUser = async () => {
    try {
      const updatedUser = await updateUser(data.id, data);
      console.log("User updated:", updatedUser);
      setSnackbarMessage("Utilisateur modifié avec succès");
      setSnackbarSeverity("success");
      setOpenSnackbar(true);
      navigate('/');
    } catch (error) {
      console.error("Error updating user:", error);
      setSnackbarMessage("Erreur lors de la modification de l'utilisateur" , error);
    setSnackbarSeverity("error");
    setOpenSnackbar(true);
    }
  };

  const deleteUser = async () => {
    try {
      const updatedUser = await deleteUserById(data.id);
      console.log("User updated:", updatedUser);
      
      setSnackbarMessage("Utilisateur supprimé avec succès");
      setSnackbarSeverity("success");
      setOpenSnackbar(true);
      navigate('/');
    } catch (error) {
      console.error("Error updating user:", error);
      setSnackbarMessage("Erreur lors de la suppression de l'utilisateur");
    setSnackbarSeverity("error");
    setOpenSnackbar(true);
    }
  };

  const handleCloseSnackbar = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenSnackbar(false);
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
          <Box component="span" marginLeft={2}>
          <Button 
            variant="contained"
            color="error"
            onClick={deleteUser}
          >
           Supprimer l'utilisateur
          </Button>
          </Box>
        </Grid>
      </Grid>
      <Snackbar
  open={openSnackbar}
  autoHideDuration={6000}
  onClose={handleCloseSnackbar}
  anchorOrigin={{ vertical: "top", horizontal: "right" }}
>
  <Alert onClose={handleCloseSnackbar} severity={snackbarSeverity} sx={{ width: "100%" }}>
    {snackbarMessage}
  </Alert>
</Snackbar>
    </Container>
  );
}
