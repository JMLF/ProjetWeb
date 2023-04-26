import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import { Delete } from '@mui/icons-material';

function AddDeleteIcons() {
    return(
        <Box sx={{ '& > :not(style)': { m: 1 } }}>
        <Fab variant="extended">
        <AddIcon sx={{ mr: 1 }} />
          Add a new one
        </Fab>
        <Fab variant="extended">
          <Delete x={{ mr: 1 }}> </Delete>
          Delete an existing one 
        </Fab>
      </Box>
    );
}

export default AddDeleteIcons;