import './App.css';
import React, { useState, useEffect } from "react";
import Appbarrr from './components/appbar_components';
import TicketGestion from './components/ticketGestion_components';
import AddDeleteIcons from './components/add-delete-icons_components';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


function App() {

  return (
    <div className="App">
      <Appbarrr></Appbarrr>
      <br></br>
      <div style={{ height: '100px' }}></div>
      <ControlledAccordions></ControlledAccordions>
    </div>
  );
}

export default App;


function ControlledAccordions() {
  const [expanded, setExpanded] = React.useState('panel1');

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>
            Tickets
          </Typography>
          <Typography sx={{ color: 'text.secondary' }}>Gestions des tickets</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <TicketGestion></TicketGestion>
          <AddDeleteIcons path={"ticket"}> </AddDeleteIcons>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}