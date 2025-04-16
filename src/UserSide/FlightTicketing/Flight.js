import React, { useState, useEffect } from "react";
import {
  Box,
  Container,
  Paper,
  Grid,
  TextField,
  Button,
  FormControl,
  MenuItem,
  Select,
  ButtonGroup,
  Typography,
} from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import dayjs from "dayjs";
import axios from "axios";
import Navbar from "../Navbar";
import { useNavigate } from 'react-router-dom';
import FlightDetails from "./FlightDetails";

// Add these mock data arrays after imports
const MOCK_CITIES = [
  { city: "Mumbai", code: "BOM" },
  { city: "Delhi", code: "DEL" },
  { city: "Bangalore", code: "BLR" },
  { city: "Chennai", code: "MAA" },
  { city: "Kolkata", code: "CCU" },
  { city: "Hyderabad", code: "HYD" },
  { city: "Pune", code: "PNQ" },
  { city: "Ahmedabad", code: "AMD" }
];

const MOCK_FLIGHTS = [
  {
    id: 1,
    flightNumber: "AI101",
    departcity: "Mumbai",
    goingcity: "Delhi",
    date: "2024-02-20",
    departureTime: "10:00",
    arrivalTime: "12:00",
    price: {
      Economy: 5000,
      Business: 12000,
      "First Class": 20000
    },
    availableSeats: 150,
    airline: "Air India"
  },
  // Add more mock flights as needed
];

function Flight() {
  const navigate = useNavigate();
  
  const [cities, setCities] = useState([]);
  const [flightsData, setFlightsData] = useState([]);
  const [filteredFlights, setFilteredFlights] = useState([]);

  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [date, setDate] = useState([null, null]);
  const [tripType, setTripType] = useState("");
  const [adult, setAdult] = useState(1); // updated default to 1
  const [children, setChildren] = useState(0);
  const [flightClass, setFlightClass] = useState("");
  const [error, setError] = useState("");

  // Replace the useEffect with this:
  useEffect(() => {
    setCities(MOCK_CITIES);
  }, []);

  const handleDateChange = (newDate) => {
    setDate(newDate);
  };

  const handleTripTypeChange = (type) => {
    setTripType(type);
    if (type === "one-way") {
      setDate([date[0], null]);
    }
  };

  const handleIncrease = (type) => {
    if (type === "adult") setAdult(adult + 1);
    if (type === "children") setChildren(children + 1);
  };

  const handleDecrease = (type) => {
    if (type === "adult" && adult > 1) setAdult(adult - 1);
    if (type === "children" && children > 0) setChildren(children - 1);
  };

  const handleSearchFlights = () => {
    setError("");

    if (!from || !to || !date[0] || (tripType === "round-trip" && !date[1]) || !flightClass) {
      setError("Please fill all the required fields.");
      return;
    }

    if (from === to) {
      setError("Departure and Arrival cities cannot be the same.");
      return;
    }

    // Store cities in localStorage
    localStorage.setItem("departcity", JSON.stringify(from));
    localStorage.setItem("goingcity", JSON.stringify(to));

    // Navigate to flight details with search params
    navigate('/FlightDetails', { 
      state: {
        from: from,
        to: to,
        departureDate: date[0].format("DD MMM YYYY"),
        returnDate: tripType === "round-trip" ? date[1].format("DD MMM YYYY") : null,
        tripType: tripType,
        passengers: {
          adult: adult,
          children: children
        },
        flightClass: flightClass
      }
    });
  };

  

  return (
    <>
      <Navbar />
     
      <Box 
        sx={{ 
          minHeight: '100vh',
          background: `linear-gradient(rgba(102, 126, 234, 0.85), rgba(118, 75, 162, 0.85)), url('https://images.pexels.com/photos/379419/pexels-photo-379419.jpeg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          backgroundRepeat: 'no-repeat',
          display: 'flex',
          alignItems: 'center',
          py: 4,
          mt: 8,
        }}
      >
      
      <Container maxWidth="md">
        <Paper 
          elevation={8} 
          sx={{ 
            padding: 4,
            borderRadius: 2,
            background: 'rgba(255, 255, 255, 0.95)',
            backdropFilter: 'blur(10px)'
          }}
        >
          <Typography 
            variant="h4" 
            gutterBottom 
            sx={{ 
              textAlign: 'center',
              fontWeight: 700,
              color: '#1a237e',
              mb: 4
            }}
          >
            Find Your Perfect Flight
          </Typography>

          <Grid container spacing={3} justifyContent="center" sx={{ mb: 3 }}>
            <Grid item>
              <Button
                variant={tripType === "one-way" ? "contained" : "outlined"}
                onClick={() => handleTripTypeChange("one-way")}
                sx={{
                  px: 4,
                  borderRadius: 2,
                  backgroundColor: tripType === "one-way" ? '#667eea' : 'transparent',
                  '&:hover': {
                    backgroundColor: tripType === "one-way" ? '#5c6bc0' : 'rgba(102, 126, 234, 0.1)',
                  }
                }}
              >
                One-Way
              </Button>
            </Grid>
            <Grid item>
              <Button
                variant={tripType === "round-trip" ? "contained" : "outlined"}
                onClick={() => handleTripTypeChange("round-trip")}
                sx={{
                  px: 4,
                  borderRadius: 2,
                  backgroundColor: tripType === "round-trip" ? '#667eea' : 'transparent',
                  '&:hover': {
                    backgroundColor: tripType === "round-trip" ? '#5c6bc0' : 'rgba(102, 126, 234, 0.1)',
                  }
                }}
              >
                Round-Trip
              </Button>
            </Grid>
          </Grid>

          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <FormControl fullWidth>
                
                <Select
                  value={from}
                  onChange={(e) => setFrom(e.target.value)}
                  displayEmpty
                  sx={{ 
                    borderRadius: 1,
                    '& .MuiOutlinedInput-notchedOutline': {
                      borderColor: '#667eea'
                    }
                  }}
                >
                  <MenuItem value="" disabled>
                    ✈️ From
                  </MenuItem>
                  {cities.map((cityData, index) => (
                    <MenuItem key={index} value={cityData.city}>
                      {cityData.city} ({cityData.code})
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={12} md={6}>
              <FormControl fullWidth>
               
                <Select
                  value={to}
                  onChange={(e) => setTo(e.target.value)}
                  displayEmpty
                  sx={{ 
                    borderRadius: 1,
                    '& .MuiOutlinedInput-notchedOutline': {
                      borderColor: '#667eea'
                    }
                  }}
                >
                  <MenuItem value="" disabled>
                    🛬 To
                  </MenuItem>
                  {cities.map((cityData, index) => (
                    <MenuItem key={index} value={cityData.city}>
                      {cityData.city} ({cityData.code})
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={12} md={tripType === "round-trip" ? 6 : 12}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  label="Departure Date"
                  value={date[0]}
                  onChange={(newValue) => handleDateChange([newValue, date[1]])}
                  sx={{ width: '100%' }}
                />
              </LocalizationProvider>
            </Grid>

            {tripType === "round-trip" && (
              <Grid item xs={12} md={6}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker
                    label="Return Date"
                    value={date[1]}
                    onChange={(newValue) => handleDateChange([date[0], newValue])}
                    sx={{ width: '100%' }}
                  />
                </LocalizationProvider>
              </Grid>
            )}

            <Grid item xs={12}>
              <FormControl fullWidth>
                <Select
                  value={flightClass}
                  onChange={(e) => setFlightClass(e.target.value)}
                  displayEmpty
                  sx={{ borderRadius: 1 }}
                >
                  <MenuItem value="" disabled>
                    🎫 Select Class
                  </MenuItem>
                  <MenuItem value="Economy">💺 Economy</MenuItem>
                  <MenuItem value="Business">💼 Business Class</MenuItem>
                  <MenuItem value="First Class">👑 First Class</MenuItem>
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={12} md={6}>
              <Paper sx={{ p: 2, bgcolor: 'rgba(102, 126, 234, 0.1)' }}>
                <Typography variant="subtitle1" sx={{ mb: 1, color: '#1a237e' }}>
                  Adults (12+ years)
                </Typography>
                <ButtonGroup 
                  variant="outlined"
                  sx={{ 
                    '& .MuiButton-root': {
                      borderColor: '#667eea',
                      color: '#667eea'
                    }
                  }}
                >
                  <Button onClick={() => handleDecrease("adult")}>-</Button>
                  <Button sx={{ px: 4 }}>{adult}</Button>
                  <Button onClick={() => handleIncrease("adult")}>+</Button>
                </ButtonGroup>
              </Paper>
            </Grid>

            <Grid item xs={12} md={6}>
              <Paper sx={{ p: 2, bgcolor: 'rgba(102, 126, 234, 0.1)' }}>
                <Typography variant="subtitle1" sx={{ mb: 1, color: '#1a237e' }}>
                  Children (2-11 years)
                </Typography>
                <ButtonGroup 
                  variant="outlined"
                  sx={{ 
                    '& .MuiButton-root': {
                      borderColor: '#667eea',
                      color: '#667eea'
                    }
                  }}
                >
                  <Button onClick={() => handleDecrease("children")}>-</Button>
                  <Button sx={{ px: 4 }}>{children}</Button>
                  <Button onClick={() => handleIncrease("children")}>+</Button>
                </ButtonGroup>
              </Paper>
            </Grid>
          </Grid>

          {error && (
            <Typography color="error" sx={{ mt: 2, textAlign: 'center' }}>
              {error}
            </Typography>
          )}

          <Button
            variant="contained"
            fullWidth
            sx={{
              mt: 4,
              py: 1.5,
              backgroundColor: '#667eea',
              fontSize: '1.1rem',
              borderRadius: 2,
              '&:hover': {
                backgroundColor: '#5c6bc0',
              }
            }}
            onClick={handleSearchFlights}
          >
            Search Flights
          </Button>
        </Paper>
      </Container>
    </Box>
    </>
  );
}

export default Flight;


