import React, { useState, useEffect } from "react";
import {
  Container, Box, Typography, Paper, Divider, Grid, Stack, Button,
  AppBar, Toolbar, IconButton, Stepper, Step, StepLabel
} from "@mui/material";
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import FlightLandIcon from '@mui/icons-material/FlightLand';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PaymentIcon from '@mui/icons-material/Payment';
import AirlineSeatReclineNormalIcon from '@mui/icons-material/AirlineSeatReclineNormal';

const FlightBooking = () => {
  const [bookingDetails, setBookingDetails] = useState({
    Airlines: "Indigo",
    Departcity: "",
    Goingcity: "",
    Date: "Fri, 5 July",
    duration: "2h 30m",
    stop: "Nonstop",
    DepartTime: "06:30",
    ArrivalTime: "09:00",
    DepartAirport: "Indira Gandhi (T-3)",
    ArrivalAirport: "Sardar VallabhBhai Patel, (T-2)",
    flightNumber: "6E-2134",
    price: "5299"
  });

  useEffect(() => {
    const departCity = localStorage.getItem("departcity");
    const goingCity = localStorage.getItem("goingcity");
    const selectedFlight = localStorage.getItem("selectedFlight");
    
    if (departCity && goingCity) {
      setBookingDetails(prev => ({
        ...prev,
        Departcity: JSON.parse(departCity),
        Goingcity: JSON.parse(goingCity),
        ...(selectedFlight && { ...JSON.parse(selectedFlight) })
      }));
    }
  }, []);

  return (
    <>
      <AppBar position="fixed" sx={{ backgroundColor: "#1a237e", boxShadow: 3 }}>
        <Toolbar>
          <Typography variant="h5" sx={{ fontWeight: 600, flexGrow: 1 }}>
            Wanderlust Journeys
          </Typography>
        </Toolbar>
      </AppBar>

      <Box
        sx={{
          minHeight: '100vh',
          background: `linear-gradient(rgba(26, 35, 126, 0.8), rgba(121, 134, 203, 0.8)), url('https://images.pexels.com/photos/379419/pexels-photo-379419.jpeg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          pt: 10,
          pb: 4
        }}
      >
        <Container maxWidth="lg">
          <Paper elevation={3} sx={{ 
            borderRadius: 2,
            overflow: 'hidden',
            backgroundColor: 'rgba(255, 255, 255, 0.95)'
          }}>
            <Box sx={{ 
              bgcolor: 'primary.main', 
              color: 'white', 
              p: 2,
              borderBottom: '1px solid rgba(255,255,255,0.1)'
            }}>
              <Typography variant="h5" fontWeight="500">Review Your Booking</Typography>
            </Box>

            <Box sx={{ p: 3 }}>
              <Grid container spacing={3}>
                <Grid item xs={12} md={8}>
                  <Paper elevation={2} sx={{ p: 3, mb: 3, borderRadius: 2 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                      <img 
                        src="https://logos-world.net/wp-content/uploads/2023/01/IndiGo-Logo.png" 
                        alt="Airline Logo" 
                        style={{ width: '120px', objectFit: 'contain' }} 
                      />
                      <Box sx={{ ml: 2 }}>
                        <Typography variant="subtitle2" color="text.secondary">
                          Flight No: {bookingDetails.flightNumber}
                        </Typography>
                        <Typography variant="caption" sx={{ /* styles remain same */ }}>
                          <AccessTimeIcon sx={{ fontSize: 16, mr: 0.5 }} />
                          {bookingDetails.duration} • Non-stop
                        </Typography>
                      </Box>
                    </Box>

                    <Grid container spacing={4}>
                      <Grid item xs={5}>
                        <Box>
                          <Typography variant="h4" color="primary" fontWeight="500">
                            {bookingDetails.DepartTime}
                          </Typography>
                          <Typography variant="subtitle1">{bookingDetails.Departcity}</Typography>
                          <Typography variant="body2" color="text.secondary">
                            {bookingDetails.DepartAirport}
                          </Typography>
                          <Typography variant="caption" color="text.secondary">
                            {bookingDetails.Date}
                          </Typography>
                        </Box>
                      </Grid>

                      <Grid item xs={5}>
                        <Box>
                          <Typography variant="h4" color="primary" fontWeight="500">
                            {bookingDetails.ArrivalTime}
                          </Typography>
                          <Typography variant="subtitle1">{bookingDetails.Goingcity}</Typography>
                          <Typography variant="body2" color="text.secondary">
                            {bookingDetails.ArrivalAirport}
                          </Typography>
                          <Typography variant="caption" color="text.secondary">
                            {bookingDetails.Date}
                          </Typography>
                        </Box>
                      </Grid>
                    </Grid>
                  </Paper>
                </Grid>

                <Grid item xs={12} md={4}>
                  <Paper elevation={2} sx={{ p: 3, borderRadius: 2, bgcolor: 'white', border: '1px solid rgba(0,0,0,0.1)' }}>
                    <Typography variant="h6" color="primary" fontWeight="600" gutterBottom>
                      Fare Summary
                    </Typography>
                    <Divider sx={{ my: 2 }} />
                    <Stack spacing={2.5}>
                      <Box>
                        <Typography variant="subtitle2" color="text.secondary" gutterBottom>
                          Ticket Charges
                        </Typography>
                        <Box display="flex" justifyContent="space-between" alignItems="center">
                          <Typography>Base Fare</Typography>
                          <Typography>₹3,954</Typography>
                        </Box>
                      </Box>

                      <Box>
                        <Typography variant="subtitle2" color="text.secondary" gutterBottom>
                          Additional Charges
                        </Typography>
                        <Stack spacing={1}>
                          <Box display="flex" justifyContent="space-between">
                            <Typography>Taxes</Typography>
                            <Typography>₹487</Typography>
                          </Box>
                          <Box display="flex" justifyContent="space-between">
                            <Typography>Airport Fees</Typography>
                            <Typography>₹250</Typography>
                          </Box>
                        </Stack>
                      </Box>

                      <Box sx={{ bgcolor: 'primary.light', p: 2, borderRadius: 1, mt: 2 }}>
                        <Box display="flex" justifyContent="space-between" alignItems="center">
                          <Typography variant="subtitle1" color="white" fontWeight="500">
                            Total Amount
                          </Typography>
                          <Typography variant="h6" color="white" fontWeight="600">
                            ₹4,691
                          </Typography>
                        </Box>
                      </Box>

                      <Box sx={{ bgcolor: '#f5f5f5', p: 2, borderRadius: 1, mt: 1 }}>
                        <Typography variant="caption" color="success.main" sx={{ display: 'block', mb: 1 }}>
                          ✓ Free cancellation within 24 hours
                        </Typography>
                        <Typography variant="caption" color="text.secondary">
                          * Prices include all taxes and fees
                        </Typography>
                      </Box>

                      <Button 
                        variant="contained" 
                        fullWidth 
                        sx={{ 
                          mt: 2,
                          py: 1.5,
                          bgcolor: 'primary.main',
                          '&:hover': {
                            bgcolor: 'primary.dark'
                          },
                          boxShadow: 2
                        }}
                      >
                        <PaymentIcon sx={{ mr: 1 }} />
                        Proceed to Payment
                      </Button>
                    </Stack>
                  </Paper>
                </Grid>
              </Grid>
            </Box>
          </Paper>
        </Container>
      </Box>
    </>
  );
};

export default FlightBooking;
