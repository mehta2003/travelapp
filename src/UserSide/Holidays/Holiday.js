import React from "react";
import {
  Typography,
  Box,
  Paper,
  Container,
  Button,
  TextField,
  MenuItem,
  Grid,
  IconButton,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import fort from "../../assets/fort.jpg";
import Navbar from "../Navbar";

// Update state definitions
function Holiday() {
  let navigate = useNavigate();
  const [searchCity, setSearchCity] = React.useState("");
  const [adult, setAdult] = React.useState(0);
  const [children, setChildren] = React.useState(0);
  const [departureDate, setDepartureDate] = React.useState(null);
  const [returnDate, setReturnDate] = React.useState(null);

  const handleCityChange = (e) => {
    setSearchCity(e.target.value);
  };
  
  // Remove duplicate arrivalDate state and handleDateChange
  const handleDepartureDateChange = (newDate) => {
    setDepartureDate(newDate);
    console.log("Selected departure date:", newDate);
  };

  const handleReturnDateChange = (newDate) => {
    setReturnDate(newDate);
    console.log("Selected return date:", newDate);
  };

  const handleclick2 = () => {
    if (!searchCity) {
      alert("Please select a city");
      return;
    }
    const newData = {
      city: searchCity,
      adult: adult,
      children: children,
      departureDate: departureDate,
      returnDate: returnDate, // Updated to use returnDate instead of arrivalDate
    };
    console.log("Search data:", newData);
    navigate("/Itinerary");
  };
  const decrementadult = () => {
    if (adult > 0) {
      setAdult(adult - 1);
    }
  };
  const decrementchildren = () => {
    if (children > 0) {
      setChildren(children - 1);
    }
  };
  const cities = [
    { name: "Ahmedabad" },
    { name: "Vadodara" },
    { name: "Surat" },
    { name: "Delhi" },
    { name: "Mumbai" },
    { name: "Bangalore" },
    { name: "Hyderabad" },
    { name: "Kolkata" },
    { name: "Pune" },
    { name: "Goa" },
  ];
 
  
    // Remove this duplicate code block
    /*
    const newData = {
      departcity: departcity,
      goingcity: goingcity,
      adult: adult,
      children: children,
      date: date,
    };
    setData(newData);
    console.log("Search data:", newData);
    navigate("/Itinerary");
    };
    */
  
    return (
      <>
        <Navbar />
        {/* Hero Section */}
        <Box
          sx={{
            width: '100%',
            minHeight: '100vh',
            position: 'relative',
            backgroundImage: 'linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.4)), url("https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-4.0.3")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            py: 8
          }}
        >
          <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
            <Box sx={{ maxWidth: '800px', mx: 'auto', mb: 6, textAlign: 'center' }}>
              <Typography
                variant="h2"
                sx={{
                  color: 'white',
                  fontWeight: '800',
                  textAlign: 'center',
                  mb: 2,
                  textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
                  fontSize: { xs: '2.5rem', md: '3.5rem' }
                }}
              >
                Discover Your Dream Vacation
              </Typography>
              <Typography
                variant="h5"
                sx={{
                  color: 'white',
                  textAlign: 'center',
                  mb: 4,
                  textShadow: '1px 1px 2px rgba(0,0,0,0.5)',
                  fontSize: { xs: '1.2rem', md: '1.5rem' }
                }}
              >
                Explore amazing destinations with our curated holiday packages
              </Typography>
            </Box>
  
            {/* Search Box */}
            <Paper
              elevation={12}
              sx={{
                p: { xs: 3, md: 5 },
                borderRadius: 4,
                backgroundColor: 'rgba(255, 255, 255, 0.95)',
                backdropFilter: 'blur(20px)',
                maxWidth: '1000px',
                margin: '0 auto',
                border: '1px solid rgba(255,255,255,0.2)',
                boxShadow: '0 8px 32px rgba(0,0,0,0.2)',
              }}
            >
              <Typography variant="h5" gutterBottom sx={{ mb: 4, fontWeight: 600, color: 'primary.main' }}>
                Plan Your Journey
              </Typography>
              <Grid container spacing={4}>
                <Grid item xs={12} md={6}>
                  <TextField
                    select
                    label="Search City"
                    value={searchCity}
                    onChange={handleCityChange}
                    fullWidth
                    variant="outlined"
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        borderRadius: 2,
                      }
                    }}
                  >
                    {cities.map((city) => (
                      <MenuItem key={city.name} value={city.name}>
                        {city.name}
                      </MenuItem>
                    ))}
                  </TextField>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Grid container spacing={2}>
                    <Grid item xs={6}>
                      <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker
                          label="Departure Date"
                          value={departureDate}
                          onChange={handleDepartureDateChange}
                          sx={{ width: '100%' }}
                        />
                      </LocalizationProvider>
                    </Grid>
                    <Grid item xs={6}>
                      <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker
                          label="Return Date"
                          value={returnDate}
                          onChange={handleReturnDateChange}
                          sx={{ width: '100%' }}
                          minDate={departureDate}
                        />
                      </LocalizationProvider>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={12}>
                  <Paper sx={{ p: 2, border: '1px solid #e0e0e0' }}>
                    <Typography variant="subtitle1" gutterBottom>
                      Travelers
                    </Typography>
                    <Grid container spacing={2}>
                      <Grid item xs={6}>
                        <Typography variant="body2" color="text.secondary">Adults</Typography>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mt: 1 }}>
                          <IconButton size="small" onClick={decrementadult} disabled={adult === 0}>
                            <RemoveCircleOutlineIcon />
                          </IconButton>
                          <Typography>{adult}</Typography>
                          <IconButton size="small" onClick={() => setAdult(adult + 1)}>
                            <AddCircleOutlineIcon />
                          </IconButton>
                        </Box>
                      </Grid>
                      <Grid item xs={6}>
                        <Typography variant="body2" color="text.secondary">Children</Typography>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mt: 1 }}>
                          <IconButton size="small" onClick={decrementchildren} disabled={children === 0}>
                            <RemoveCircleOutlineIcon />
                          </IconButton>
                          <Typography>{children}</Typography>
                          <IconButton size="small" onClick={() => setChildren(children + 1)}>
                            <AddCircleOutlineIcon />
                          </IconButton>
                        </Box>
                      </Grid>
                    </Grid>
                  </Paper>
                </Grid>
                <Grid item xs={12}>
                  <Button
                    variant="contained"
                    onClick={handleclick2}
                    fullWidth
                    sx={{
                      py: 2,
                      fontSize: '1.1rem',
                      borderRadius: 2,
                      backgroundColor: 'primary.main',
                      textTransform: 'none',
                      fontWeight: 600,
                      '&:hover': {
                        backgroundColor: 'primary.dark',
                        transform: 'translateY(-2px)',
                        boxShadow: 4
                      },
                      transition: 'all 0.3s ease'
                    }}
                  >
                    Search Holiday Packages
                  </Button>
                </Grid>
              </Grid>
            </Paper>
          </Container>
        </Box>
  
        {/* Popular Destinations Section */}
        <Container maxWidth="lg" sx={{ my: 8 }}>
          <Typography variant="h4" gutterBottom sx={{ mb: 4, fontWeight: 'bold' }}>
            Popular Destinations
          </Typography>
          <Grid container spacing={3}>
            {popularDestinations.map((dest, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card sx={{ 
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'transform 0.2s',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: 6
                  }
                }}>
                  <CardMedia
                    component="img"
                    height="200"
                    image={dest.image}
                    alt={dest.name}
                  />
                  <CardContent>
                    <Typography variant="h6" gutterBottom>
                      {dest.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {dest.description}
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', mt: 2 }}>
                      <Typography variant="h6" color="primary" sx={{ fontWeight: 'bold' }}>
                        Starting from {dest.price}
                      </Typography>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
  
        {/* Special Offers Section */}
        <Box sx={{ bgcolor: '#f5f5f5', py: 8 }}>
          <Container maxWidth="lg">
            <Typography variant="h4" gutterBottom sx={{ mb: 4, fontWeight: 'bold' }}>
              Special Offers
            </Typography>
            <Grid container spacing={3}>
              {specialOffers.map((offer, index) => (
                <Grid item xs={12} md={6} key={index}>
                  <Paper sx={{ 
                    p: 3,
                    display: 'flex',
                    alignItems: 'center',
                    gap: 3,
                    transition: 'transform 0.2s',
                    '&:hover': {
                      transform: 'translateX(4px)',
                      boxShadow: 3
                    }
                  }}>
                    <Box
                      component="img"
                      src={offer.image}
                      sx={{ width: 120, height: 120, borderRadius: 2 }}
                    />
                    <Box>
                      <Typography variant="h6" gutterBottom>
                        {offer.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary" paragraph>
                        {offer.description}
                      </Typography>
                      <Button variant="outlined" color="primary">
                        View Details
                      </Button>
                    </Box>
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </Container>
        </Box>
      </>
    );
  }
  const popularDestinations = [
    {
      name: "Goa Beaches",
      image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?ixlib=rb-4.0.3",
      description: "Experience the vibrant beach life and Portuguese heritage",
      price: "₹15,000"
    },
    {
      name: "Kerala Backwaters",
      image: "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?ixlib=rb-4.0.3",
      description: "Serene backwaters and ayurvedic experiences",
      price: "₹20,000"
    },
    {
      name: "Rajasthan Heritage",
      image: fort,
      description: "Royal palaces and desert adventures",
      price: "₹25,000"
    }
  ];
  
  const specialOffers = [
    {
      title: "Early Bird Discount",
      description: "Get 15% off on bookings made 60 days in advance",
      image: "https://images.unsplash.com/photo-1526772662000-3f88f10405ff?ixlib=rb-4.0.3"
    },
    {
      title: "Family Package",
      description: "Kids stay free in selected resorts",
      image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3"
    }
  ];


export default Holiday;
