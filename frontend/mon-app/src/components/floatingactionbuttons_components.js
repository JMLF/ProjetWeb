import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import FavoriteIcon from '@mui/icons-material/Favorite';
import NavigationIcon from '@mui/icons-material/Navigation';

import { Link } from 'react-router-dom';

function FloatingActionButtons(props) {
  console.log(props);
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

export default FloatingActionButtons;

