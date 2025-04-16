import React, { useState } from "react";
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
  MenuItem,
  FormControl,
  Select,
  InputLabel,
  LocalizationProvider,Checkbox,ListItemText
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import DirectionsBusIcon from "@mui/icons-material/DirectionsBus";
import EventSeatIcon from "@mui/icons-material/EventSeat";
import SpeedIcon from "@mui/icons-material/Speed";
import AdminNavbar from "../AdminDashboard/AdminNavbar";
import { useNavigate } from "react-router-dom";

// Update mockBuses data structure
const mockBuses = [
  {
    id: 1,
    busNumber: "KA-01-HX-1234",
    from: "Bangalore",
    to: "Mumbai",
    type: "AC Sleeper",
    departureDate: "2024-02-20",
    departureTime: "21:00",
    arrivalDate: "2024-02-21",
    arrivalTime: "09:00",
    totalSeats: 40,
    availableSeats: 12,
    fare: 1500,
    amenities: ["WiFi", "USB Charging", "Blanket", "Water Bottle"],
    busOperator: "VRL Travels"
  },
  {
    id: 2,
    busNumber: "MH-02-YY-5678",
    route: "Mumbai - Delhi",
    type: "AC Seater",
    departureTime: "18:00",
    arrivalTime: "12:00",
    totalSeats: 45,
    bookedSeats: 30,
    fare: 2000,
  },
  {
    id: 3,
    busNumber: "DL-03-ZZ-9012",
    route: "Delhi - Jaipur",
    type: "Non-AC Sleeper",
    departureTime: "20:00",
    arrivalTime: "06:00",
    totalSeats: 35,
    bookedSeats: 20,
    fare: 800,
  },
];

const busTypes = ["AC Sleeper", "AC Seater", "Non-AC Sleeper", "Non-AC Seater"];

function BusDashboard() {
  const navigate = useNavigate();
  const [buses, setBuses] = useState(mockBuses);
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedBus, setSelectedBus] = useState(null);
  const [formData, setFormData] = useState({
    busNumber: "",
    from: "",
    to: "",
    type: busTypes[0],
    departureDate: "",
    departureTime: "",
    arrivalDate: "",
    arrivalTime: "",
    totalSeats: "",
    availableSeats: "",
    fare: "",
    amenities: [],
    busOperator: "",
    route: ""
  });

  // Remove duplicate Dialog component and move functions inside component
  const getTotalBookings = () => {
    return buses.reduce((sum, bus) => sum + (bus.bookedSeats || 0), 0);
  };

  const getAverageOccupancy = () => {
    const totalSeats = buses.reduce((sum, bus) => sum + (parseInt(bus.totalSeats) || 0), 0);
    const bookedSeats = getTotalBookings();
    return totalSeats > 0 ? ((bookedSeats / totalSeats) * 100).toFixed(1) : "0.0";
  };

  const handleAddBus = () => {
    // Navigate directly to BusForm page
    navigate('/admin/add-bus');
  };
            // Add handleCloseDialog function after other handler functions
const handleCloseDialog = () => {
  setOpenDialog(false);
  setSelectedBus(null);
  setFormData({
    busNumber: "",
    from: "",
    to: "",
    type: busTypes[0],
    departureDate: "",
    departureTime: "",
    arrivalDate: "",
    arrivalTime: "",
    totalSeats: "",
    availableSeats: "",
    fare: "",
    amenities: [],
    busOperator: "",
    route: ""
  });
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
              Bus Management
            </Typography>
            <Button
              variant="contained"
              startIcon={<AddIcon />}
              onClick={handleAddBus}
              sx={{
                backgroundColor: "#00A699",
                "&:hover": { backgroundColor: "#008F86" },
              }}
            >
              Add New Bus
            </Button>
          </Box>
  
          <Grid container spacing={3} sx={{ mb: 4 }}>
            <Grid item xs={12} md={4}>
              <Card sx={{ backgroundColor: "#00A699", color: "white" }}>
                <CardContent>
                  <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                    <DirectionsBusIcon sx={{ fontSize: 40, mr: 2 }} />
                    <Typography variant="h6">Total Buses</Typography>
                  </Box>
                  <Typography variant="h3">{buses.length}</Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={4}>
              <Card sx={{ backgroundColor: "#2C3E50", color: "white" }}>
                <CardContent>
                  <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                    <EventSeatIcon sx={{ fontSize: 40, mr: 2 }} />
                    <Typography variant="h6">Total Bookings</Typography>
                  </Box>
                  <Typography variant="h3">{getTotalBookings()}</Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={4}>
              <Card sx={{ backgroundColor: "#FF385C", color: "white" }}>
                <CardContent>
                  <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                    <SpeedIcon sx={{ fontSize: 40, mr: 2 }} />
                    <Typography variant="h6">Average Occupancy</Typography>
                  </Box>
                  <Typography variant="h3">{getAverageOccupancy()}%</Typography>
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
                      Bus Number
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="subtitle1" fontWeight="bold">
                      Route
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="subtitle1" fontWeight="bold">
                      Type
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="subtitle1" fontWeight="bold">
                      Departure
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="subtitle1" fontWeight="bold">
                      Arrival
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="subtitle1" fontWeight="bold">
                      Seats
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="subtitle1" fontWeight="bold">
                      Fare (₹)
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
                {buses.map((bus) => (
                  <TableRow key={bus.id} hover>
                    <TableCell>{bus.busNumber}</TableCell>
                    <TableCell>{bus.route}</TableCell>
                    <TableCell>{bus.type}</TableCell>
                    <TableCell>{bus.departureTime}</TableCell>
                    <TableCell>{bus.arrivalTime}</TableCell>
                    <TableCell>{`${bus.bookedSeats}/${bus.totalSeats}`}</TableCell>
                    <TableCell>{bus.fare}</TableCell>
                    <TableCell>
                      <IconButton
                        size="small"
onClick={() => {
  setSelectedBus(bus);
  setFormData({
    ...bus,
    amenities: bus.amenities || []
  });
  setOpenDialog(true);
}}
                        sx={{ color: "#2C3E50" }}
                      >
                        <EditIcon />
                      </IconButton>
                      <IconButton
                        size="small"
onClick={() => {
  const updatedBuses = buses.filter((b) => b.id !== bus.id);
  setBuses(updatedBuses);
}}
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
  

          
          
          <Dialog open={openDialog} onClose={handleCloseDialog} maxWidth="md" fullWidth>
            <DialogTitle>{selectedBus ? "Edit Bus" : "Add New Bus"}</DialogTitle>
            <form onSubmit={(e) => {
              e.preventDefault();
              const updatedBuses = selectedBus
                ? buses.map((b) => (b.id === selectedBus.id ? { ...formData, id: b.id } : b))
                : [...buses, { ...formData, id: buses.length + 1 }];
              setBuses(updatedBuses);
              handleCloseDialog();
            }}>
              <DialogContent>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Bus Number"
                      name="busNumber"
                      value={formData.busNumber}
                      onChange={(e) => setFormData({ ...formData, busNumber: e.target.value })}
                      required
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="From"
                      name="from"
                      value={formData.from}
                      onChange={(e) => setFormData({ ...formData, from: e.target.value })}
                      required
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="To"
                      name="to"
                      value={formData.to}
                      onChange={(e) => setFormData({ ...formData, to: e.target.value })}
                      required
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      select
                      fullWidth
                      label="Bus Type"
                      value={formData.type}
                      onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                      required
                    >
                      {busTypes.map((type) => (
                        <MenuItem key={type} value={type}>
                          {type}
                        </MenuItem>
                      ))}
                    </TextField>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Departure Date"
                      type="date"
                      value={formData.departureDate}
                      onChange={(e) => setFormData({ ...formData, departureDate: e.target.value })}
                      InputLabelProps={{ shrink: true }}
                      required
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Departure Time"
                      type="time"
                      value={formData.departureTime}
                      onChange={(e) => setFormData({ ...formData, departureTime: e.target.value })}
                      InputLabelProps={{ shrink: true }}
                      required
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Arrival Date"
                      type="date"
                      value={formData.arrivalDate}
                      onChange={(e) => setFormData({ ...formData, arrivalDate: e.target.value })}
                      InputLabelProps={{ shrink: true }}
                      required
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Arrival Time"
                      type="time"
                      value={formData.arrivalTime}
                      onChange={(e) => setFormData({ ...formData, arrivalTime: e.target.value })}
                      InputLabelProps={{ shrink: true }}
                      required
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Total Seats"
                      type="number"
                      value={formData.totalSeats}
                      onChange={(e) => setFormData({ ...formData, totalSeats: e.target.value })}
                      required
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Fare"
                      type="number"
                      value={formData.fare}
                      onChange={(e) => setFormData({ ...formData, fare: e.target.value })}
                      required
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Bus Operator"
                      value={formData.busOperator}
                      onChange={(e) => setFormData({ ...formData, busOperator: e.target.value })}
                      required
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <FormControl fullWidth>
                      <InputLabel>Amenities</InputLabel>
                      <Select
                        multiple
                        value={formData.amenities}
                        onChange={(e) => setFormData({ ...formData, amenities: e.target.value })}
                        renderValue={(selected) => selected.join(", ")}
                      >
                        {["WiFi", "USB Charging", "Blanket", "Water Bottle", "Snacks", "Movie", "Reading Light"].map((amenity) => (
                          <MenuItem key={amenity} value={amenity}>
                            <Checkbox checked={formData.amenities.indexOf(amenity) > -1} />
                            <ListItemText primary={amenity} />
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </Grid>
                </Grid>
              </DialogContent>
              <DialogActions>
                <Button onClick={handleCloseDialog}>Cancel</Button>
                <Button
                  type="submit"
                  variant="contained"
                  sx={{
                    backgroundColor: "#00A699",
                    "&:hover": { backgroundColor: "#008F86" },
                  }}
                >
                  {selectedBus ? "Save Changes" : "Add Bus"}
                </Button>
              </DialogActions>
            </form>
          </Dialog>
        </Container>
      </Box>
    </AdminNavbar>
  );
}

export default BusDashboard;
