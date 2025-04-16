import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, Box, IconButton, Menu, MenuItem ,Divider} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import HotelIcon from '@mui/icons-material/Hotel';
import DirectionsBusIcon from '@mui/icons-material/DirectionsBus';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import MenuIcon from '@mui/icons-material/Menu';
import ExploreIcon from '@mui/icons-material/Explore';
import PublicIcon from '@mui/icons-material/Public';


function Navbar() {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const navItems = [
    { title: 'Hotels', icon: <HotelIcon />, path: '/Hotel' },
    { title: 'Flights', icon: <FlightTakeoffIcon />, path: '/Flight' },
    { title: 'Buses', icon: <DirectionsBusIcon />, path: '/Bus' },
    { title: 'Holidays', icon: <BeachAccessIcon />, path: '/Holiday' },
  ];

  return (
    <AppBar position="fixed" sx={{ 
      backgroundColor: 'rgba(255, 255, 255, 0.95)',
      backdropFilter: 'blur(8px)',
      boxShadow: '0 2px 15px rgba(0,0,0,0.1)',
      height: '64px' // Added fixed height
    }}>
      <Toolbar sx={{ 
        padding: { xs: 1, md: 2 }, // Reduced padding
        gap: 2, // Reduced gap
        minHeight: '64px !important' // Override default Toolbar height
      }}>
        <Box sx={{ 
          display: 'flex', 
          alignItems: 'center', 
          gap: 1, // Reduced gap
          flexGrow: 1,
          cursor: 'pointer' 
        }} onClick={() => navigate('/')}>
          <Box sx={{ 
            display: 'flex', 
            alignItems: 'center',
            position: 'relative',
            background: 'linear-gradient(135deg, #FF385C, #FF1F4C)', // Changed to match theme
            borderRadius: '50%',
            p: 0.75,
            boxShadow: '0 2px 10px rgba(255, 56, 92, 0.3)' // Updated shadow color
          }}>
            <PublicIcon sx={{ 
              color: 'rgba(255, 255, 255, 0.9)', 
              fontSize: 24,
              position: 'absolute'
            }} />
            <ExploreIcon sx={{ 
              color: 'white', 
              fontSize: 30,
              animation: 'rotate 20s linear infinite',
              '@keyframes rotate': {
                '0%': { transform: 'rotate(0deg)' },
                '100%': { transform: 'rotate(360deg)' }
              }
            }} />
          </Box>
          <Typography 
            variant="h6" // Changed from h5 to h6
            sx={{ 
              fontWeight: 700,
              fontFamily: '"Poppins", sans-serif',
              letterSpacing: '0.5px',
              background: 'linear-gradient(45deg, #FF385C, #FF1F4C)', // Matched with theme
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              color: 'transparent',
              textShadow: '1px 1px 1px rgba(0,0,0,0.1)'
            }}
          >
            Wanderlust Journeys
          </Typography>
        </Box>

        <Box sx={{ 
          display: { xs: 'none', md: 'flex' }, 
          alignItems: 'center', 
          gap: 3 // Reduced gap
        }}>
          {navItems.map((item) => (
            <Button
              key={item.title}
              startIcon={React.cloneElement(item.icon, { 
                sx: { fontSize: 20, mr: 0.5 } // Reduced icon size
              })}
              onClick={() => navigate(item.path)}
              sx={{
                color: '#333',
                fontSize: '0.95rem', // Reduced font size
                fontWeight: 500,
                px: 2, // Reduced padding
                py: 1,
                borderRadius: 2,
                transition: 'all 0.3s ease',
                '&:hover': {
                  backgroundColor: 'rgba(255, 56, 92, 0.1)',
                  color: '#FF385C',
                  transform: 'translateY(-2px)'
                }
              }}
            >
              {item.title}
            </Button>
          ))}
          <Box sx={{ 
            ml: 3, // Reduced margin
            display: 'flex', 
            gap: 2, // Reduced gap
            borderLeft: '2px solid #eee',
            pl: 3 // Reduced padding
          }}>
            <Button
              variant="outlined"
              onClick={() => navigate('/login')}
              sx={{
                color: '#FF385C',
                borderColor: '#FF385C',
                borderRadius: 2,
                px: 2.5, // Reduced padding
                py: 0.75,
                fontSize: '0.9rem', // Reduced font size
                fontWeight: 500,
                '&:hover': {
                  borderColor: '#FF385C',
                  backgroundColor: 'rgba(255, 56, 92, 0.1)',
                }
              }}
            >
              Login
            </Button>
            <Button
              variant="contained"
              onClick={() => navigate('/signup')}
              sx={{
                backgroundColor: '#FF385C',
                borderRadius: 2,
                px: 2.5, // Reduced padding
                py: 0.75,
                fontSize: '0.9rem', // Reduced font size
                fontWeight: 500,
                '&:hover': {
                  backgroundColor: '#FF1F4C',
                }
              }}
            >
              Sign Up
            </Button>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;