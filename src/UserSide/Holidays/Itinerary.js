import React from "react";
import { useNavigate } from "react-router-dom";
import { Box, Card, Typography, Paper, Container, Button, Grid, Rating } from "@mui/material";
import Toolbar from "@mui/material/Toolbar";
import AppBar from "@mui/material/AppBar";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import Hawamahal from "../../assets/Hawamahal.jpg";
import jodhpurFort from "../../assets/jodhpurfort.jpg";
import amberfort from "../../assets/amberfort.jpg";
import kedarnathtemple from "../../assets/kedarnathtemple.jpg";
import Banaras from "../../assets/Banaras.jpg";
// import Ladakhimage from "../../assets/ladakhimage.jpg";
import Navbar from "../Navbar";

function Itinerary() {
  let navigate = useNavigate();
  const itinerarydetails = [
 
    {
      Duration: "7 Nights 6 Days",
      city: "Jaipur",
      State: "Rajasthan",
      image: Hawamahal,
      price: "32,999",
      rating: 4.8,
      description: "Explore the Pink City's rich culture, architecture, and royal heritage",
      highlights: ["Amber Fort", "City Palace", "Local Bazaars"]
    },
    {
      Duration: "4 Nights 5 Days",
      city: "Jaisalmer",
      State: "Rajasthan",
      image: amberfort,  // Updated image
      price: "28,999",
      rating: 4.6,
      description: "Discover the Golden City with desert camping and historical tours",
      highlights: ["Jaisalmer Fort", "Sam Sand Dunes", "Desert Camping"]
    },
    {
      Duration: "6 Nights 7 Days",
      city: "Kerala",
      State: "Kerala",
      image: "https://images.unsplash.com/photo-1593693397690-362cb9666fc2",
      price: "35,999",
      rating: 4.9,
      description: "Experience the serene backwaters and lush greenery of God's own country",
      highlights: ["Alleppey Backwaters", "Munnar Tea Gardens", "Kovalam Beach"]
    },
    {
      Duration: "5 Nights 6 Days",
      city: "Goa",
      State: "Goa",
      image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2",
      price: "29,999",
      rating: 4.7,
      description: "Enjoy beach life, water sports, and vibrant nightlife",
      highlights: ["Calangute Beach", "Water Sports", "Old Goa Churches"]
    },
      {
        Duration: "6 Nights 7 Days",
        city: "Kedarnath",
        State: "Uttarakhand",
        image: kedarnathtemple,
        price: "38,999",
        rating: 4.9,
        description: "Embark on a spiritual journey to one of the holiest Hindu temples amidst breathtaking Himalayan peaks",
        highlights: ["Kedarnath Temple", "Helicopter Darshan", "Sonprayag Trek"]
      },
      {
        Duration: "4 Nights 5 Days",
        city: "Varanasi",
        State: "Uttar Pradesh",
        image: Banaras,
        price: "26,999",
        rating: 4.8,
        description: "Experience the spiritual essence of India's oldest city with its ancient ghats and rich cultural heritage",
        highlights: ["Ganga Aarti", "Morning Boat Ride", "Kashi Vishwanath Temple"]
      },
     
   
  ];

  const handleclick = () => {
    navigate("/Itineryinfo");
  };

  return (
    <>
      <Navbar />
      <Box sx={{ bgcolor: '#f5f5f5', minHeight: '100vh', pt: 8 }}>
        <Container maxWidth="xl" sx={{ py: 4 }}>
          <Typography variant="h3" gutterBottom sx={{ 
            textAlign: 'center', 
            mb: 6,
            fontWeight: 'bold',
            color: '#1a237e'
          }}>
            Explore Our Tour Packages
          </Typography>

          <Grid container spacing={4}>
            {itinerarydetails.map((detail, index) => (
              <Grid item xs={12} md={6} lg={4} key={index}>
                <Card sx={{ 
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'transform 0.3s ease-in-out',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: '0 12px 20px rgba(0,0,0,0.2)'
                  }
                }}>
                  <CardMedia
                    component="img"
                    height="240"
                    image={detail.image}
                    alt={detail.city}
                    sx={{ objectFit: 'cover' }}
                  />
                  <CardContent sx={{ flexGrow: 1, p: 3 }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                      <Typography variant="h5" component="div" sx={{ fontWeight: 'bold', color: '#1a237e' }}>
                        {detail.city}
                      </Typography>
                      <Rating value={detail.rating} precision={0.5} readOnly size="small" />
                    </Box>
                    
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                      <LocationOnIcon sx={{ mr: 1, color: 'primary.main' }} />
                      <Typography variant="body2" color="text.secondary">
                        {detail.State}
                      </Typography>
                    </Box>

                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                      <AccessTimeIcon sx={{ mr: 1, color: 'primary.main' }} />
                      <Typography variant="body2" color="text.secondary">
                        {detail.Duration}
                      </Typography>
                    </Box>

                    <Typography variant="body2" sx={{ mb: 2 }}>
                      {detail.description}
                    </Typography>

                    <Box sx={{ mb: 2 }}>
                      {detail.highlights.map((highlight, i) => (
                        <Typography key={i} variant="body2" sx={{ 
                          display: 'inline-block',
                          bgcolor: '#e3f2fd',
                          px: 1,
                          py: 0.5,
                          borderRadius: 1,
                          mr: 1,
                          mb: 1,
                          fontSize: '0.875rem'
                        }}>
                          {highlight}
                        </Typography>
                      ))}
                    </Box>

                    <Box sx={{ 
                      display: 'flex', 
                      justifyContent: 'space-between', 
                      alignItems: 'center',
                      mt: 'auto'
                    }}>
                      <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <CurrencyRupeeIcon sx={{ color: 'primary.main' }} />
                        <Typography variant="h6" color="primary" sx={{ fontWeight: 'bold' }}>
                          {detail.price}
                        </Typography>
                      </Box>
                      <Button
                        variant="contained"
                        onClick={handleclick}
                        sx={{
                          bgcolor: 'primary.main',
                          '&:hover': {
                            bgcolor: 'primary.dark',
                          }
                        }}
                      >
                        Book Now
                      </Button>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </>
  );
}

export default Itinerary;
