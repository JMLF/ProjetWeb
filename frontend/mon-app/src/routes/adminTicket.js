import React, { useState, useEffect } from 'react';
import {
  Container,
  Typography,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
} from '@mui/material';
import { useNavigate} from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { getTicketsById, updateTicket } from '../services/ticket_service';

const TicketManagementPage = () => {
    const navigate = useNavigate();
  const { ticketId } = useParams();


  const [ticket, setTicket] = useState({
    titre: '',
    description: '',
    status: 'A_FAIRE',
  });

  useEffect(() => {
    async function fetchData() {
      try {
        const ticketData = await getTicketsById(ticketId);
        console.log(ticketData);
        setTicket(ticketData);

      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, []);



  const handleChange = (event) => {
    const { name, value } = event.target;
    setTicket({ ...ticket, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
        const updatedTicket = await updateTicket(ticket.id, ticket);
        console.log("Ticket updated:", updatedTicket);
        navigate('/');
      } catch (error) {
        console.error("Error updating ticket:", error);
      }
    };
 

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" align="center" gutterBottom>
        Gestion des tickets
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          label="Titre"
          name="titre"
          value={ticket.titre}
          onChange={handleChange}
          required
          inputProps={{ maxLength: 100 }}
          margin="normal"
        />
        <TextField
          fullWidth
          label="Description"
          name="description"
          value={ticket.description}
          onChange={handleChange}
          inputProps={{ maxLength: 100 }}
          margin="normal"
        />
        <FormControl fullWidth margin="normal">
          <InputLabel id="status-label">Status</InputLabel>
          <Select
            labelId="status-label"
            name="status"
            value={ticket.status}
            onChange={handleChange}
          >
            <MenuItem value="A_FAIRE">A faire</MenuItem>
            <MenuItem value="EN_COURS">En cours</MenuItem>
            <MenuItem value="TERMINE">Terminé</MenuItem>
          </Select>
        </FormControl>
        <Button fullWidth type="submit" variant="contained" color="primary">
          Mettre à jour
        </Button>
      </form>
    </Container>
  );
};

export default TicketManagementPage;