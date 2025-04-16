import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import { styled } from "@mui/material/styles";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,IconButton,
  Menu,
  MenuItem,
  TextField,
  Stack,Link,Divider,

  Rating
} from "@mui/material";
import {
  FlightTakeoff as FlightTakeoffIcon,
  Hotel as HotelIcon,
  DirectionsBus as DirectionsBusIcon,
  BeachAccess as BeachAccessIcon,
  TempleBuddhist,

} from '@mui/icons-material';
import { useNavigate } from "react-router-dom";
// import Dashboard2 from "./../assets/Dashboard2.jpg";
import {
  Facebook,
  Instagram,
  Twitter,
  LocationOn,
  Star
} from '@mui/icons-material';
import Goldentemple from './../assets/Goldentemple.jpg';
import TajMahal from './../assets/TajMahal.jpg';
import Banaras from './../assets/Banaras.jpg';
import premmandir from './../assets/premmandir.jpg';
import Hawamahal from './../assets/Hawamahal.jpg';
const backgroundImages = [
  TajMahal, // Taj Mahal
  Goldentemple, // Golden Temple
  Banaras, // Varanasi Ghats
  premmandir,
  Hawamahal // Hampi
, // Jagannath Puri
];

const heroTexts = [
  "Taj Mahal - Marvel in White Marble",
  "Golden Temple - Divine Serenity",
  "Varanasi - The Spiritual Heart of India",
  "PremMandir - Ancient  place of krishna in Vrundavan ",
  
];

// Update HeroSection styling for better image display
const HeroSection = styled(Box)(({ theme }) => ({
  height: '100vh',
  position: 'relative',
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  [theme.breakpoints.down('sm')]: {
    height: '60vh',
  }
}));

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

const FeatureCard = styled(Box)(({ theme }) => ({
  padding: theme.spacing(3),
  textAlign: 'center',
  transition: 'transform 0.3s ease',
  cursor: 'pointer',
  '&:hover': {
    transform: 'translateY(-5px)',
  },
}));

// Add Main component definition
const Main = styled('main')(({ theme }) => ({
  flexGrow: 1,
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: theme.palette.background.default,
}));

function Dashboard() {
  const navigate = useNavigate();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [email, setEmail] = useState('');

  // Add services array definition
  const services = [
    {
      title: 'Hotels',
      icon: <HotelIcon sx={{ fontSize: 40 }}/>,
      path: '/Hotel',
      color: '#FF385C',
      description: 'Find perfect stays at the best prices',
      features: ['Best Price Guarantee', '24/7 Support', 'Free Cancellation']
    },
    {
      title: 'Flights',
      icon: <FlightTakeoffIcon sx={{ fontSize: 40 }}/>,
      path: '/Flight',
      color: '#0066FF',
      description: 'Book flights to your dream destinations',
      features: ['Direct Flights', 'Multiple Airlines', 'Price Alerts']
    },
    {
      title: 'Buses',
      icon: <DirectionsBusIcon sx={{ fontSize: 40 }}/>,
      path: '/Bus',
      color: '#00A699',
      description: 'Comfortable bus journeys across cities',
      features: ['Online Tracking', 'Seat Selection', 'Instant Booking']
    },
    {
      title: 'Holidays',
      icon: <BeachAccessIcon sx={{ fontSize: 40 }}/>,
      path: '/Holiday',
      color: '#6246EA',
      description: 'Curated holiday packages for you',
      features: ['All-Inclusive', 'Guided Tours', 'Custom Packages']
    }
  ];

  // Add featuredDestinations array definition
  const featuredDestinations = [
    {
      title: 'Rajasthan Heritage Tour',
      image: 'https://images.unsplash.com/photo-1599661046289-e31897846e41',
      price: '₹45,999',
      rating: 4.9,
      description: 'Royal palaces, desert safaris & cultural heritage'
    },
    {
      title: 'Kerala Backwaters',
      image: 'https://images.unsplash.com/photo-1593693397690-362cb9666fc2',
      price: '₹35,999',
      rating: 4.8,
      description: 'Houseboat stays, ayurveda & pristine beaches'
    },
    {
      title: 'Varanasi Spiritual Tour',
      image: 'https://images.unsplash.com/photo-1561361513-2d000a50f0dc',
      price: '₹29,999',
      rating: 4.7,
      description: 'Sacred ghats, ancient temples & cultural immersion'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === backgroundImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    setEmail('');
  };

  return (
    <>
      <Navbar />
      <Main>
        <HeroSection
          sx={{
            backgroundImage: `url(${backgroundImages[currentImageIndex]})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            transition: 'background-image 1s ease-in-out',
          }}
        >
          <Container maxWidth="lg" sx={{ height: '100%', position: 'relative', zIndex: 1 }}>
            <Box
              display="flex"
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
              height="100%"
              color="white"
              textAlign="center"
            >
              <Typography 
                variant="h2" 
                component="h1" 
                gutterBottom 
                fontWeight="bold"
                sx={{
                  textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
                  animation: 'fadeIn 1s ease-in',
                  mb: 4
                }}
              >
                {heroTexts[currentImageIndex]}
              </Typography>
             
            </Box>
          </Container>
        </HeroSection>

        <Box sx={{ height: 80 }} /> {/* Spacing */}

        {/* Services Section */}
        <Box sx={{ 
          py: 8, 
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          color: 'white'
        }}>
          <Container maxWidth="lg">
            <Typography
              variant="h3"
              align="center"
              gutterBottom
              sx={{ fontWeight: 700, mb: 6 }}
            >
              Our Services
            </Typography>
            <Grid container spacing={4} justifyContent="center">
              {services.map((service) => (
                <Grid item xs={12} sm={6} md={3} key={service.title}>
                  <ServiceCard onClick={() => navigate(service.path)}>
                    <CardContent>
                      <Box sx={{ color: service.color, mb: 2 }}>
                        {service.icon}
                      </Box>
                      <Typography variant="h6" gutterBottom>
                        {service.title}
                      </Typography>
                      <Typography color="text.secondary" sx={{ mb: 2 }}>
                        {service.description}
                      </Typography>
                      <Stack spacing={1}>
                        {service.features.map((feature, index) => (
                          <Typography key={index} variant="body2">
                            • {feature}
                          </Typography>
                        ))}
                      </Stack>
                    </CardContent>
                  </ServiceCard>
                </Grid>
              ))}
            </Grid>
          </Container>
        </Box>

        <Box sx={{ height: 80 }} /> {/* Spacing */}

        {/* Featured Destinations */}
        <Box sx={{ py: 8, backgroundColor: '#f5f5f5' }}>
          <Container maxWidth="lg">
            <Typography
              variant="h3"
              align="center"
              gutterBottom
              sx={{ fontWeight: 700, color: '#1a237e', mb: 6 }}
            >
              Popular Destinations
            </Typography>
            <Grid container spacing={4}>
              {featuredDestinations.map((destination) => (
                <Grid item xs={12} md={4} key={destination.title}>
                  <FeatureCard>
                    <Box
                      component="img"
                      src={destination.image}
                      alt={destination.title}
                      sx={{
                        width: '100%',
                        height: 240,
                        objectFit: 'cover',
                        borderRadius: 2,
                        mb: 2
                      }}
                    />
                    <Typography variant="h5" gutterBottom>
                      {destination.title}
                    </Typography>
                    <Typography color="text.secondary" paragraph>
                      {destination.description}
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                      <Rating value={destination.rating} precision={0.1} readOnly />
                      <Typography variant="body2" sx={{ ml: 1 }}>
                        {destination.rating}
                      </Typography>
                    </Box>
                    <Typography variant="h6" color="primary">
                      {destination.price}
                    </Typography>
                  </FeatureCard>
                </Grid>
              ))}
            </Grid>
          </Container>
        </Box>

        {/* Footer Section */}
        <Box sx={{ 
          bgcolor: '#1a1a1a', 
          color: 'white',
          pt: 8,
          pb: 4
        }}>
          <Container maxWidth="lg">
            <Grid container spacing={4}>
              <Grid item xs={12} md={4}>
                <Typography variant="h6" sx={{ color: '#fff', mb: 3 }}>About Us</Typography>
                <Typography variant="body2" sx={{ color: '#999', mb: 3 }}>
                  We are dedicated to making your travel dreams come true with exceptional service and unforgettable experiences.
                </Typography>
                <Stack direction="row" spacing={2}>
                  <IconButton color="primary"><Facebook /></IconButton>
                  <IconButton color="primary"><Instagram /></IconButton>
                  <IconButton color="primary"><Twitter /></IconButton>
                </Stack>
              </Grid>

              <Grid item xs={6} md={2}>
                <Typography variant="h6" sx={{ color: '#fff', mb: 3 }}>Quick Links</Typography>
                <Stack spacing={2}>
                  {[
                    { title: 'About Us', path: '/about' },
                    { title: 'Contact', path: '/contact' },
                    { title: 'Support', path: '/support' },
                    { title: 'FAQs', path: '/faqs' }
                  ].map((item) => (
                    <Link
                      key={item.title}
                      component="button"
                      onClick={() => navigate(item.path)}
                      sx={{
                        color: '#999',
                        textDecoration: 'none',
                        '&:hover': { color: '#FF385C' },
                        textAlign: 'left'
                      }}
                    >
                      {item.title}
                    </Link>
                  ))}
                </Stack>
              </Grid>

              <Grid item xs={6} md={2}>
                <Typography variant="h6" sx={{ color: '#fff', mb: 3 }}>Services</Typography>
                <Stack spacing={2}>
                  {services.map((service) => (
                    <Link
                      key={service.title}
                      component="button"
                      onClick={() => navigate(service.path)}
                      sx={{
                        color: '#999',
                        textDecoration: 'none',
                        '&:hover': { color: '#FF385C' },
                        textAlign: 'left'
                      }}
                    >
                      {service.title}
                    </Link>
                  ))}
                </Stack>
              </Grid>

              <Grid item xs={12} md={4}>
                <Typography variant="h6" sx={{ color: '#fff', mb: 3 }}>Newsletter</Typography>
                <Typography variant="body2" sx={{ color: '#999', mb: 2 }}>
                  Subscribe for exclusive travel deals and updates.
                </Typography>
                <Box component="form" onSubmit={handleNewsletterSubmit} sx={{ display: 'flex', gap: 1 }}>
                  <TextField
                    size="small"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    sx={{
                      backgroundColor: 'rgba(255,255,255,0.1)',
                      borderRadius: 1,
                      input: { color: '#fff' }
                    }}
                  />
                  <Button 
                    type="submit"
                    variant="contained"
                    sx={{ 
                      bgcolor: '#FF385C',
                      '&:hover': { bgcolor: '#FF1F4C' }
                    }}
                  >
                    Subscribe
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Main>
    </>
  );
}

export default Dashboard;
