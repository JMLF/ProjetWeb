import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { Menu } from '@mui/icons-material';
import { useNavigate, useLocation } from 'react-router-dom';

function Appbarrr({ onAction, displayGestion }) {
  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = () => {
    if (location.pathname === '/') {
      navigate('/about');
    } else {
      navigate('/');
    }
  };

  return (
    <AppBar>
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <Menu />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Gestion
        </Typography>
        <Button onClick={handleClick} color="inherit"> A propos</Button>
      </Toolbar>
    </AppBar>
  );
}

export default Appbarrr;