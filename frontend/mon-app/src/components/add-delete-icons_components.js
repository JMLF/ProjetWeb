import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import { Link } from 'react-router-dom';

function AddDeleteIcons(props) {
    return(
        <Box sx={{ '& > :not(style)': { m: 1 } }}>
                 <Link to={`/create/${props.path}`}>
        <Fab variant="extended">
        <AddIcon sx={{ mr: 1 }} />
          Add a new one
        </Fab>
        </Link>
      </Box>
    );
}

export default AddDeleteIcons;