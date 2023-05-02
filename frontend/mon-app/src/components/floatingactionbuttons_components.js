import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import EditIcon from '@mui/icons-material/Edit';
import { Delete } from '@mui/icons-material';
import { deleteCivilityById } from '../services/civility_service';
import { useNavigate } from "react-router-dom";

import { Link } from 'react-router-dom';

function FloatingActionButtons(props) {
  const navigate = useNavigate();

  const deleteCiv = async () => {
    try {
      console.log(props.objectId)
      const updatedUser = await deleteCivilityById(props.objectId);
      console.log("Civ deleted:", updatedUser);
      navigate('/');
      
    } catch (error) {
      console.error("Error deleting civ:", error);
    }
  };

  if(props.path == "civility-gestion") {
    return (
      <Box sx={{ '& > :not(style)': { m: 1 } }}>
        <Fab size="small" color="error" aria-label="edit" onClick={deleteCiv}>
          <Delete />
        </Fab>
      </Box>
    );
  }
  else {
    return (
      <Box sx={{ '& > :not(style)': { m: 1 } }}>
       <Link to={`/${props.path}/${props.objectId}`}>
        <Fab size="small" color="secondary" aria-label="edit">
          <EditIcon />
        </Fab>
        </Link>
      </Box>
    );
  }
}

export default FloatingActionButtons;

