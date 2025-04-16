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
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
  const [data, setData] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});
  const [apiError, setApiError] = useState("");
  let navigate = useNavigate();

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const validate = () => {
    let tempErrors = {};
    tempErrors.email =
      /^\S+@\S+\.\S+$/.test(data.email) ? "" : "Invalid email format";
    tempErrors.password =
      data.password.length >= 6 ? "" : "Password must be at least 6 characters long";
    setErrors(tempErrors);
    return Object.values(tempErrors).every((x) => x === "");
  };

  const handleClick = async () => {
    
    if (validate()) {
      try {
        
        const response = await axios.post("http://localhost:3001/loginuser/getlogin", {
          Email: data.email,
          Password: data.password,
        });
        if (response.data.isSuccess) {
          console.log("Login Success", response.data);
          navigate("/Dashboard");
        } else {
          setApiError(response.data.message);
        }
      } catch (error) {
        console.log(error);
        
        console.error("Error logging in:", error);
        setApiError("Invalid Credentials");
      }
    }
  };

  return (
    <>
      <AppBar position="static" sx={{ backgroundColor: "#1E88E5" }}>
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Wanderlust Journeys
          </Typography>
        </Toolbar>
      </AppBar>

      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Container maxWidth="sm">
          <Paper
            elevation={6}
            sx={{
              padding: 4,
              borderRadius: 3,
              backgroundColor: "rgba(255, 255, 255, 0.85)",
              backdropFilter: "blur(8px)",
            }}
          >
            <Box component="form" sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
              <Typography variant="h5" sx={{ mb: 3 }}>
                Welcome Back
              </Typography>

              {apiError && <Typography color="error">{apiError}</Typography>}

              <TextField
                label="Email"
                type="email"
                name="email"
                variant="outlined"
                fullWidth
                error={!!errors.email}
                helperText={errors.email}
                onChange={handleChange}
                sx={{ mb: 2 }}
              />

              <TextField
                label="Password"
                type="password"
                name="password"
                variant="outlined"
                fullWidth
                error={!!errors.password}
                helperText={errors.password}
                onChange={handleChange}
                sx={{ mb: 3 }}
              />

              <Button variant="contained" color="primary" fullWidth onClick={handleClick}>
                Login
              </Button>

              <Typography sx={{ mt: 2 }}>
                Not registered? <Button onClick={() => navigate("/Register")} sx={{ textTransform: "none" }}>Sign up</Button>
              </Typography>
            </Box>
          </Paper>
        </Container>
      </Box>
    </>
  );
}

export default Login;
