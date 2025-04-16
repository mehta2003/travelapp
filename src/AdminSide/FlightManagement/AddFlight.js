import React, { useState } from "react";
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Grid,
  Paper,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Snackbar,
  Alert,
  InputAdornment
} from "@mui/material";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import AdminNavbar from "../AdminDashboard/AdminNavbar";

function AddFlight() {
  const [flightData, setFlightData] = useState({
    flightNumber: "",
    airline: "",
    source: "",
    destination: "",
    departureTime: null,
    arrivalTime: null,
    duration: "",
    stop: "Nonstop",
    departureAirport: "",
    arrivalAirport: "",
    baseFare: "",
    taxes: "",
    airportFees: "",
    totalSeats: "",
    availableSeats: "",
    class: "economy",
    cancellationPolicy: "Free cancellation within 24 hours",
  });

  const airports = [
    {
      name: "Indira Gandhi International Airport",
      code: "DEL",
      terminal: "T-3",
      city: "Delhi",
    },
    {
      name: "Chhatrapati Shivaji International Airport",
      code: "BOM",
      terminal: "T-2",
      city: "Mumbai",
    },
    {
      name: "Kempegowda International Airport",
      code: "BLR",
      terminal: "T-1",
      city: "Bangalore",
    },
    {
      name: "Rajiv Gandhi International Airport",
      code: "HYD",
      terminal: "T-1",
      city: "Hyderabad",
    },
    {
      name: "Netaji Subhas Chandra Bose International Airport",
      code: "CCU",
      terminal: "T-2",
      city: "Kolkata",
    },
    {
      name: "Sardar Vallabhbhai Patel International Airport",
      code: "AMD",
      terminal: "T-1",
      city: "Ahmedabad",
    },
  ];

  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFlightData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleDateChange = (name) => (date) => {
    setFlightData((prev) => ({
      ...prev,
      [name]: date,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically make an API call to save the flight data
    console.log("Flight Data:", flightData);
    setSnackbar({
      open: true,
      message: "Flight added successfully!",
      severity: "success",
    });
    // Reset form
    setFlightData({
      flightNumber: "",
      airline: "",
      source: "",
      destination: "",
      departureTime: null,
      arrivalTime: null,
      price: "",
      totalSeats: "",
      availableSeats: "",
      class: "economy",
    });
  };

  const handleCloseSnackbar = () => {
    setSnackbar((prev) => ({ ...prev, open: false }));
  };

  return (
    <>
      <AdminNavbar />
      <Box
        sx={{ pt: 10, pb: 8, backgroundColor: "#f5f5f5", minHeight: "100vh" }}
      >
        <Container maxWidth="md">
          <Paper elevation={3} sx={{ p: 4 }}>
            <Typography
              variant="h4"
              gutterBottom
              sx={{ mb: 4, color: "#2C3E50" }}
            >
              Add New Flight
            </Typography>

            <form onSubmit={handleSubmit}>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    label="Flight Number"
                    name="flightNumber"
                    value={flightData.flightNumber}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    label="Airline"
                    name="airline"
                    value={flightData.airline}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth required>
                    <InputLabel>Departure Airport</InputLabel>
                    <Select
                      name="departureAirport"
                      value={flightData.departureAirport}
                      onChange={handleChange}
                      label="Departure Airport"
                    >
                      {airports.map((airport) => (
                        <MenuItem
                          key={airport.code}
                          value={`${airport.name} (${airport.terminal})`}
                        >
                          {airport.city} - {airport.name} ({airport.terminal})
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth required>
                    <InputLabel>Arrival Airport</InputLabel>
                    <Select
                      name="arrivalAirport"
                      value={flightData.arrivalAirport}
                      onChange={handleChange}
                      label="Arrival Airport"
                    >
                      {airports.map((airport) => (
                        <MenuItem
                          key={airport.code}
                          value={`${airport.name} (${airport.terminal})`}
                          disabled={
                            `${airport.name} (${airport.terminal})` ===
                            flightData.departureAirport
                          }
                        >
                          {airport.city} - {airport.name} ({airport.terminal})
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <DateTimePicker
                      label="Departure Time"
                      value={flightData.departureTime}
                      onChange={handleDateChange("departureTime")}
                      renderInput={(params) => (
                        <TextField {...params} fullWidth required />
                      )}
                    />
                  </LocalizationProvider>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <DateTimePicker
                      label="Arrival Time"
                      value={flightData.arrivalTime}
                      onChange={handleDateChange("arrivalTime")}
                      renderInput={(params) => (
                        <TextField {...params} fullWidth required />
                      )}
                    />
                  </LocalizationProvider>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    label="Duration (hours)"
                    name="duration"
                    type="text"
                    value={flightData.duration}
                    onChange={handleChange}
                    placeholder="e.g. 2h 30m"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth required>
                    <InputLabel>Stop Type</InputLabel>
                    <Select
                      name="stop"
                      value={flightData.stop}
                      onChange={handleChange}
                      label="Stop Type"
                    >
                      <MenuItem value="Nonstop">Nonstop</MenuItem>
                      <MenuItem value="1 Stop">1 Stop</MenuItem>
                      <MenuItem value="2+ Stops">2+ Stops</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={4}>
                  <TextField
                    required
                    fullWidth
                    label="Base Fare"
                    name="baseFare"
                    type="number"
                    value={flightData.baseFare}
                    onChange={handleChange}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">₹</InputAdornment>
                      ),
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={4}>
                  <TextField
                    required
                    fullWidth
                    label="Taxes"
                    name="taxes"
                    type="number"
                    value={flightData.taxes}
                    onChange={handleChange}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">₹</InputAdornment>
                      ),
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={4}>
                  <TextField
                    required
                    fullWidth
                    label="Airport Fees"
                    name="airportFees"
                    type="number"
                    value={flightData.airportFees}
                    onChange={handleChange}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">₹</InputAdornment>
                      ),
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    label="Total Seats"
                    name="totalSeats"
                    type="number"
                    value={flightData.totalSeats}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    label="Available Seats"
                    name="availableSeats"
                    type="number"
                    value={flightData.availableSeats}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth required>
                    <InputLabel>Class</InputLabel>
                    <Select
                      name="class"
                      value={flightData.class}
                      onChange={handleChange}
                      label="Class"
                    >
                      <MenuItem value="economy">Economy</MenuItem>
                      <MenuItem value="business">Business</MenuItem>
                      <MenuItem value="first">First Class</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12}>
                  <Button
                    type="submit"
                    variant="contained"
                    fullWidth
                    sx={{
                      mt: 2,
                      backgroundColor: "#2C3E50",
                      "&:hover": {
                        backgroundColor: "#34495E",
                      },
                    }}
                  >
                    Add Flight
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Paper>
        </Container>
      </Box>

      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity={snackbar.severity}
          sx={{ width: "100%" }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </>
  );
}

export default AddFlight;
