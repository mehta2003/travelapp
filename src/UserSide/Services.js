import React from 'react';
import { 
  Box, 
  Container, 
  Typography, 
  Grid, 
  Card, 
  CardContent, 
  Button,
  styled 
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import HotelIcon from '@mui/icons-material/Hotel';
import DirectionsBusIcon from '@mui/icons-material/DirectionsBus';

import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import Navbar from './Navbar';

const ServiceCard = styled(Card)(({ theme }) => ({
  transition: 'all 0.3s ease-in-out',
  cursor: 'pointer',
  overflow: 'hidden',
  boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
  '&:hover': {
    transform: 'translateY(-10px)',
    boxShadow: '0 8px 30px rgba(0,0,0,0.2)',
  },
}));

function Services() {
  const navigate = useNavigate();

  const services = [
    { 
      title: 'Hotels', 
      icon: <HotelIcon sx={{ fontSize: 60 }}/>, 
      path: '/Hotel', 
      color: '#FF385C',
      description: 'Find perfect stays at the best prices',
      features: ['Luxury Accommodations', '24/7 Room Service', 'Best Price Guarantee']
    },
    { 
      title: 'Flights', 
      icon: <FlightTakeoffIcon sx={{ fontSize: 60 }}/>, 
      path: '/Flight', 
      color: '#0066FF',
      description: 'Book flights to your dream destinations',
      features: ['Direct Flights', 'Flexible Booking', 'In-flight Meals']
    },
    { 
      title: 'Buses', 
      icon: <DirectionsBusIcon sx={{ fontSize: 60 }}/>, 
      path: '/Bus', 
      color: '#00A699',
      description: 'Comfortable bus journeys across cities',
      features: ['AC Buses', 'Sleeper Coaches', 'Live Tracking']
    },
   
    { 
      title: 'Holiday Packages', 
      icon: <BeachAccessIcon sx={{ fontSize: 60 }}/>, 
      path: '/Holiday', 
      color: '#6246EA',
      description: 'Curated holiday packages for you',
      features: ['All-Inclusive', 'Guided Tours', 'Local Experiences']
    },
  ];

  return (
    <>
      <Navbar />
      <Box sx={{ pt: 10, pb: 8, backgroundColor: '#f5f5f5' }}>
        <Container maxWidth="lg">
          <Typography 
            variant="h2" 
            align="center" 
            gutterBottom
            sx={{ 
              fontWeight: 700,
              mb: 6,
              background: 'linear-gradient(45deg, #FF385C 30%, #FF1F4C 90%)',
              backgroundClip: 'text',
              textFillColor: 'transparent',
            }}
          >
            Our Services
          </Typography>
          
          <Grid container spacing={4}>
            {services.map((service) => (
              <Grid item xs={12} md={6} key={service.title}>
                <ServiceCard>
                  <CardContent sx={{ 
                    p: 4,
                    '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.9)' }
                  }}>
                    <Box sx={{ 
                      display: 'flex', 
                      alignItems: 'center',
                      mb: 3 
                    }}>
                      <Box sx={{ 
                        color: service.color,
                        mr: 2
                      }}>
                        {service.icon}
                      </Box>
                      <Typography variant="h4" component="h2" sx={{ fontWeight: 600 }}>
                        {service.title}
                      </Typography>
                    </Box>
                    
                    <Typography variant="body1" sx={{ mb: 3, color: 'text.secondary' }}>
                      {service.description}
                    </Typography>

                    <Box sx={{ mb: 3 }}>
                      {service.features.map((feature, index) => (
                        <Typography 
                          key={index} 
                          variant="body2" 
                          sx={{ 
                            mb: 1,
                            color: 'text.secondary',
                            '&::before': {
                              content: '"•"',
                              color: service.color,
                              fontWeight: 'bold',
                              marginRight: '8px'
                            }
                          }}
                        >
                          {feature}
                        </Typography>
                      ))}
                    </Box>

                    <Button 
                      variant="contained" 
                      fullWidth
                      onClick={() => navigate(service.path)}
                      sx={{ 
                        backgroundColor: service.color,
                        py: 1.5,
                        '&:hover': {
                          backgroundColor: service.color,
                          opacity: 0.9,
                          transform: 'translateY(-2px)'
                        }
                      }}
                    >
                      Explore {service.title}
                    </Button>
                  </CardContent>
                </ServiceCard>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </>
  );
}

export default Services;