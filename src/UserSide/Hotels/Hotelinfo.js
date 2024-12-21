import React from "react";
// import { useNavigate } from "react-router-dom";
import { Box, Card, Typography } from "@mui/material";
import Toolbar from "@mui/material/Toolbar";
import AppBar from "@mui/material/AppBar";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";
import hotelimage from "../../assets/hotelimage.jpg";
import Rating from "@mui/material/Rating";

function Hotelinfo() {
  //   let navigate = useNavigate();
  const [value, setValue] = React.useState(4);
  const hotel = [
    {
      name: "Lemon Tree Hotel",
      price: "₹10,000",
      ratings: "4",
      address: "Near Nehru Bridge, Ahmedabad",
      roomtype: "Deluxe",
    },
    {
      name: "Vivanta Ahmedabad",
      price: "₹8,000",
      ratings: "4",
      address: "SG Highway, Ahmedabad",
      roomtype: "Deluxe",
    },
    {
      name: "Courtyard by Marriott",
      price: "₹12,000",
      ratings: "4.5",
      address: "Sindhu Bhavan Road, Ahmedabad",
      roomtype: "Premium",
    },
    {
      name: "Radisson Blu Hotel",
      price: "₹9,000",
      ratings: "4.0",
      address: "Ellisbridge, Ahmedabad",
      roomtype: "Standard",
    },
    {
      name: "India Hotels",
      price: "₹11,000",
      ratings: "4.0",
      address: "Riverfront, Ahmedabad",
      roomtype: "Deluxe",
    },
    {
      name: "Taj Hotel",
      price: "₹15,000",
      ratings: "4.0",
      address: "Sindhubhavan road, Ahmedabad",
      roomtype: "Premium",
    },
  ];
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
          marginTop: "80px",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
          gap: "20px",
        }}
      >
        {hotel.map((hotel, index) => (
          <Card
            key={index}
            sx={{
              width: "300px",
              margin: "10px",
              flex: "1 0 30%",
            }}
          >
            <CardActionArea>
              <CardMedia
                component="img"
                sx={{ height: 250, width: 400, alignItems: "center" }}
                image={hotelimage}
                alt="hotel"
              />
              <CardContent>
                <Typography gutterBottom variant="h4" component="div">
                  {hotel.name}
                </Typography>
                <Typography variant="h6">Price : {hotel.price}</Typography>
                <Typography gutterBottom variant="h6" component="div">
                  {hotel.address}
                </Typography>

                <Typography component="legend">
                  {hotel.ratings} stars
                </Typography>
                <Rating name="read-only" value={value} readOnly />

                <Typography variant="h6">{hotel.roomtype}</Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </Box>
    </>
  );
}

export default Hotelinfo;
