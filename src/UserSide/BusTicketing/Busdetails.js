import React, { useState } from "react";
import { Box, Paper, Container, Typography, Grid, Button } from "@mui/material";
import Boarding from "./Boarding";
import Toolbar from "@mui/material/Toolbar";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import IconButton from "@mui/material/IconButton";

function BusDetails() {
  const [bookedSeats, setBookedSeats] = useState([]);
  const [selectedSeat, setSelectedSeat] = useState(null);

  const lowerDeck = [
    [1, 2, null, 3, 4],
    [5, 6, null, 7, 8],
    [9, 10, null, 11, 12],
    [13, 14, null, 15, 16],
  ];

  const upperDeck = [
    [17, 18, null, 19, 20],
    [21, 22, null, 23, 24],
    [25, 26, null, 27, 28],
    [29, 30, null, 31, 32],
  ];

  const handleClick = (seatNumber) => {
    setSelectedSeat(seatNumber);
    if (bookedSeats.includes(seatNumber)) {
      setBookedSeats(bookedSeats.filter((seat) => seat !== seatNumber));
    } else {
      setBookedSeats([...bookedSeats, seatNumber]);
    }
  };

  const renderSeats = (deck) => {
    return deck.map((row, rowIndex) => (
      <Grid container key={rowIndex} spacing={1} justifyContent="center">
        {row.map((seat, seatIndex) => {
          if (seat === null) {
            return <Grid item key={seatIndex} xs={1} />;
          }

          return (
            <Grid item key={seatIndex} xs={1}>
              <Button
                variant={bookedSeats.includes(seat) ? "contained" : "outlined"}
                color={bookedSeats.includes(seat) ? "secondary" : "primary"}
                onClick={() => handleClick(seat)}
                style={{ width: 50, height: 50 }}
              >
                {seat}
              </Button>
            </Grid>
          );
        })}
      </Grid>
    ));
  };

  return (
    <>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar position="fixed" sx={{ backgroundColor: "Blue" }}>
          <Toolbar>
            <IconButton color="inherit" aria-label="open drawer" edge="start">
              {/* <MenuIcon /> */}
            </IconButton>
            <Typography variant="h6">Wanderlust Journeys</Typography>
            {/* <img3
              src={busLogo}
              alt="Bus Logo"
              style={{ marginLeft: 80, height: "70px" }}
            /> */}
          </Toolbar>
        </AppBar>
      </Box>
      <Box sx={{ display: "flex", marginTop: 7, padding: 4 }}>
        <Box sx={{ width: "25%", padding: 2 }}>
          {bookedSeats.length && <Boarding selectedSeat={bookedSeats} />}
        </Box>
        <Box sx={{ flexGrow: 1, ml: 3 }}>
          <Container maxWidth="md">
            <Paper elevation={3} sx={{ padding: 3, mb: 4 }}>
              <Typography variant="h4" align="center" gutterBottom>
                Lower Deck
              </Typography>
              <Box sx={{ marginBottom: 2 }}>{renderSeats(lowerDeck)}</Box>
            </Paper>
            <Paper elevation={3} sx={{ padding: 3, mb: 4 }}>
              <Typography variant="h4" align="center" gutterBottom>
                Upper Deck
              </Typography>
              <Box sx={{ marginBottom: 2 }}>{renderSeats(upperDeck)}</Box>
            </Paper>
          </Container>
        </Box>
      </Box>
    </>
  );
}

export default BusDetails;
