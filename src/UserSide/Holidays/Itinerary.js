import React from "react";
import { useNavigate } from "react-router-dom";
import { Box, Card, Typography, Paper, Container, Button } from "@mui/material";
import Toolbar from "@mui/material/Toolbar";
import AppBar from "@mui/material/AppBar";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Hawamahal from "../../assets/Hawamahal.jpg";

function Itinerary() {
  let navigate = useNavigate();
  const itinerarydetails = [
    {
      Duration: "5 Nights 6 Days",
      city: "Jodhpur",
      State: "Rajasthan",
      image: "",
    },
    {
      Duration: "7 Nights 6 Days",
      city: "Jaipur",
      State: "Rajasthan",
      image: Hawamahal,
    },
    {
      Duration: "4 Nights 5 Days",
      city: "Jaisalmer",
      State: "Rajasthan",
      image: "",
    },
  ];
  const handleclick = () => {
    navigate("/Itineryinfo");
  };

  return (
    <>
      <AppBar position="fixed" sx={{ backgroundColor: "Blue" }}>
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            Travel Website
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        sx={{
          width: "40%",
          backgroundColor: "rgba(250, 250, 255, 0.8)",
          marginTop: "44px",
        }}
      >
        <Container
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            // flexDirection: "row",
            // marginRight: "30px",
            marginLeft: "370px",
            gap: 1,
            padding: 2,
          }}
        >
          {itinerarydetails.map((detail) => (
            <Paper
              elevation={1}
              sx={{
                padding: 3,
                width: "auto",
                borderRadius: 3,
                backgroundColor: "rgba(250, 250, 255, 0.8)",
                backdropFilter: "blur(30px)",
                boxShadow: "10px 0px 40px 0px rgba(0,0,0,0.2)",
              }}
            >
              <Card sx={{ maxWidth: "auto" }}>
                <CardMedia
                  sx={{
                    width: 400,
                    height: 300,
                  }}
                  image={detail.image}
                  title={detail.city}
                />
                <CardContent>
                  <Typography gutterBottom variant="h8" component="div">
                    {detail.Duration}
                  </Typography>
                  <Typography variant="body2">
                    {detail.city}, {detail.State}
                  </Typography>
                  <Button
                    variant="contained"
                    color="secondary"
                    onClick={() => {
                      handleclick();
                    }}
                  >
                    Book Tour
                  </Button>
                </CardContent>
              </Card>
            </Paper>
          ))}
        </Container>
      </Box>
    </>
  );
}

export default Itinerary;
