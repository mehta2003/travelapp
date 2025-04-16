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
  Chip,
  IconButton,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import AdminNavbar from "../AdminDashboard/AdminNavbar";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";

function HolidayForm() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    destinations: [],
    duration: "",
    startDate: "",
    endDate: "",
    price: "",
    maxGroupSize: "",
    inclusions: [],
    exclusions: [],
    itinerary: [],
    status: "Active",
    highlights: [],
    accommodation: "",
    transportation: "",
    cancellationPolicy: "",
  });

  const [newDestination, setNewDestination] = useState("");
  const [newInclusion, setNewInclusion] = useState("");
  const [newExclusion, setNewExclusion] = useState("");
  const [newHighlight, setNewHighlight] = useState("");
  const [newItineraryDay, setNewItineraryDay] = useState({
    day: "",
    activities: "",
    meals: "",
    accommodation: "",
  });

  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success",
  });

  const statusOptions = ["Active", "Upcoming", "Completed", "Cancelled"];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleAddDestination = () => {
    if (newDestination.trim()) {
      setFormData((prevState) => ({
        ...prevState,
        destinations: [...prevState.destinations, newDestination.trim()],
      }));
      setNewDestination("");
    }
  };

  const handleAddInclusion = () => {
    if (newInclusion.trim()) {
      setFormData((prevState) => ({
        ...prevState,
        inclusions: [...prevState.inclusions, newInclusion.trim()],
      }));
      setNewInclusion("");
    }
  };

  const handleAddExclusion = () => {
    if (newExclusion.trim()) {
      setFormData((prevState) => ({
        ...prevState,
        exclusions: [...prevState.exclusions, newExclusion.trim()],
      }));
      setNewExclusion("");
    }
  };

  const handleAddHighlight = () => {
    if (newHighlight.trim()) {
      setFormData((prevState) => ({
        ...prevState,
        highlights: [...prevState.highlights, newHighlight.trim()],
      }));
      setNewHighlight("");
    }
  };

  const handleAddItineraryDay = () => {
    if (newItineraryDay.day && newItineraryDay.activities) {
      setFormData((prevState) => ({
        ...prevState,
        itinerary: [...prevState.itinerary, { ...newItineraryDay }],
      }));
      setNewItineraryDay({
        day: "",
        activities: "",
        meals: "",
        accommodation: "",
      });
    }
  };

  const handleDeleteItem = (array, index) => {
    setFormData((prevState) => ({
      ...prevState,
      [array]: prevState[array].filter((_, i) => i !== index),
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setSnackbar({
      open: true,
      message: "Holiday package added successfully!",
      severity: "success",
    });
    setTimeout(() => navigate("/admin/holidays"), 2000);
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
              Add New Holiday Package
            </Typography>
            <form onSubmit={handleSubmit}>
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Package Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Description"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    multiline
                    rows={4}
                    required
                  />
                </Grid>

                {/* Destinations */}
                <Grid item xs={12}>
                  <Box sx={{ mb: 2 }}>
                    <Typography variant="h6" sx={{ mb: 1 }}>
                      Destinations
                    </Typography>
                    <Box sx={{ display: "flex", gap: 1, mb: 2 }}>
                      <TextField
                        fullWidth
                        label="Add Destination"
                        value={newDestination}
                        onChange={(e) => setNewDestination(e.target.value)}
                      />
                      <Button
                        variant="contained"
                        onClick={handleAddDestination}
                        startIcon={<AddIcon />}
                      >
                        Add
                      </Button>
                    </Box>
                    <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                      {formData.destinations.map((dest, index) => (
                        <Chip
                          key={index}
                          label={dest}
                          onDelete={() =>
                            handleDeleteItem("destinations", index)
                          }
                        />
                      ))}
                    </Box>
                  </Box>
                </Grid>

                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    label="Duration (days)"
                    name="duration"
                    type="number"
                    value={formData.duration}
                    onChange={handleChange}
                    required
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">days</InputAdornment>
                      ),
                    }}
                  />
                </Grid>

                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    label="Price per Person"
                    name="price"
                    type="number"
                    value={formData.price}
                    onChange={handleChange}
                    required
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">₹</InputAdornment>
                      ),
                    }}
                  />
                </Grid>

                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    label="Start Date"
                    name="startDate"
                    type="date"
                    value={formData.startDate}
                    onChange={handleChange}
                    required
                    InputLabelProps={{ shrink: true }}
                  />
                </Grid>

                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    label="End Date"
                    name="endDate"
                    type="date"
                    value={formData.endDate}
                    onChange={handleChange}
                    required
                    InputLabelProps={{ shrink: true }}
                  />
                </Grid>

                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    label="Maximum Group Size"
                    name="maxGroupSize"
                    type="number"
                    value={formData.maxGroupSize}
                    onChange={handleChange}
                    required
                  />
                </Grid>

                <Grid item xs={12} md={6}>
                  <FormControl fullWidth required>
                    <InputLabel>Status</InputLabel>
                    <Select
                      name="status"
                      value={formData.status}
                      onChange={handleChange}
                      label="Status"
                    >
                      {statusOptions.map((status) => (
                        <MenuItem key={status} value={status}>
                          {status}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Grid>

                {/* Inclusions */}
                <Grid item xs={12} md={6}>
                  <Box sx={{ mb: 2 }}>
                    <Typography variant="h6" sx={{ mb: 1 }}>
                      Inclusions
                    </Typography>
                    <Box sx={{ display: "flex", gap: 1, mb: 2 }}>
                      <TextField
                        fullWidth
                        label="Add Inclusion"
                        value={newInclusion}
                        onChange={(e) => setNewInclusion(e.target.value)}
                      />
                      <Button
                        variant="contained"
                        onClick={handleAddInclusion}
                        startIcon={<AddIcon />}
                      >
                        Add
                      </Button>
                    </Box>
                    <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                      {formData.inclusions.map((item, index) => (
                        <Chip
                          key={index}
                          label={item}
                          onDelete={() => handleDeleteItem("inclusions", index)}
                        />
                      ))}
                    </Box>
                  </Box>
                </Grid>

                {/* Exclusions */}
                <Grid item xs={12} md={6}>
                  <Box sx={{ mb: 2 }}>
                    <Typography variant="h6" sx={{ mb: 1 }}>
                      Exclusions
                    </Typography>
                    <Box sx={{ display: "flex", gap: 1, mb: 2 }}>
                      <TextField
                        fullWidth
                        label="Add Exclusion"
                        value={newExclusion}
                        onChange={(e) => setNewExclusion(e.target.value)}
                      />
                      <Button
                        variant="contained"
                        onClick={handleAddExclusion}
                        startIcon={<AddIcon />}
                      >
                        Add
                      </Button>
                    </Box>
                    <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                      {formData.exclusions.map((item, index) => (
                        <Chip
                          key={index}
                          label={item}
                          onDelete={() => handleDeleteItem("exclusions", index)}
                        />
                      ))}
                    </Box>
                  </Box>
                </Grid>

                {/* Highlights */}
                <Grid item xs={12}>
                  <Box sx={{ mb: 2 }}>
                    <Typography variant="h6" sx={{ mb: 1 }}>
                      Package Highlights
                    </Typography>
                    <Box sx={{ display: "flex", gap: 1, mb: 2 }}>
                      <TextField
                        fullWidth
                        label="Add Highlight"
                        value={newHighlight}
                        onChange={(e) => setNewHighlight(e.target.value)}
                      />
                      <Button
                        variant="contained"
                        onClick={handleAddHighlight}
                        startIcon={<AddIcon />}
                      >
                        Add
                      </Button>
                    </Box>
                    <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                      {formData.highlights.map((item, index) => (
                        <Chip
                          key={index}
                          label={item}
                          onDelete={() => handleDeleteItem("highlights", index)}
                        />
                      ))}
                    </Box>
                  </Box>
                </Grid>

                {/* Itinerary */}
                <Grid item xs={12}>
                  <Box sx={{ mb: 2 }}>
                    <Typography variant="h6" sx={{ mb: 1 }}>
                      Itinerary
                    </Typography>
                    <Grid container spacing={2} sx={{ mb: 2 }}>
                      <Grid item xs={12} md={3}>
                        <TextField
                          fullWidth
                          label="Day"
                          value={newItineraryDay.day}
                          onChange={(e) =>
                            setNewItineraryDay({
                              ...newItineraryDay,
                              day: e.target.value,
                            })
                          }
                        />
                      </Grid>
                      <Grid item xs={12} md={3}>
                        <TextField
                          fullWidth
                          label="Activities"
                          value={newItineraryDay.activities}
                          onChange={(e) =>
                            setNewItineraryDay({
                              ...newItineraryDay,
                              activities: e.target.value,
                            })
                          }
                        />
                      </Grid>
                      <Grid item xs={12} md={3}>
                        <TextField
                          fullWidth
                          label="Meals"
                          value={newItineraryDay.meals}
                          onChange={(e) =>
                            setNewItineraryDay({
                              ...newItineraryDay,
                              meals: e.target.value,
                            })
                          }
                        />
                      </Grid>
                      <Grid item xs={12} md={3}>
                        <Box sx={{ display: "flex", gap: 1 }}>
                          <TextField
                            fullWidth
                            label="Accommodation"
                            value={newItineraryDay.accommodation}
                            onChange={(e) =>
                              setNewItineraryDay({
                                ...newItineraryDay,
                                accommodation: e.target.value,
                              })
                            }
                          />
                          <Button
                            variant="contained"
                            onClick={handleAddItineraryDay}
                            startIcon={<AddIcon />}
                          >
                            Add
                          </Button>
                        </Box>
                      </Grid>
                    </Grid>
                    {formData.itinerary.map((day, index) => (
                      <Paper
                        key={index}
                        sx={{ p: 2, mb: 2, position: "relative" }}
                      >
                        <IconButton
                          sx={{ position: "absolute", right: 8, top: 8 }}
                          onClick={() => handleDeleteItem("itinerary", index)}
                        >
                          <DeleteIcon />
                        </IconButton>
                        <Typography variant="subtitle1">
                          Day {day.day}
                        </Typography>
                        <Typography>Activities: {day.activities}</Typography>
                        <Typography>Meals: {day.meals}</Typography>
                        <Typography>
                          Accommodation: {day.accommodation}
                        </Typography>
                      </Paper>
                    ))}
                  </Box>
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Accommodation Details"
                    name="accommodation"
                    value={formData.accommodation}
                    onChange={handleChange}
                    multiline
                    rows={3}
                    required
                  />
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Transportation Details"
                    name="transportation"
                    value={formData.transportation}
                    onChange={handleChange}
                    multiline
                    rows={3}
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
                    rows={3}
                    required
                  />
                </Grid>

                <Grid item xs={12}>
                  <Box
                    sx={{ display: "flex", gap: 2, justifyContent: "flex-end" }}
                  >
                    <Button
                      variant="outlined"
                      onClick={() => navigate("/admin/holidays")}
                    >
                      Cancel
                    </Button>
                    <Button
                      type="submit"
                      variant="contained"
                      sx={{
                        backgroundColor: "#6246EA",
                        "&:hover": { backgroundColor: "#5438D5" },
                      }}
                    >
                      Save Package
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

export default HolidayForm;
