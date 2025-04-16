import React from 'react';
import { useLocation } from 'react-router-dom';
import {
  Box, Container, Typography, Paper, Divider, Button,
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow
} from '@mui/material';
import Navbar from '../Navbar';

function HotelPricing() {
  const location = useLocation();
  const { hotelData, roomData } = location.state || {};
  const GST_RATE = 0.18; // 18% GST

  const basePrice = parseInt(roomData.price.replace(/[^0-9]/g, ''));
  const gstAmount = basePrice * GST_RATE;
  const totalPrice = basePrice + gstAmount;

  return (
    <>
      <Navbar />
      <Box sx={{ bgcolor: '#f5f5f5', minHeight: '100vh', pt: 8 }}>
        <Container maxWidth="md">
          <Paper sx={{ p: 4, mt: 4 }}>
            <Typography variant="h4" gutterBottom>
              Booking Summary
            </Typography>
            
            <Box sx={{ my: 4 }}>
              <Typography variant="h6" gutterBottom>
                {hotelData?.name}
              </Typography>
              <Typography variant="subtitle1" color="text.secondary">
                {roomData?.type}
              </Typography>
            </Box>

            <TableContainer>
              <Table>
                <TableBody>
                  <TableRow>
                    <TableCell>Base Price (per night)</TableCell>
                    <TableCell align="right">₹{basePrice.toLocaleString()}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>GST (18%)</TableCell>
                    <TableCell align="right">₹{gstAmount.toLocaleString()}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell sx={{ fontWeight: 'bold' }}>Total Amount</TableCell>
                    <TableCell align="right" sx={{ fontWeight: 'bold' }}>
                      ₹{totalPrice.toLocaleString()}
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>

            <Box sx={{ mt: 4 }}>
              <Typography variant="body2" color="text.secondary" gutterBottom>
                * Price includes all taxes and fees
              </Typography>
              <Button
                variant="contained"
                fullWidth
                size="large"
                sx={{ mt: 2 }}
              >
                Proceed to Payment
              </Button>
            </Box>
          </Paper>
        </Container>
      </Box>
    </>
  );
}

export default HotelPricing;