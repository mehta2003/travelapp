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
// import Login2 from "./../assets/Login2.jpg";
// import { Repeat } from "@mui/icons-material";

function Login() {
  const [data1, setData1] = React.useState({});

  const handleChange = (e, type) => {
    setData1({ ...data1, [type]: e.target.value });
  };
  let navigate = useNavigate();
  const handleclick = () => {
    console.log(data1);
    navigate("/Dashboard");
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

      <Box
        style={{
          // display: "flex",
          // flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
          // backgroundImage: `url(${Login2})`,
          backgroundRepeat: "no-repeat",
          maxheight: "100%",
          maxWidth: "100%",
          backgroundPosition: "center",
          backgroundSize: "cover",
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
              // boxShadow: "0px 0px 20px 0px rgba(0,0,0,0.2)",
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
              <Typography variant="h5" component="h1" sx={{ padding: 3 }}>
                Welcome
              </Typography>

              <TextField
                label="Email"
                type="email"
                variant="outlined"
                onChange={(e) => handleChange(e, "Email")}
              />

              <TextField
                label="Password"
                type="password"
                inputProps={{ maxLength: 10 }}
                variant="outlined"
                onChange={(e) => handleChange(e, "ConfirmPassword")}
              />
              <br />
              <br />
              <Button
                variant="contained"
                color="primary"
                onClick={() => {
                  handleclick();
                }}
              >
                Login
              </Button>
            </Box>
          </Paper>
        </Container>
      </Box>
    </>
  );
}

export default Login;
