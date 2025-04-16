import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {
  Box, Container, Grid, Typography, Button, ImageList, ImageListItem,
  Divider, Chip, Rating
} from '@mui/material';
import Navbar from '../Navbar';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import KingBedIcon from '@mui/icons-material/KingBed';

// Add these imports to your existing imports
const hotelImages = [
  {
    url: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-4.0.3",
    title: "Hotel Exterior"
  },
  {
    url: "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?ixlib=rb-4.0.3",
    title: "Luxury Suite"
  },
  {
    url: "https://images.unsplash.com/photo-1582719508461-905c673771fd?ixlib=rb-4.0.3",
    title: "Swimming Pool"
  },
  {
    url: "https://images.unsplash.com/photo-1630660664869-c9d3cc676880?ixlib=rb-4.0.3",
    title: "Restaurant"
  },
  {
    url: "https://images.unsplash.com/photo-1590490359683-658d3d23f972?ixlib=rb-4.0.3",
    title: "Spa"
  },
  {
    url: "https://images.unsplash.com/photo-1590490360182-c33d57733427?ixlib=rb-4.0.3",
    title: "Gym"
  }
];

function HotelDetail() {
  const navigate = useNavigate();
  const location = useLocation();
  const hotelData = location.state?.hotelData;

  const roomTypes = [
    {
      type: "Deluxe Room",
      price: "₹8,500",
      size: "32 sq.m",
      occupancy: "2 Adults, 1 Child",
      amenities: ["King Bed", "City View", "Free WiFi", "Breakfast Included"]
    },
    {
      type: "Premium Suite",
      price: "₹12,500",
      size: "45 sq.m",
      occupancy: "3 Adults, 1 Child",
      amenities: ["King Bed", "River View", "Free WiFi", "Breakfast & Dinner"]
    },
    {
      type: "Executive Room",
      price: "₹10,500",
      size: "38 sq.m",
      occupancy: "2 Adults",
      amenities: ["Twin Bed", "City View", "Free WiFi", "Lounge Access"]
    }
  ];

  const handleBookRoom = (room) => {
    navigate('/HotelPricing', {
      state: {
        hotelData,
        roomData: room
      }
    });
  };

  return (
    <>
      <Navbar />
      <Box sx={{ bgcolor: '#f5f5f5', minHeight: '100vh', pt: 8 }}>
        <Container maxWidth="lg">
          {/* Image Carousel */}
          <Box sx={{ width: '100%', height: 'auto', mb: 4 }}>
            <Carousel
              showArrows={true}
              showStatus={false}
              showThumbs={true}
              infiniteLoop={true}
              autoPlay={true}
              interval={3000}
            >
              <div>
                <img src={hotelData?.image} alt={hotelData?.name} style={{ maxHeight: '600px', objectFit: 'cover' }} />
                <p className="legend">{hotelData?.name}</p>
              </div>
              {hotelImages.map((image, index) => (
                <div key={index}>
                  <img src={image.url} alt={image.title} style={{ maxHeight: '600px', objectFit: 'cover' }} />
                  <p className="legend">{image.title}</p>
                </div>
              ))}
            </Carousel>
          </Box>

          {/* Rest of the component remains the same */}
          
          {/* Hotel Information section */}
          <Box sx={{ mt: 4 }}>
            <Typography variant="h3" gutterBottom>
              {hotelData?.name}
            </Typography>
            {/* ... other hotel information ... */}
          </Box>

          <Divider sx={{ my: 4 }} />

          {/* Room Types */}
          <Typography variant="h5" gutterBottom>
            Available Rooms
          </Typography>
          <Grid container spacing={3}>
            {roomTypes.map((room, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Box sx={{ 
                  p: 3, 
                  border: '1px solid #e0e0e0', 
                  borderRadius: 2,
                  bgcolor: 'white'
                }}>
                  <Typography variant="h6" gutterBottom>
                    {room.type}
                  </Typography>
                  <Typography variant="h4" color="primary" gutterBottom>
                    {room.price}
                    <Typography variant="caption" sx={{ ml: 1 }}>
                      per night
                    </Typography>
                  </Typography>
                  <Box sx={{ my: 2 }}>
                    <Typography variant="body2">
                      Room Size: {room.size}
                    </Typography>
                    <Typography variant="body2">
                      Max Occupancy: {room.occupancy}
                    </Typography>
                  </Box>
                  <Box sx={{ mb: 2 }}>
                    {room.amenities.map((amenity, idx) => (
                      <Chip 
                        key={idx}
                        label={amenity}
                        size="small"
                        sx={{ m: 0.5 }}
                      />
                    ))}
                  </Box>
                  <Button 
                    variant="contained" 
                    fullWidth
                    onClick={() => handleBookRoom(room)}
                    sx={{ mt: 2 }}
                  >
                    Book This Room
                  </Button>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </>
  );
}

export default HotelDetail;