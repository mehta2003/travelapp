import React from "react";
import Toolbar from "@mui/material/Toolbar";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import IconButton from "@mui/material/IconButton";
import { Box, Typography, Paper, Grid, Chip, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

function Businfo() {
  let navigate = useNavigate();

  const buses = [
    {
      id: 1,
      time: "23:00 - 05:20",
      duration: "6h 20m",
      seats: "36 Seats (12 Single)",
      price: "₹710",
      rating: 4.5,
      reviews: 412,
      details: "Patel Travels",
      type: "A/C Sleeper (2+1)",
    },
    {
      id: 2,
      time: "23:45 - 05:40",
      duration: "5h 55m",
      seats: "36 Seats (12 Single)",
      price: "₹910",
      rating: 4.7,
      reviews: 212,
      details: "Zing Bus",
      type: "A/C Sleeper (2+1)",
    },
    {
      id: 3,
      time: "22:20 - 04:55",
      duration: "6h 35m",
      seats: "38 Seats (12 Single)",
      price: "₹1050",
      rating: 3.9,
      reviews: 135,
      details: "Paras Travels",
      type: "AC Sleeper (2+1)",
    },
  ];
  const handleclick = () => {
    navigate("/Busdetails");
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
            <Typography variant="h6" noWrap component="div">
              Wanderlust Journeys
            </Typography>
            {/* <img3
              src={busLogo}
              alt="Bus Logo"
              style={{ marginLeft: 80, height: "70px" }}
            /> */}
          </Toolbar>
        </AppBar>
      </Box>
      <Paper sx={{ mt: 7 }}>
        {buses.map((bus) => (
          <Paper elevation={2} sx={{ padding: 1, margin: 3, mt: 0, mb: 3 }}>
            <Grid container spacing={2} sx={{ padding: 3 }}>
              <Grid item xs={8}>
                <Typography variant="h6">
                  <b>{bus.details}</b>
                </Typography>
                <Typography variant="body2">{bus.type}</Typography>
                <Typography variant="body2">{bus.seats}</Typography>
                <Typography variant="h6">{bus.time}</Typography>
                <Typography variant="body2">{bus.duration}</Typography>
              </Grid>
              <Grid item xs={4} sx={{ textAlign: "right" }}>
                <Typography variant="h6">{bus.price}</Typography>
                <Typography variant="body2">
                  <Chip label={`${bus.rating} ★`} size="small" /> ({bus.reviews}
                  )
                </Typography>
                <Button
                  variant="contained"
                  sx={{ marginTop: 2 }}
                  onClick={() => {
                    handleclick();
                  }}
                >
                  Book Now
                </Button>
              </Grid>
            </Grid>
          </Paper>
        ))}
      </Paper>
    </>
  );
}

export default Businfo;
