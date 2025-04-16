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
  Chip,
  TextField,
  InputAdornment,
  IconButton,
  Snackbar,
  Alert,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import AdminNavbar from "../AdminDashboard/AdminNavbar";

function ManagePayments() {
  const [payments, setPayments] = useState([
    {
      id: 1,
      transactionId: "TXN001",
      bookingId: "BK001",
      passengerName: "John Doe",
      amount: 5000,
      paymentDate: "2024-02-20",
      paymentMethod: "Credit Card",
      status: "success",
    },
    // Add more sample payments here
  ]);

  const [searchQuery, setSearchQuery] = useState("");
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success",
  });

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredPayments = payments.filter(
    (payment) =>
      payment.transactionId.toLowerCase().includes(searchQuery.toLowerCase()) ||
      payment.bookingId.toLowerCase().includes(searchQuery.toLowerCase()) ||
      payment.passengerName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const getStatusColor = (status) => {
    switch (status) {
      case "success":
        return "success";
      case "pending":
        return "warning";
      case "failed":
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
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              mb: 4,
            }}
          >
            <Typography variant="h4" sx={{ color: "#2C3E50" }}>
              Payment Transactions
            </Typography>
            <TextField
              variant="outlined"
              size="small"
              placeholder="Search transactions..."
              value={searchQuery}
              onChange={handleSearch}
              sx={{ width: 300 }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <IconButton size="small">
                      <SearchIcon />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </Box>

          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow sx={{ backgroundColor: "#f8f9fa" }}>
                  <TableCell>Transaction ID</TableCell>
                  <TableCell>Booking ID</TableCell>
                  <TableCell>Passenger Name</TableCell>
                  <TableCell>Amount (₹)</TableCell>
                  <TableCell>Payment Date</TableCell>
                  <TableCell>Payment Method</TableCell>
                  <TableCell>Status</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {filteredPayments.map((payment) => (
                  <TableRow key={payment.id}>
                    <TableCell>{payment.transactionId}</TableCell>
                    <TableCell>{payment.bookingId}</TableCell>
                    <TableCell>{payment.passengerName}</TableCell>
                    <TableCell>{payment.amount}</TableCell>
                    <TableCell>{payment.paymentDate}</TableCell>
                    <TableCell>{payment.paymentMethod}</TableCell>
                    <TableCell>
                      <Chip
                        label={payment.status}
                        color={getStatusColor(payment.status)}
                        size="small"
                      />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
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

export default ManagePayments;
