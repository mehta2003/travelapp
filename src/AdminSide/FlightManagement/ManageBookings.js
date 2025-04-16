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
  Chip,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Snackbar,
  Alert,
} from "@mui/material";
import AdminNavbar from "../AdminDashboard/AdminNavbar";

function ManageBookings() {
  const [bookings, setBookings] = useState([
    {
      id: 1,
      bookingId: "BK001",
      flightNumber: "FL001",
      passengerName: "John Doe",
      source: "Delhi",
      destination: "Mumbai",
      travelDate: "2024-02-20",
      status: "confirmed",
      amount: 5000,
    },
    // Add more sample bookings here
  ]);

  const [selectedBooking, setSelectedBooking] = useState(null);
  const [cancelDialog, setCancelDialog] = useState(false);
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success",
  });

  const handleCancelBooking = (booking) => {
    setSelectedBooking(booking);
    setCancelDialog(true);
  };

  const confirmCancelBooking = () => {
    // Here you would typically make an API call to cancel the booking
    setBookings(
      bookings.map((booking) => {
        if (booking.id === selectedBooking.id) {
          return { ...booking, status: "cancelled" };
        }
        return booking;
      })
    );
    setCancelDialog(false);
    setSnackbar({
      open: true,
      message: "Booking cancelled successfully!",
      severity: "success",
    });
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "confirmed":
        return "success";
      case "pending":
        return "warning";
      case "cancelled":
        return "error";
      default:
        return "default";
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
          <Typography
            variant="h4"
            gutterBottom
            sx={{ color: "#2C3E50", mb: 4 }}
          >
            Manage Bookings
          </Typography>

          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow sx={{ backgroundColor: "#f8f9fa" }}>
                  <TableCell>Booking ID</TableCell>
                  <TableCell>Flight Number</TableCell>
                  <TableCell>Passenger Name</TableCell>
                  <TableCell>Source</TableCell>
                  <TableCell>Destination</TableCell>
                  <TableCell>Travel Date</TableCell>
                  <TableCell>Amount (₹)</TableCell>
                  <TableCell>Status</TableCell>
                  <TableCell>Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {bookings.map((booking) => (
                  <TableRow key={booking.id}>
                    <TableCell>{booking.bookingId}</TableCell>
                    <TableCell>{booking.flightNumber}</TableCell>
                    <TableCell>{booking.passengerName}</TableCell>
                    <TableCell>{booking.source}</TableCell>
                    <TableCell>{booking.destination}</TableCell>
                    <TableCell>{booking.travelDate}</TableCell>
                    <TableCell>{booking.amount}</TableCell>
                    <TableCell>
                      <Chip
                        label={booking.status}
                        color={getStatusColor(booking.status)}
                        size="small"
                      />
                    </TableCell>
                    <TableCell>
                      <Button
                        variant="outlined"
                        color="error"
                        size="small"
                        onClick={() => handleCancelBooking(booking)}
                        disabled={booking.status === "cancelled"}
                      >
                        Cancel
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Container>
      </Box>

      <Dialog open={cancelDialog} onClose={() => setCancelDialog(false)}>
        <DialogTitle>Confirm Cancellation</DialogTitle>
        <DialogContent>
          Are you sure you want to cancel booking {selectedBooking?.bookingId}?
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setCancelDialog(false)}>No</Button>
          <Button onClick={confirmCancelBooking} color="error" autoFocus>
            Yes, Cancel
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

export default ManageBookings;
