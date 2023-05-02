import React, { useState, useEffect } from "react";
import { Snackbar } from "@mui/material";
import {Alert} from "@mui/material";
import { createCivility } from "../services/civility_service";
import { useNavigate } from 'react-router-dom';
import {
  Container,
  TextField,
  Button,
  Grid,
  Typography,
} from "@mui/material";

export default function CivilityCreationPage() {
    const navigate = useNavigate();

     const [data, setData] = useState([]);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState("success");


  const handleChange = (event) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };

  const handleCreateCiv = async () => {
    try {
      const newUser = await createCivility(data);
      setSnackbarMessage("Civilité créé avec succès");
      setSnackbarSeverity("success");
      setOpenSnackbar(true);
      navigate('/');
    } catch (error) {
      console.error("Error creating civ:", error);
      setSnackbarMessage("Erreur lors de la création de la civilité");
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
        Créer une civilité
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Label"
            name="status"
            value={data.status}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <Button
            variant="contained"
            color="primary"
            onClick={handleCreateCiv}
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