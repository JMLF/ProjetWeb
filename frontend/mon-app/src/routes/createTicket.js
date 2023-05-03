import React, { useState, useEffect } from "react";
import { Snackbar } from "@mui/material";
import { Alert } from "@mui/material";
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
import { createTicket } from "../services/ticket_service";

export default function TicketCreationPage() {
  const navigate = useNavigate();

  const [data, setData] = useState({
    titre: "",
    description: "",
  });

  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState("success");

  const handleChange = (event) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };

  const handleCreateTicket = async () => {
    try {
      const newTicket = await createTicket(data);
      console.log("Ticket created:", newTicket);
      setSnackbarMessage("Ticket créé avec succès");
      setSnackbarSeverity("success");
      setOpenSnackbar(true);
      setTimeout(function () {
        navigate('/');
      }, 500);
    } catch (error) {
      console.error("Error creating ticket:", error);
      setSnackbarMessage("Erreur lors de la création du ticket");
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
        Créer un ticket
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Titre"
            name="titre"
            value={data.titre}
            onChange={handleChange}
            required
            inputProps={{ maxLength: 100 }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Description"
            name="description"
            value={data.description}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <Button
            variant="contained"
            color="primary"
            onClick={handleCreateTicket}
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