import './App.css';
import React, { useState, useEffect } from "react";
import Header from './components/header_components';
import Appbarrr from './components/appbar_components';
import UserTile from './components/userTile_components';
import UserGestion from './components/userGestion_components';
import CivilityGestion from './components/civilityGestion_components';
import AddDeleteIcons from './components/add-delete-icons_components';

import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';




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
          <br></br>
          <ControlledAccordions></ControlledAccordions>
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




function ControlledAccordions() {
  const [expanded, setExpanded] = React.useState(false);

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
            Users
          </Typography>
          <Typography sx={{ color: 'text.secondary' }}>Gestions des utilisateurs</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <UserGestion></UserGestion>
          <AddDeleteIcons path={"user"}> </AddDeleteIcons>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>Civilitées</Typography>
          <Typography sx={{ color: 'text.secondary' }}>
            Lister ajouter et modifier des civilitées
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <CivilityGestion></CivilityGestion>
          <AddDeleteIcons path={"civility"}> </AddDeleteIcons>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}