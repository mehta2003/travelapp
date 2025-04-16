import React, { useState } from "react";
import {
  Container,
  TextField,
  Button,
  Typography,
  Box,
  Paper,
  AppBar,
  Toolbar,
  Alert,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Register() {
  const [data, setData] = useState({
    Name: "",
    Email: "",
    Age: "",
    Phonenumber: "",
    Address: "",
    City: "",
    Password: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  let navigate = useNavigate();

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleClick = async () => {
    setLoading(true);
    setError("");
    setSuccess(""); 
    try {
      const response = await axios.post("http://localhost:3001/Registeruser/createregister", {
        Name: data.Name,
        Email: data.Email,
        Age: data.Age,
        Phonenumber: data.Phonenumber,
        Address: data.Address,
        City: data.City,
        Password: data.Password,
      });

      if (response.data.isSuccess) {
        setSuccess("Registration successful! Redirecting to login...");
        setTimeout(() => navigate("/Login"), 2000);
      } else {
        setError(response.data.message);
      }
    } catch (error) {
      setError(error.response?.data?.message || "Registration failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <AppBar position="static" sx={{ backgroundColor: "blue" }}>
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Wanderlust Journeys
          </Typography>
        </Toolbar>
      </AppBar>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "90vh",
        }}
      >
        <Container maxWidth="sm">
          <Paper elevation={4} sx={{ padding: 3, borderRadius: 4 }}>
            <Box component="form" sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
              <Typography variant="h5">Registration Page</Typography>
              {error && <Alert severity="error">{error}</Alert>}
              {success && <Alert severity="success">{success}</Alert>}

              <TextField label="Name" name="Name" variant="filled" fullWidth onChange={handleChange} sx={{ mb: 2 }} />
              <TextField label="Email" name="Email" type="email" variant="filled" fullWidth onChange={handleChange} sx={{ mb: 2 }} />
              <TextField label="Age" name="Age" type="number" variant="filled" fullWidth onChange={handleChange} sx={{ mb: 2 }} />
              <TextField label="Phone Number" name="Phonenumber" type="text" variant="filled" fullWidth onChange={handleChange} sx={{ mb: 2 }} />
              <TextField label="Address" name="Address" multiline rows={4} variant="filled" fullWidth onChange={handleChange} sx={{ mb: 2 }} />
              <TextField label="City" name="City" variant="filled" fullWidth onChange={handleChange} sx={{ mb: 2 }} />
              <TextField label="Password" name="Password" type="password" variant="filled" fullWidth onChange={handleChange} sx={{ mb: 2 }} />

              <Button variant="contained" color="success" fullWidth onClick={handleClick} disabled={loading}>
                {loading ? "Registering..." : "Register"}
              </Button>
            </Box>
          </Paper>
        </Container>
      </Box>
    </>
  );
}

export default Register;
