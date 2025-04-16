import React, { useState } from "react";
import { 
  Box, Card, Typography, Container, Grid, Chip, Button,
  InputAdornment, TextField, FormControl, Select, MenuItem
} from "@mui/material";
import Navbar from "../Navbar";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Rating from "@mui/material/Rating";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import KingBedIcon from '@mui/icons-material/KingBed';
import FilterListIcon from '@mui/icons-material/FilterList';
import SortIcon from '@mui/icons-material/Sort';
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate } from 'react-router-dom';

function Hotelinfo() {
  const [value, setValue] = useState(4);
  const [sortBy, setSortBy] = useState('recommended');
  const [priceRange, setPriceRange] = useState('all');
  const navigate = useNavigate();

  const hotel = [
     
    {
      name: "Hyatt Regency Ahmedabad",
      price: "₹8,500",
      ratings: "4.6",
      address: "17/A, Ashram Road, Ahmedabad, Gujarat",
      roomtype: "King Room",
      image: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?ixlib=rb-4.0.3",
      amenities: ["Pool", "Spa", "River View", "24/7 Dining"],
      description: "5-star luxury hotel overlooking Sabarmati River",
      perNight: true
    },
    {
      name: "ITC Narmada Ahmedabad",
      price: "₹12,000",
      ratings: "4.8",
      address: "Judges Bungalow Road, Bodakdev, Ahmedabad",
      roomtype: "Luxury Suite",
      image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b",
      amenities: ["Multiple Restaurants", "Spa", "Business Center", "Luxury Lounge"],
      description: "Gujarat's first luxury hotel with LEED Platinum certification",
      perNight: true
    },
    {
      name: "Novotel Ahmedabad",
      price: "₹6,500",
      ratings: "4.4",
      address: "SG Highway, Ahmedabad, Gujarat",
      roomtype: "Superior Room",
      image: "https://images.unsplash.com/photo-1618773928121-c32242e63f39",
      amenities: ["Pool", "Gym", "Restaurant", "Meeting Rooms"],
      description: "Modern hotel in the business district of Ahmedabad",
      perNight: true
    },
    {
      name: "Renaissance Ahmedabad Hotel",
      price: "₹9,500",
      ratings: "4.5",
      address: "Besides Gujarat High Court, SG Highway, Ahmedabad",
      roomtype: "Deluxe Room",
      image: "https://images.unsplash.com/photo-1595576508898-0ad5c879a061",
      amenities: ["Rooftop Pool", "Spa", "Fine Dining", "Bar"],
      description: "Contemporary luxury hotel with city views",
      perNight: true
    },
    {
      name: "Courtyard by Marriott Ahmedabad",
      price: "₹7,500",
      ratings: "4.3",
      address: "Satellite Road, Ahmedabad, Gujarat",
      roomtype: "Premium Room",
      image: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461",
      amenities: ["24/7 Fitness Center", "Restaurant", "Business Center", "Meeting Spaces"],
      description: "Business-friendly hotel in the heart of Ahmedabad",
      perNight: true
    },
    {
      name: "The Fern Ahmedabad",
      price: "₹5,500",
      ratings: "4.2",
      address: "Sola Road, SG Highway, Ahmedabad",
      roomtype: "Executive Room",
      image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304",
      amenities: ["Eco-friendly", "Restaurant", "Business Center", "Wifi"],
      description: "Environmentally sensitive luxury hotel",
      perNight: true
    }
  ];
  return (
    <>
      <Navbar />
      <Box sx={{ 
        minHeight: '100vh', 
        pt: 8,
        background: 'linear-gradient(to right, #e0eafc, #cfdef3)',  // Light blue gradient
        // Alternative: Use background image
        // backgroundImage: 'url("https://images.unsplash.com/photo-1566665797739-1674de7a421a?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80")',
        // backgroundSize: 'cover',
        // backgroundAttachment: 'fixed',
        // backgroundPosition: 'center',
      }}>
        <Container maxWidth="lg">
          {/* Search and Filter Section */}
          <Box sx={{ 
            py: 3, 
            backdropFilter: 'blur(8px)',
            backgroundColor: 'rgba(255, 255, 255, 0.9)',
            borderRadius: 2,
            mb: 3
          }}>
            <Grid container spacing={2} alignItems="center">
              <Grid item xs={12} md={4}>
                <TextField
                  fullWidth
                  placeholder="Search hotels..."
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <SearchIcon />
                      </InputAdornment>
                    ),
                  }}
                  sx={{ bgcolor: 'white', borderRadius: 1 }}
                />
              </Grid>
              <Grid item xs={12} md={4}>
                <FormControl fullWidth sx={{ bgcolor: 'white', borderRadius: 1 }}>
                  <Select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    startAdornment={
                      <InputAdornment position="start">
                        <SortIcon />
                      </InputAdornment>
                    }
                  >
                    <MenuItem value="recommended">Recommended</MenuItem>
                    <MenuItem value="price-low">Price: Low to High</MenuItem>
                    <MenuItem value="price-high">Price: High to Low</MenuItem>
                    <MenuItem value="rating">Rating</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} md={4}>
                <FormControl fullWidth sx={{ bgcolor: 'white', borderRadius: 1 }}>
                  <Select
                    value={priceRange}
                    onChange={(e) => setPriceRange(e.target.value)}
                    startAdornment={
                      <InputAdornment position="start">
                        <FilterListIcon />
                      </InputAdornment>
                    }
                  >
                    <MenuItem value="all">All Prices</MenuItem>
                    <MenuItem value="0-5000">Under ₹5,000</MenuItem>
                    <MenuItem value="5000-10000">₹5,000 - ₹10,000</MenuItem>
                    <MenuItem value="10000+">Above ₹10,000</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
            </Grid>
          </Box>

          {/* Hotel Cards */}
          <Grid container spacing={3}>
            {hotel.map((hotelItem, index) => (
              <Grid item xs={12} md={6} lg={4} key={index}>
                <Card sx={{ 
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'transform 0.2s',
                  backgroundColor: 'rgba(255, 255, 255, 0.95)',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: 6
                  }
                }}>
                  <CardMedia
                    component="img"
                    sx={{ 
                      height: 250,
                      width: '100%',
                      objectFit: 'cover'
                    }}
                    image={hotelItem.image}
                    alt={hotelItem.name}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Box sx={{ mb: 2 }}>
                      <Typography variant="h5" component="h2" gutterBottom>
                        {hotelItem.name}
                      </Typography>
                      <Rating value={Number(hotelItem.ratings)} readOnly precision={0.5} />
                      <Typography variant="body2" sx={{ color: 'success.main', mt: 0.5 }}>
                        {hotelItem.ratings} / 5 Rating
                      </Typography>
                      <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                        <LocationOnIcon sx={{ fontSize: 16, mr: 0.5, verticalAlign: 'text-bottom' }} />
                        {hotelItem.address}
                      </Typography>
                      <Typography variant="body2" sx={{ mt: 1, color: 'text.secondary' }}>
                        {hotelItem.description}
                      </Typography>
                    </Box>

                    <Box sx={{ display: 'flex', gap: 1, mb: 2, flexWrap: 'wrap' }}>
                      <Chip 
                        icon={<KingBedIcon />} 
                        label={hotelItem.roomtype}
                        size="small"
                        color="primary"
                        variant="outlined"
                      />
                      {hotelItem.amenities.map((amenity, idx) => (
                        <Chip 
                          key={idx}
                          label={amenity}
                          size="small"
                          variant="outlined"
                          sx={{ fontSize: '0.75rem' }}
                        />
                      ))}
                    </Box>

                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <Box>
                        <Typography variant="h6" color="primary" sx={{ fontWeight: 'bold' }}>
                          {hotelItem.price}
                        </Typography>
                        <Typography variant="caption" color="text.secondary">
                          per night
                        </Typography>
                      </Box>
                      
                      <Button 
                        variant="contained" 
                        color="primary"
                        onClick={() => navigate('/HotelDetail/', { state: { hotelData: hotelItem }})}
                        sx={{ 
                          textTransform: 'none',
                          borderRadius: 2,
                          px: 3
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

export default Hotelinfo;
