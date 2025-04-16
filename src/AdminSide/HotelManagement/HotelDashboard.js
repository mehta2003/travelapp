import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Container,
  Grid,
  Paper,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Button,
  IconButton,
  Card,
  CardContent,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Rating,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import HotelIcon from "@mui/icons-material/Hotel";
import BookOnlineIcon from "@mui/icons-material/BookOnline";
import StarIcon from "@mui/icons-material/Star";
import AdminNavbar from "../AdminDashboard/AdminNavbar";
import HotelForm from "./HotelForm";
// import { useNavigate } from "react-router-dom";

const mockHotels = [
  {
    id: 1,
    name: "Grand Plaza Hotel",
    location: "Mumbai, India",
    rating: 4.5,
    price: 12000,
    rooms: 120,
    bookings: 85,
  },
  {
    id: 2,
    name: "Royal Palace Resort",
    location: "Delhi, India",
    rating: 4.8,
    price: 15000,
    rooms: 200,
    bookings: 150,
  },
  {
    id: 3,
    name: "Sunset Beach Resort",
    location: "Goa, India",
    rating: 4.3,
    price: 8000,
    rooms: 80,
    bookings: 60,
  },
];

function HotelDashboard() {
  const navigate = useNavigate();
  const [hotels, setHotels] = useState(mockHotels);
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedHotel, setSelectedHotel] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    location: "",
    price: "",
    rooms: "",
    rating: 0,
    bookings: 0,
  });

  const handleAddHotel = () => {
    navigate("/admin/add-hotel");
    // setFormData({
    //   name: "",
    //   location: "",
    //   price: "",
    //   rooms: "",
    //   rating: 0,
    //   bookings: 0,
    // });
    setOpenDialog(true);
  };

  const handleEditHotel = (hotel) => {
    navigate(`/admin/edit-hotel/${hotel.id}`);
    // setFormData({
    //   name: hotel.name,
    //   location: hotel.location,
    //   price: hotel.price,
    //   rooms: hotel.rooms,
    //   rating: hotel.rating,
    //   bookings: hotel.bookings,
    // });
    // setSelectedHotel(hotel);
    // setOpenDialog(true);
  };

  const handleDeleteHotel = (hotelId) => {
    if (window.confirm("Are you sure you want to delete this hotel?")) {
      setHotels(hotels.filter((hotel) => hotel.id !== hotelId));
      alert("Hotel deleted successfully");
    }
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setSelectedHotel(null);
    setFormData({
      name: "",
      location: "",
      price: "",
      rooms: "",
      rating: 0,
      bookings: 0,
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSaveHotel = (event) => {
    event.preventDefault();
    if (selectedHotel) {
      setHotels(
        hotels.map((hotel) =>
          hotel.id === selectedHotel.id ? { ...hotel, ...formData } : hotel
        )
      );
    } else {
      const newHotel = {
        id: hotels.length + 1,
        ...formData,
      };
      setHotels([...hotels, newHotel]);
    }
    handleCloseDialog();
  };

  return (
    <AdminNavbar>
      <Box sx={{ flexGrow: 1, py: 3 }}>
        <Container maxWidth="xl">
          <Box
            sx={{
              mb: 4,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography variant="h4" sx={{ fontWeight: 700, color: "#2C3E50" }}>
              Hotel Management
            </Typography>
            <Button
              variant="contained"
              startIcon={<AddIcon />}
              onClick={handleAddHotel}
              sx={{
                backgroundColor: "#FF385C",
                "&:hover": { backgroundColor: "#FF1F4C" },
              }}
            >
              Add New Hotel
            </Button>
          </Box>

          <Grid container spacing={3} sx={{ mb: 4 }}>
            <Grid item xs={12} md={4}>
              <Card sx={{ backgroundColor: "#FF385C", color: "white" }}>
                <CardContent>
                  <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                    <HotelIcon sx={{ fontSize: 40, mr: 2 }} />
                    <Typography variant="h6">Total Hotels</Typography>
                  </Box>
                  <Typography variant="h3">{hotels.length}</Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={4}>
              <Card sx={{ backgroundColor: "#2C3E50", color: "white" }}>
                <CardContent>
                  <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                    <BookOnlineIcon sx={{ fontSize: 40, mr: 2 }} />
                    <Typography variant="h6">Total Bookings</Typography>
                  </Box>
                  <Typography variant="h3">
                    {hotels.reduce((sum, hotel) => sum + hotel.bookings, 0)}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={4}>
              <Card sx={{ backgroundColor: "#00A699", color: "white" }}>
                <CardContent>
                  <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                    <StarIcon sx={{ fontSize: 40, mr: 2 }} />
                    <Typography variant="h6">Average Rating</Typography>
                  </Box>
                  <Typography variant="h3">
                    {(
                      hotels.reduce((sum, hotel) => sum + hotel.rating, 0) /
                      hotels.length
                    ).toFixed(1)}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>

          <TableContainer
            component={Paper}
            sx={{ boxShadow: "0 0 10px rgba(0,0,0,0.1)" }}
          >
            <Table>
              <TableHead>
                <TableRow sx={{ backgroundColor: "#f5f5f5" }}>
                  <TableCell>
                    <Typography variant="subtitle1" fontWeight="bold">
                      Hotel Name
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="subtitle1" fontWeight="bold">
                      Location
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="subtitle1" fontWeight="bold">
                      Rating
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="subtitle1" fontWeight="bold">
                      Price (₹)
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="subtitle1" fontWeight="bold">
                      Rooms
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="subtitle1" fontWeight="bold">
                      Bookings
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="subtitle1" fontWeight="bold">
                      Actions
                    </Typography>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {hotels.map((hotel) => (
                  <TableRow key={hotel.id} hover>
                    <TableCell>{hotel.name}</TableCell>
                    <TableCell>{hotel.location}</TableCell>
                    // Update the Rating cell in the table
                    <TableCell>
                      <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <Rating
                          value={Number(hotel.rating)}
                          precision={0.1}
                          readOnly
                          size="small"
                        />
                        <Typography variant="body2" sx={{ ml: 1 }}>
                          {hotel.rating}
                        </Typography>
                      </Box>
                    </TableCell>
                    
                    // Update the form fields to handle numbers properly
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="Price"
                        name="price"
                        type="number"
                        value={formData.price}
                        onChange={(e) => handleChange(e)}
                        InputProps={{
                          startAdornment: <span style={{ marginRight: 8 }}>₹</span>
                        }}
                        required
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="Number of Rooms"
                        name="rooms"
                        type="number"
                        value={formData.rooms}
                        onChange={(e) => handleChange(e)}
                        inputProps={{ min: 0 }}
                        required
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Typography component="legend">Rating</Typography>
                      <Rating
                        name="rating"
                        value={Number(formData.rating)}
                        precision={0.5}
                        onChange={(event, newValue) => {
                          setFormData(prev => ({ ...prev, rating: newValue }));
                        }}
                      />
                    </Grid>
                    <TableCell>{hotel.price}</TableCell>
                    <TableCell>{hotel.rooms}</TableCell>
                    <TableCell>{hotel.bookings}</TableCell>
                    <TableCell>
                      <IconButton
                        size="small"
                        onClick={() => handleEditHotel(hotel)}
                        sx={{ color: "#2C3E50" }}
                      >
                        <EditIcon />
                      </IconButton>
                      <IconButton
                        size="small"
                        onClick={() => handleDeleteHotel(hotel.id)}
                        sx={{ color: "#FF385C" }}
                      >
                        <DeleteIcon />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>

          <Dialog
            open={openDialog}
            onClose={handleCloseDialog}
            maxWidth="sm"
            fullWidth
          >
            <DialogTitle>
              {selectedHotel ? "Edit Hotel" : "Add New Hotel"}
            </DialogTitle>
            <form onSubmit={handleSaveHotel}>
              <DialogContent>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Hotel Name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Location"
                      name="location"
                      value={formData.location}
                      onChange={handleChange}
                      required
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Price"
                      name="price"
                      type="number"
                      value={formData.price}
                      onChange={handleChange}
                      required
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Number of Rooms"
                      name="rooms"
                      type="number"
                      value={formData.rooms}
                      onChange={handleChange}
                      required
                    />
                  </Grid>
                </Grid>
              </DialogContent>
              <DialogActions>
                <Button onClick={handleCloseDialog}>Cancel</Button>
                <Button
                  type="submit"
                  variant="contained"
                  sx={{
                    backgroundColor: "#FF385C",
                    "&:hover": { backgroundColor: "#FF1F4C" },
                  }}
                >
                  {selectedHotel ? "Save Changes" : "Add Hotel"}
                </Button>
              </DialogActions>
            </form>
          </Dialog>
        </Container>
      </Box>
    </AdminNavbar>
  );
}

export default HotelDashboard;
