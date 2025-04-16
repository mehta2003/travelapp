import React, { useState } from "react";
import {
  Box,
  Container,
  Typography,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Button,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Snackbar,
  Alert,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import AdminNavbar from "../AdminDashboard/AdminNavbar";

function AdminFlightPanel() {
  const navigate = useNavigate();
  const [flights, setFlights] = useState([
    {
      id: 1,
      flightNumber: "FL001",
      airline: "Air India",
      source: "Delhi",
      destination: "Mumbai",
      departureTime: "2024-02-20 10:00 AM",
      arrivalTime: "2024-02-20 12:00 PM",
      price: 5000,
      availableSeats: 120,
    },
    // Add more sample flights here
  ]);

  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [selectedFlight, setSelectedFlight] = useState(null);
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success",
  });

  const handleAddFlight = () => {
    navigate("/admin/add-flight");
  };

  const handleEditFlight = (flight) => {
    // Navigate to edit flight page with flight data
    navigate(`/admin/edit-flight/${flight.id}`, { state: { flight } });
  };

  const handleDeleteClick = (flight) => {
    setSelectedFlight(flight);
    setDeleteDialogOpen(true);
  };

  const handleDeleteConfirm = () => {
    // Here you would typically make an API call to delete the flight
    setFlights(flights.filter((f) => f.id !== selectedFlight.id));
    setDeleteDialogOpen(false);
    setSnackbar({
      open: true,
      message: "Flight deleted successfully!",
      severity: "success",
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
        <Container maxWidth="lg">
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              mb: 4,
            }}
          >
            <Typography variant="h4" sx={{ color: "#2C3E50" }}>
              Flight Management
            </Typography>
            <Button
              variant="contained"
              startIcon={<AddIcon />}
              onClick={handleAddFlight}
              sx={{
                backgroundColor: "#2C3E50",
                "&:hover": {
                  backgroundColor: "#34495E",
                },
              }}
            >
              Add New Flight
            </Button>
          </Box>

          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow sx={{ backgroundColor: "#f8f9fa" }}>
                  <TableCell>Flight Number</TableCell>
                  <TableCell>Airline</TableCell>
                  <TableCell>Source</TableCell>
                  <TableCell>Destination</TableCell>
                  <TableCell>Departure</TableCell>
                  <TableCell>Arrival</TableCell>
                  <TableCell>Price (₹)</TableCell>
                  <TableCell>Available Seats</TableCell>
                  <TableCell>Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {flights.map((flight) => (
                  <TableRow key={flight.id}>
                    <TableCell>{flight.flightNumber}</TableCell>
                    <TableCell>{flight.airline}</TableCell>
                    <TableCell>{flight.source}</TableCell>
                    <TableCell>{flight.destination}</TableCell>
                    <TableCell>{flight.departureTime}</TableCell>
                    <TableCell>{flight.arrivalTime}</TableCell>
                    <TableCell>{flight.price}</TableCell>
                    <TableCell>{flight.availableSeats}</TableCell>
                    <TableCell>
                      <IconButton
                        onClick={() => handleEditFlight(flight)}
                        color="primary"
                        size="small"
                      >
                        <EditIcon />
                      </IconButton>
                      <IconButton
                        onClick={() => handleDeleteClick(flight)}
                        color="error"
                        size="small"
                      >
                        <DeleteIcon />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Container>
      </Box>

      <Dialog
        open={deleteDialogOpen}
        onClose={() => setDeleteDialogOpen(false)}
      >
        <DialogTitle>Confirm Delete</DialogTitle>
        <DialogContent>
          Are you sure you want to delete flight {selectedFlight?.flightNumber}?
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setDeleteDialogOpen(false)}>Cancel</Button>
          <Button onClick={handleDeleteConfirm} color="error" autoFocus>
            Delete
          </Button>
        </DialogActions>
      </Dialog>

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

export default AdminFlightPanel;
