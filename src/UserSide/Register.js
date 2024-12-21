import React from "react";
import {
  Container,
  TextField,
  Button,
  Typography,
  Box,
  Paper,
} from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Register() {
  const [data, setData] = React.useState({});
  const [error, setError] = React.useState("");
  const [loading, setLoading] = React.useState(false);

  const handleChange = (e, type) => {
    setData({ ...data, [type]: e.target.value });
  };

  let navigate = useNavigate();

  const handleClick = async () => {
    try {
      setLoading(true);
      setError("");
  
      if (data.SetPassword !== data.ConfirmPassword) {
        setError("Passwords do not match.");
        setLoading(false);
        return;
      }
  
      console.log("Data being sent to API:", data);
  
      const response = await axios.post(
        `http://localhost:3000/Registeruser/createregister`,
        data
      );
  
      if (response.status === 200) {
        navigate("/Login");
      } else {
        setError("Registration failed. Please try again.");
      }
    } catch (error) {
      setLoading(false);
      if (error.response) {
        setError(error.response.data.message || "Registration failed.");
      } else {
        setError("Network error. Please check your connection.");
      }
      console.error("Error:", error.response || error);
    }
  };
  

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" sx={{ backgroundColor: "blue" }}>
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Wanderlust Journeys
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
      <br />
      <br />

      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
        }}
      >
        <Container
          maxWidth="sm"
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            minHeight: "80vh",
            maxWidth: "100vh",
          }}
        >
          <Paper
            elevation={4}
            sx={{
              padding: 3,
              width: "90%",
              borderRadius: 4,
              backgroundColor: "rgba(250, 250, 255, 0.8)",
              backdropFilter: "blur(10px)",
              boxShadow: "0px 0px 20px 0px rgba(0,0,0,0.2)",
            }}
          >
            <Box
              component="form"
              sx={{
                "& .MuiTextField-root": { m: 1, width: "100%" },
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Typography variant="h5" component="h1">
                Registration page
              </Typography>
              <TextField
                label="Name"
                variant="filled"
                onChange={(e) => handleChange(e, "Name")}
              />
              <TextField
                label="Email"
                type="email"
                variant="filled"
                onChange={(e) => handleChange(e, "Email")}
              />
              <TextField
                label="Age"
                inputProps={{ maxLength: 2 }}
                type="number"
                variant="filled"
                onChange={(e) => handleChange(e, "Age")}
              />
              <TextField
                label="Phonenumber"
                type="number"
                variant="filled"
                inputProps={{ maxLength: 10 }}
                onChange={(e) => handleChange(e, "Phonenumber")}
              />
              <TextField
                label="Address"
                multiline
                rows={4}
                variant="filled"
                onChange={(e) => handleChange(e, "Address")}
              />
              <TextField
                label="City"
                variant="filled"
                inputProps={{ maxLength: 15 }}
                onChange={(e) => handleChange(e, "City")}
              />
              <TextField
                label="SetPassword"
                type="password"
                inputProps={{ maxLength: 10 }}
                variant="filled"
                onChange={(e) => handleChange(e, "SetPassword")}
              />
              <TextField
                label="ConfirmPassword"
                type="password"
                inputProps={{ maxLength: 10 }}
                variant="filled"
                onChange={(e) => handleChange(e, "ConfirmPassword")}
              />
              <br />
              <br />
              {error && <Typography color="error">{error}</Typography>}
              <Button
                variant="contained"
                color="success"
                onClick={handleClick}
                disabled={loading}
              >
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
