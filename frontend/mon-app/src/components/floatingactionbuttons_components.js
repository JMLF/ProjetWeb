import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import EditIcon from '@mui/icons-material/Edit';
import { Delete } from '@mui/icons-material';
import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { Snackbar } from "@mui/material";
import {Alert} from "@mui/material";
import { Link } from 'react-router-dom';
import { deleteTicketById } from '../services/ticket_service';

function FloatingActionButtons(props) {

  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState("success");

  const deleteTicket = async () => {
    try {
      console.log(props.objectId)
     const deletedTicket = await deleteTicketById(props.objectId);
      console.log("Ticket deleted:", deletedTicket);
      
      setSnackbarMessage("Ticket supprimé avec succès");
      setSnackbarSeverity("success");
      setOpenSnackbar(true);

      props.onTicketDeleted(props.objectId);
      
    } catch (error) {
      console.error("Error deleting civ:", error);
      setSnackbarMessage("Erreur lors de la suppression du ticket" , error);
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
      <Box sx={{ '& > :not(style)': { m: 1 } }}>
         <Link to={`/${props.path}/${props.objectId}`}>
        <Fab size="small" color="secondary" aria-label="edit">
          <EditIcon />
        </Fab>
        </Link>
        <Fab size="small" color="error" aria-label="edit" onClick={deleteTicket}>
          <Delete />
        </Fab>
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
      </Box>
    );
 
}

export default FloatingActionButtons;

