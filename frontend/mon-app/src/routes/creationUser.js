import React, { useState, useEffect } from "react";
import { Snackbar } from "@mui/material";
import {Alert} from "@mui/material";
import { createUser} from "../services/user_service";
import getCivility from "../services/civility_service";
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

export default function UserCreationPage() {
    const navigate = useNavigate();

     const [data, setData] = useState({
      surname: "",
      name: "",
      civilityId: undefined
    });
  const [civilities, setCivilities] = useState([]);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState("success");

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

  const handleCreateUser = async () => {
    try {
      const newUser = await createUser(data);
      console.log("User created:", newUser);
      setSnackbarMessage("Utilisateur créé avec succès");
      setSnackbarSeverity("success");
      setOpenSnackbar(true);
      navigate('/');
    } catch (error) {
      console.error("Error creating user:", error);
      setSnackbarMessage("Erreur lors de la création de l'utilisateur");
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

 

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Créer un utilisateur
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
          <Button
            variant="contained"
            color="primary"
            onClick={handleCreateUser}
          >
            Créer
          </Button>
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