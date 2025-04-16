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
  InputAdornment,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import AdminNavbar from "../AdminDashboard/AdminNavbar";

function BusForm() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    busNumber: "",
    busType: "",
    operator: "",
    operatorRating: "",
    reviews: 0,
    departureCity: "",
    destinationCity: "",
    departureTime: new Date().toISOString().slice(0, 16),
    arrivalTime: new Date().toISOString().slice(0, 16),
    duration: "",
    totalSeats: "",
    singleSeats: "",
    seatLayout: "2+1",
    availableSeats: "",
    fare: "",
    amenities: [],
    boardingPoints: "",
    droppingPoints: "",
    cancellationPolicy: "",
    busImage: "",
  });
  const cities = [
    { name: "Ahmedabad", code: "AMD" },
    { name: "Vadodara", code: "BDQ" },
    { name: "Surat", code: "STV" },
    { name: "Delhi", code: "DEL" },
    { name: "Mumbai", code: "BOM" },
    { name: "Bangalore", code: "BLR" },
    { name: "Hyderabad", code: "HYD" },
    { name: "Kolkata", code: "CCU" },
    { name: "Pune", code: "PNQ" },
    { name: "Goa", code: "GOI" },
  ];

  const amenityOptions = [
    "WiFi",
    "Water Bottle",
    "Blanket",
    "Charging Point",
    "Emergency Contact",
    "Movie",
    "Reading Light",
    "Pillow",
    "Track My Bus",
  ];

  const seatLayoutOptions = ["2+1", "2+2", "1+1", "1+2"];

  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success",
  });

  const busTypes = [
    "AC Sleeper",
    "Non-AC Sleeper",
    "AC Seater",
    "Non-AC Seater",
    "Volvo AC",
    "Luxury",
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.busNumber) errors.busNumber = "Bus number is required";
    if (!formData.busType) errors.busType = "Bus type is required";
    if (!formData.operator) errors.operator = "Operator is required";
    if (
      !formData.operatorRating ||
      formData.operatorRating < 0 ||
      formData.operatorRating > 5
    )
      errors.operatorRating = "Valid operator rating (0-5) is required";
    if (!formData.departureCity)
      errors.departureCity = "Departure city is required";
    if (!formData.destinationCity)
      errors.destinationCity = "Destination city is required";
    if (formData.departureCity === formData.destinationCity)
      errors.destinationCity =
        "Destination city must be different from departure city";

    const departureDate = new Date(formData.departureTime);
    const arrivalDate = new Date(formData.arrivalTime);

    if (!formData.departureTime || isNaN(departureDate.getTime())) {
      errors.departureTime = "Valid departure time is required";
    }
    if (!formData.arrivalTime || isNaN(arrivalDate.getTime())) {
      errors.arrivalTime = "Valid arrival time is required";
    }
    if (departureDate >= arrivalDate) {
      errors.arrivalTime = "Arrival time must be after departure time";
    }

    if (!formData.totalSeats || parseInt(formData.totalSeats) <= 0) {
      errors.totalSeats = "Valid total seats number is required";
    }
    if (!formData.singleSeats || parseInt(formData.singleSeats) < 0) {
      errors.singleSeats = "Valid number of single seats is required";
    }
    if (parseInt(formData.singleSeats) > parseInt(formData.totalSeats)) {
      errors.singleSeats = "Single seats cannot exceed total seats";
    }
    if (!formData.seatLayout) errors.seatLayout = "Seat layout is required";
    if (!formData.fare || parseInt(formData.fare) <= 0) {
      errors.fare = "Valid fare amount is required";
    }
    if (!formData.amenities || formData.amenities.length === 0) {
      errors.amenities = "At least one amenity is required";
    }
    if (!formData.busImage) errors.busImage = "Bus image URL is required";
    if (!formData.boardingPoints.trim()) {
      errors.boardingPoints = "Boarding points are required";
    }
    if (!formData.droppingPoints.trim()) {
      errors.droppingPoints = "Dropping points are required";
    }
    if (!formData.cancellationPolicy.trim()) {
      errors.cancellationPolicy = "Cancellation policy is required";
    }

    if (
      formData.totalSeats &&
      formData.availableSeats &&
      parseInt(formData.availableSeats) > parseInt(formData.totalSeats)
    ) {
      errors.availableSeats = "Available seats cannot exceed total seats";
    }

    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errors = validateForm();

    if (Object.keys(errors).length > 0) {
      setSnackbar({
        open: true,
        message: "Please fix the form errors",
        severity: "error",
      });
      return;
    }

    try {
      // Calculate duration based on departure and arrival times
      const departureDate = new Date(formData.departureTime);
      const arrivalDate = new Date(formData.arrivalTime);
      const durationHours = (arrivalDate - departureDate) / (1000 * 60 * 60);

      const submissionData = {
        ...formData,
        duration: durationHours.toFixed(1),
      };

      // Here you would typically make an API call to save the bus data
      console.log("Form submitted:", submissionData);

      setSnackbar({
        open: true,
        message: "Bus added successfully!",
        severity: "success",
      });

      // Navigate back to bus list after successful submission
      setTimeout(() => navigate("/admin/buses"), 2000);
    } catch (error) {
      setSnackbar({
        open: true,
        message: error.message || "Failed to save bus data",
        severity: "error",
      });
    }
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
        <Container maxWidth="lg">
          <Paper elevation={3} sx={{ p: 4 }}>
            <Typography variant="h4" sx={{ mb: 4, color: "#2C3E50" }}>
              Add New Bus
            </Typography>
            <form onSubmit={handleSubmit}>
              <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    label="Bus Number"
                    name="busNumber"
                    value={formData.busNumber}
                    onChange={handleChange}
                    required
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <FormControl fullWidth required>
                    <InputLabel>Bus Type</InputLabel>
                    <Select
                      name="busType"
                      value={formData.busType}
                      onChange={handleChange}
                      label="Bus Type"
                    >
                      {busTypes.map((type) => (
                        <MenuItem key={type} value={type}>
                          {type}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12} md={4}>
                  <TextField
                    fullWidth
                    label="Operator"
                    name="operator"
                    value={formData.operator}
                    onChange={handleChange}
                    required
                  />
                </Grid>
                <Grid item xs={12} md={4}>
                  <TextField
                    fullWidth
                    label="Operator Rating"
                    name="operatorRating"
                    type="number"
                    value={formData.operatorRating}
                    onChange={handleChange}
                    required
                    inputProps={{ min: 0, max: 5, step: 0.1 }}
                  />
                </Grid>
                <Grid item xs={12} md={4}>
                  <TextField
                    fullWidth
                    label="Reviews Count"
                    name="reviews"
                    type="number"
                    value={formData.reviews}
                    onChange={handleChange}
                    inputProps={{ min: 0 }}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <FormControl fullWidth required>
                    <InputLabel>Departure City</InputLabel>
                    <Select
                      name="departureCity"
                      value={formData.departureCity}
                      onChange={handleChange}
                      label="Departure City"
                    >
                      {cities.map((city) => (
                        <MenuItem key={city.code} value={city.name}>
                          {city.name}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12} md={6}>
                  <FormControl fullWidth required>
                    <InputLabel>Destination City</InputLabel>
                    <Select
                      name="destinationCity"
                      value={formData.destinationCity}
                      onChange={handleChange}
                      label="Destination City"
                    >
                      {cities.map((city) => (
                        <MenuItem
                          key={city.code}
                          value={city.name}
                          disabled={city.name === formData.departureCity}
                        >
                          {city.name}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    label="Departure Time"
                    name="departureTime"
                    type="datetime-local"
                    value={formData.departureTime}
                    onChange={handleChange}
                    required
                    InputLabelProps={{ shrink: true }}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    label="Arrival Time"
                    name="arrivalTime"
                    type="datetime-local"
                    value={formData.arrivalTime}
                    onChange={handleChange}
                    required
                    InputLabelProps={{ shrink: true }}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    label="Duration (hours)"
                    name="duration"
                    type="number"
                    value={formData.duration}
                    onChange={handleChange}
                    required
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">hrs</InputAdornment>
                      ),
                    }}
                  />
                </Grid>
                <Grid item xs={12} md={3}>
                  <TextField
                    fullWidth
                    label="Total Seats"
                    name="totalSeats"
                    type="number"
                    value={formData.totalSeats}
                    onChange={handleChange}
                    required
                  />
                </Grid>
                <Grid item xs={12} md={3}>
                  <TextField
                    fullWidth
                    label="Single Seats"
                    name="singleSeats"
                    type="number"
                    value={formData.singleSeats}
                    onChange={handleChange}
                    required
                  />
                </Grid>
                <Grid item xs={12} md={3}>
                  <FormControl fullWidth required>
                    <InputLabel>Seat Layout</InputLabel>
                    <Select
                      name="seatLayout"
                      value={formData.seatLayout}
                      onChange={handleChange}
                      label="Seat Layout"
                    >
                      {seatLayoutOptions.map((layout) => (
                        <MenuItem key={layout} value={layout}>
                          {layout}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12} md={4}>
                  <TextField
                    fullWidth
                    label="Available Seats"
                    name="availableSeats"
                    type="number"
                    value={formData.availableSeats}
                    onChange={handleChange}
                    required
                  />
                </Grid>
                <Grid item xs={12} md={4}>
                  <TextField
                    fullWidth
                    label="Fare"
                    name="fare"
                    type="number"
                    value={formData.fare}
                    onChange={handleChange}
                    required
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">₹</InputAdornment>
                      ),
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <FormControl fullWidth required>
                    <InputLabel>Amenities</InputLabel>
                    <Select
                      multiple
                      name="amenities"
                      value={formData.amenities}
                      onChange={handleChange}
                      label="Amenities"
                      renderValue={(selected) => selected.join(", ")}
                    >
                      {amenityOptions.map((amenity) => (
                        <MenuItem key={amenity} value={amenity}>
                          {amenity}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Bus Image URL"
                    name="busImage"
                    value={formData.busImage}
                    onChange={handleChange}
                    required
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    label="Boarding Points"
                    name="boardingPoints"
                    value={formData.boardingPoints}
                    onChange={handleChange}
                    multiline
                    rows={3}
                    placeholder="Enter boarding points separated by commas"
                    required
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    label="Dropping Points"
                    name="droppingPoints"
                    value={formData.droppingPoints}
                    onChange={handleChange}
                    multiline
                    rows={3}
                    placeholder="Enter dropping points separated by commas"
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Cancellation Policy"
                    name="cancellationPolicy"
                    value={formData.cancellationPolicy}
                    onChange={handleChange}
                    multiline
                    rows={2}
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <Box
                    sx={{ display: "flex", gap: 2, justifyContent: "flex-end" }}
                  >
                    <Button
                      variant="outlined"
                      onClick={() => navigate("/admin/buses")}
                    >
                      Cancel
                    </Button>
                    <Button
                      type="submit"
                      variant="contained"
                      sx={{ bgcolor: "#2C3E50" }}
                    >
                      Add Bus
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
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
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

export default BusForm;
