import React, { useState, useEffect } from "react";
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
} from "@mui/material";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { useNavigate, useLocation } from "react-router-dom";
import AdminNavbar from "../AdminDashboard/AdminNavbar";

function EditFlight() {
  const navigate = useNavigate();
  const location = useLocation();
  const flightToEdit = location.state?.flight;

  const [flightData, setFlightData] = useState({
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

  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success",
  });

  useEffect(() => {
    if (flightToEdit) {
      setFlightData({
        ...flightToEdit,
        departureTime: new Date(flightToEdit.departureTime),
        arrivalTime: new Date(flightToEdit.arrivalTime),
      });
    } else {
      navigate("/admin/flights");
    }
  }, [flightToEdit, navigate]);

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
    // Here you would typically make an API call to update the flight data
    console.log("Updated Flight Data:", flightData);
    setSnackbar({
      open: true,
      message: "Flight updated successfully!",
      severity: "success",
    });
    // Navigate back to flight list after successful update
    setTimeout(() => navigate("/admin/flights"), 2000);
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
              Edit Flight
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
                  <TextField
                    required
                    fullWidth
                    label="Source"
                    name="source"
                    value={flightData.source}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    label="Destination"
                    name="destination"
                    value={flightData.destination}
                    onChange={handleChange}
                  />
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
                    label="Price"
                    name="price"
                    type="number"
                    value={flightData.price}
                    onChange={handleChange}
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
                  <Box
                    sx={{ display: "flex", gap: 2, justifyContent: "flex-end" }}
                  >
                    <Button
                      variant="outlined"
                      onClick={() => navigate("/admin/flights")}
                    >
                      Cancel
                    </Button>
                    <Button
                      type="submit"
                      variant="contained"
                      sx={{
                        backgroundColor: "#2C3E50",
                        "&:hover": {
                          backgroundColor: "#34495E",
                        },
                      }}
                    >
                      Update Flight
                    </Button>
                  </Box>
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

export default EditFlight;
