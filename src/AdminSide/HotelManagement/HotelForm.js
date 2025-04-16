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
  InputAdornment,
} from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import AdminNavbar from "../AdminDashboard/AdminNavbar";

function HotelForm() {
  const navigate = useNavigate();
  const { id } = useParams();
  const isEditMode = Boolean(id);

  const [formData, setFormData] = useState({
    hotelName: "",
    address: "",
    city: "",
    state: "",
    country: "",
    rating: "",
    description: "",
    checkInTime: "",
    checkOutTime: "",
    cancellationPolicy: "",
    imageUrl: "",
    roomTypes: [
      {
        type: "Deluxe Room",
        price: "",
        size: "",
        occupancy: "",
        amenities: [],
      },
      {
        type: "Premium Suite",
        price: "",
        size: "",
        occupancy: "",
        amenities: [],
      },
      {
        type: "Executive Room",
        price: "",
        size: "",
        occupancy: "",
        amenities: [],
      },
    ],
    generalAmenities: [],
  });

  const amenityOptions = [
    "WiFi",
    "Swimming Pool",
    "Spa",
    "Gym",
    "Restaurant",
    "Room Service",
    "Parking",
    "Bar",
    "Conference Room",
    "Business Center",
  ];

  const roomAmenityOptions = [
    "King Bed",
    "Twin Bed",
    "City View",
    "River View",
    "Free WiFi",
    "Breakfast Included",
    "Breakfast & Dinner",
    "Lounge Access",
    "Mini Bar",
    "Coffee Maker",
  ];

  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  useEffect(() => {
    if (isEditMode && id) {
      // Here you would typically fetch hotel data from API
      const mockHotels = [
        {
          id: 1,
          hotelName: "Grand Plaza Hotel",
          address: "123 Main St",
          city: "Mumbai",
          state: "Maharashtra",
          country: "India",
          rating: 4,
          pricePerNight: "12000",
          totalRooms: "120",
          amenities: "WiFi, Pool, Spa",
          description: "Luxury hotel in the heart of Mumbai",
          checkInTime: "14:00",
          checkOutTime: "12:00",
          cancellationPolicy: "24 hours",
          imageUrl: "hotel.jpg",
        },
      ];
      const hotelToEdit = mockHotels.find((hotel) => hotel.id === parseInt(id));
      if (hotelToEdit) {
        setFormData(hotelToEdit);
      }
    }
  }, [isEditMode, id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Here you would typically make an API call to save/update the hotel data
      console.log("Form submitted:", formData);

      setSnackbar({
        open: true,
        message: isEditMode
          ? "Hotel updated successfully!"
          : "Hotel added successfully!",
        severity: "success",
      });

      // Navigate back to hotel list after successful submission
      setTimeout(() => navigate("/admin/hotels"), 2000);
    } catch (error) {
      setSnackbar({
        open: true,
        message: "Error saving hotel. Please try again.",
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
              {isEditMode ? "Edit Hotel" : "Add New Hotel"}
            </Typography>
            <form onSubmit={handleSubmit}>
              <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    label="Hotel Name"
                    name="hotelName"
                    value={formData.hotelName}
                    onChange={handleChange}
                    required
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    label="Address"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    required
                  />
                </Grid>
                <Grid item xs={12} md={4}>
                  <TextField
                    fullWidth
                    label="City"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    required
                  />
                </Grid>
                <Grid item xs={12} md={4}>
                  <TextField
                    fullWidth
                    label="State"
                    name="state"
                    value={formData.state}
                    onChange={handleChange}
                    required
                  />
                </Grid>
                <Grid item xs={12} md={4}>
                  <TextField
                    fullWidth
                    label="Country"
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                    required
                  />
                </Grid>
                <Grid item xs={12} md={4}>
                  <FormControl fullWidth required>
                    <InputLabel>Rating</InputLabel>
                    <Select
                      name="rating"
                      value={formData.rating}
                      onChange={handleChange}
                      label="Rating"
                    >
                      {[1, 2, 3, 4, 5].map((rating) => (
                        <MenuItem key={rating} value={rating}>
                          {rating} Star
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Grid>
                {formData.roomTypes.map((room, index) => (
                  <React.Fragment key={index}>
                    <Grid item xs={12}>
                      <Typography variant="h6" sx={{ mt: 2, mb: 2 }}>
                        {room.type} Details
                      </Typography>
                    </Grid>
                    <Grid item xs={12} md={3}>
                      <TextField
                        fullWidth
                        label="Price per Night"
                        name={`roomTypes.${index}.price`}
                        type="number"
                        value={room.price}
                        onChange={(e) => {
                          const newRoomTypes = [...formData.roomTypes];
                          newRoomTypes[index].price = e.target.value;
                          setFormData({ ...formData, roomTypes: newRoomTypes });
                        }}
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">₹</InputAdornment>
                          ),
                        }}
                        required
                      />
                    </Grid>
                    <Grid item xs={12} md={3}>
                      <TextField
                        fullWidth
                        label="Room Size"
                        name={`roomTypes.${index}.size`}
                        value={room.size}
                        onChange={(e) => {
                          const newRoomTypes = [...formData.roomTypes];
                          newRoomTypes[index].size = e.target.value;
                          setFormData({ ...formData, roomTypes: newRoomTypes });
                        }}
                        placeholder="e.g. 32 sq.m"
                        required
                      />
                    </Grid>
                    <Grid item xs={12} md={3}>
                      <TextField
                        fullWidth
                        label="Max Occupancy"
                        name={`roomTypes.${index}.occupancy`}
                        value={room.occupancy}
                        onChange={(e) => {
                          const newRoomTypes = [...formData.roomTypes];
                          newRoomTypes[index].occupancy = e.target.value;
                          setFormData({ ...formData, roomTypes: newRoomTypes });
                        }}
                        placeholder="e.g. 2 Adults, 1 Child"
                        required
                      />
                    </Grid>
                    <Grid item xs={12} md={3}>
                      <FormControl fullWidth required>
                        <InputLabel>Room Amenities</InputLabel>
                        <Select
                          multiple
                          value={room.amenities}
                          onChange={(e) => {
                            const newRoomTypes = [...formData.roomTypes];
                            newRoomTypes[index].amenities = e.target.value;
                            setFormData({
                              ...formData,
                              roomTypes: newRoomTypes,
                            });
                          }}
                          label="Room Amenities"
                          renderValue={(selected) => selected.join(", ")}
                        >
                          {roomAmenityOptions.map((amenity) => (
                            <MenuItem key={amenity} value={amenity}>
                              {amenity}
                            </MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                    </Grid>
                  </React.Fragment>
                ))}

                <Grid item xs={12}>
                  <Typography variant="h6" sx={{ mt: 2, mb: 2 }}>
                    General Hotel Amenities
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <FormControl fullWidth required>
                    <InputLabel>Hotel Amenities</InputLabel>
                    <Select
                      multiple
                      value={formData.generalAmenities}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          generalAmenities: e.target.value,
                        })
                      }
                      label="Hotel Amenities"
                      renderValue={(selected) => selected.join(", ")}
                    >
                      {amenityOptions.map((amenity) => (
                        <MenuItem key={amenity} value={amenity}>
                          {amenity}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                  value={formData.pricePerNight}
                  onChange={handleChange}
                  required InputProps=
                  {{
                    startAdornment: (
                      <InputAdornment position="start">₹</InputAdornment>
                    ),
                  }}
                  {/* {'>'} */}
                </Grid>
                <Grid item xs={12} md={4}>
                  <TextField
                    fullWidth
                    label="Total Rooms"
                    name="totalRooms"
                    type="number"
                    value={formData.totalRooms}
                    onChange={handleChange}
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Amenities"
                    name="amenities"
                    value={formData.amenities}
                    onChange={handleChange}
                    placeholder="Enter amenities separated by commas"
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
                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    label="Check-in Time"
                    name="checkInTime"
                    type="time"
                    value={formData.checkInTime}
                    onChange={handleChange}
                    required
                    InputLabelProps={{ shrink: true }}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    label="Check-out Time"
                    name="checkOutTime"
                    type="time"
                    value={formData.checkOutTime}
                    onChange={handleChange}
                    required
                    InputLabelProps={{ shrink: true }}
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
                  <TextField
                    fullWidth
                    label="Image URL"
                    name="imageUrl"
                    value={formData.imageUrl}
                    onChange={handleChange}
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <Box
                    sx={{ display: "flex", gap: 2, justifyContent: "flex-end" }}
                  >
                    <Button
                      variant="outlined"
                      onClick={() => navigate("/admin/hotels")}
                    >
                      Cancel
                    </Button>
                    <Button
                      type="submit"
                      variant="contained"
                      sx={{ bgcolor: "#2C3E50" }}
                    >
                      {isEditMode ? "Update Hotel" : "Add Hotel"}
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

export default HotelForm;
