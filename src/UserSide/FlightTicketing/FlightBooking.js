import React from "react";
import {
  Container,
  Box,
  Typography,
  Paper,
  Divider,
  Grid,
  Stack,
  Button,
} from "@mui/material";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import AppBar from "@mui/material/AppBar";

const FlightBooking = () => {
  const Bookingdetails = [
    {
      Airlines: "Indigo",
      Departcity: "Delhi(DEL)",
      Goingcity: "Ahmedabad(AMD)",
      Date: "Fri, 5 July",
      price: "5000",
      duration: "2h 15m",
      stop: "Nonstop",
      DepartTime: "02:15",
      ArrivalTime: "05:15",
      DepartAirport: "Indira Gandhi (T-3)",
      ArrivalAirport: " Sardar VallabhBhai Patel, (T-2)",
    },
  ];
  const pricedetails = [{ price: "₹3,954" }];
  return (
    <>
      <AppBar position="fixed" sx={{ backgroundColor: "Blue" }}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            sx={{ mr: 2 }}
          >
            {/* <MenuIcon /> */}
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Wanderlust Journeys
          </Typography>
        </Toolbar>
      </AppBar>
      <br />
      <br />
      <br />
      <Container maxWidth="md">
        <Paper elevation={3} sx={{ padding: 2, marginTop: 4 }}>
          <Typography variant="h6">Review Your Booking</Typography>
          <Divider />

          <Grid container spacing={2} sx={{ marginTop: 2 }}>
            <Grid item xs={12}>
              {Bookingdetails.map((booking, idx) => (
                <Box>
                  <Typography variant="subtitle2">
                    {booking.Departcity}
                  </Typography>
                  <Typography variant="h4">{booking.DepartTime}</Typography>
                  <Typography variant="body2">{booking.Date}</Typography>
                  <Typography variant="body2">
                    {booking.DepartAirport}
                  </Typography>
                  <Divider sx={{ marginY: 2 }} />
                  <Typography variant="subtitle2">
                    {booking.Goingcity}
                  </Typography>
                  <Typography variant="h4">{booking.ArrivalTime}</Typography>
                  <Typography variant="body2">{booking.Date}</Typography>
                  <Typography variant="body2">
                    {booking.ArrivalAirport}
                  </Typography>
                </Box>
              ))}
            </Grid>
            <Divider />
            <Grid item xs={12} sm={4}>
              <Paper variant="outlined" sx={{ padding: 2 }}>
                <Typography variant="h6" gutterBottom>
                  Fare Details
                </Typography>
                <Divider sx={{ marginBottom: 2 }} />
                <Stack spacing={1}>
                  <Box display="flex" justifyContent="space-between">
                    <Typography>Base Fare (1 Traveller)</Typography>
                    {pricedetails.map((prices) => (
                      <Typography>{prices.price}</Typography>
                    ))}
                  </Box>
                  <Box display="flex" justifyContent="space-between">
                    <Typography>Fee & Surcharges</Typography>
                    <Typography>₹ 737</Typography>
                  </Box>
                  <Divider />
                  <Box display="flex" justifyContent="space-between">
                    <Typography>Total Fare</Typography>
                    <Typography>₹ 3,810</Typography>
                  </Box>
                  <Box display="flex" justifyContent="space-between">
                    <Typography variant="h6">You Pay</Typography>
                    <Typography variant="h6">₹ 4,285</Typography>
                  </Box>
                </Stack>
              </Paper>
            </Grid>
          </Grid>
          <br />
          <Button variant="contained">Pay</Button>
        </Paper>
      </Container>
    </>
  );
};

export default FlightBooking;
