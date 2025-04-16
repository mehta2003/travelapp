import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  IconButton,
  TextField,
  Button,
  Grid,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Card,
  CardContent,
  Radio,
  RadioGroup,
  FormControlLabel,
  Divider,
} from "@mui/material";
import {
  Container,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import { CheckCircleOutline } from '@mui/icons-material';
import { DatePicker } from "@mui/lab";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Date1 from "../FlightTicketing/Date1";
import { useNavigate } from "react-router-dom";
import { TableCell, TableRow, TableBody, Table } from "@mui/material";
import Toolbar from "@mui/material/Toolbar";
// import IconButton from "@mui/material/IconButton";
import AppBar from "@mui/material/AppBar";
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import FlightLandIcon from '@mui/icons-material/FlightLand';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import AirlineSeatReclineNormalIcon from '@mui/icons-material/AirlineSeatReclineNormal';
import LuggageIcon from '@mui/icons-material/Luggage';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import { Collapse } from '@mui/material';

const FlightDetails = () => {
  // Update state declarations
  const [selectedDate, setSelectedDate] = useState(null);
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState([]);
  const [departcity, setDepartcity] = useState('');
  const [goingcity, setGoingcity] = useState('');
  const [flightDetails, setFlightDetails] = useState([]);
  const [selectedOption, setSelectedOption] = useState("Spice Saver");

  let navigate = useNavigate();

  // Single useEffect
  useEffect(() => {
    const departCity = localStorage.getItem("departcity");
    const goingCity = localStorage.getItem("goingcity");
    
    setDepartcity(departCity ? JSON.parse(departCity) : '');
    setGoingcity(goingCity ? JSON.parse(goingCity) : '');

    // Flight details initialization
    const flightdetails = [
      {
        infoid: "2A3301",
        Airlines: "Indigo",
        Departcity: "Delhi(DEL)",
        Goingcity: "Ahmedabad(AMD)",
        Date: "Fri, 5 July",
        price: "5000",
        duration: "2h 15m",
        stop: "Nonstop",
        DepartTime: "02:15",
        ArrivalTime: "05:15",
        DepartAirport: "Indira Gandhi (T-3)",
        ArrivalAirport: " Sardar Vallabh Bhai Patel, T-2",
        options: [
          {
            type: "Indigo Saver",
            price: "₹3,954",
            details: {
              Flexibility: "INR 3,600 within 3 days",
              preferred: "Chargeable",
              indigoMax: "Chargeable",
              CheckinBaggage: "15 Kgs",
              CabinBaggage: "0 Kgs",
              Meal: "Chargeable",
            },
          },
          {
            type: "Best Value",
            price: "₹4,536",
            details: {
              Flexibility: ["INR 3,350 within 3 days"],
              Preferred: "FREE",
              CheckinBaggage: "15 Kgs",
              CabinBaggage: "7 Kgs",
              Seats: "Chargeable",
              Meal: "Chargeable",
            },
          },
          {
            type: "Indigo Max",
            price: "₹8,009",
            details: {
              Flexibility: ["INR 3,600 within 3 days"],
               Preferred: "FREE",
              CheckinBaggage: "15 Kgs",
              CabinBaggage: "7 Kgs",
              Seats: "Free",
  
              Meal: "Complimentary meal",
            },
          },
        ],
      },
    ];

    setFlightDetails(flightdetails);
  }, []);

  // Remove the second useEffect completely
  const handleDateChange = (date) => {
    setSelectedDate(date);
    setOpen(false);
  };
  const handleclickbook = () => {
    navigate("/FlightBooking");
  };

  useEffect(() => {
    const departCity = localStorage.getItem("departcity");
    const goingCity = localStorage.getItem("goingcity");
    
    if (departCity) {
      setDepartcity(JSON.parse(departCity));
    }
    if (goingCity) {
      setGoingcity(JSON.parse(goingCity));
    }
    const handleFlightSelection = (flight) => {
      localStorage.setItem("selectedFlight", JSON.stringify(flight));
      navigate("/FlightBooking");
    };
    
    
    
    const flightdetails = [
      {
        infoid: "2A3301",
        Airlines: "Indigo",
        Departcity: "Delhi(DEL)",
        Goingcity: "Ahmedabad(AMD)",
        Date: "Fri, 5 July",
        price: "5000",
        duration: "2h 15m",
        stop: "Nonstop",
        DepartTime: "02:15",
        ArrivalTime: "05:15",
        DepartAirport: "Indira Gandhi (T-3)",
        ArrivalAirport: " Sardar Vallabh Bhai Patel, T-2",
        options: [
          {
            type: "Indigo Saver",
            price: "₹3,954",
            details: {
              Flexibility: "INR 3,600 within 3 days",
              preferred: "Chargeable",
              indigoMax: "Chargeable",
              CheckinBaggage: "15 Kgs",
              CabinBaggage: "0 Kgs",
              Meal: "Chargeable",
            },
          },
          {
            type: "Best Value",
            price: "₹4,536",
            details: {
              Flexibility: ["INR 3,350 within 3 days"],
              Preferred: "FREE",
              CheckinBaggage: "15 Kgs",
              CabinBaggage: "7 Kgs",
              Seats: "Chargeable",
              Meal: "Chargeable",
            },
          },
          {
            type: "Indigo Max",
            price: "₹8,009",
            details: {
              Flexibility: ["INR 3,600 within 3 days"],
               Preferred: "FREE",
              CheckinBaggage: "15 Kgs",
              CabinBaggage: "7 Kgs",
              Seats: "Free",
  
              Meal: "Complimentary meal",
            },
          },
        ],
      },
    ];

    setFlightDetails(flightdetails);
  }, []);

  const dates = [
    { date: "Fri, 28 Jun", price: "₹7,547" },
    { date: "Sat, 29 Jun", price: "₹4,539" },
    { date: "Sun, 30 Jun", price: "₹4,539" },
    { date: "Mon, 1 Jul", price: "₹4,588" },
    { date: "Tue, 2 Jul", price: "₹4,539" },
    { date: "Wed, 3 Jul", price: "₹4,588" },
    { date: "Thu, 4 Jul", price: "₹4,539" },
    { date: "Fri, 5 Jul", price: "₹4,463" },
    { date: "Sat, 6 Jul", price: "₹4,539" },
    { date: "Sun, 7 Jul", price: "₹4,588" },
  ];

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded((prevExpanded) =>
      isExpanded
        ? [...prevExpanded, panel]
        : prevExpanded.filter((p) => p !== panel)
    );
  };

  const isPanelExpanded = (panel) => expanded.includes(panel);

  return (
    <>
      <AppBar position="fixed" sx={{ backgroundColor: "#1a237e", boxShadow: 3 }}>
        <Toolbar>
          <Typography variant="h5" sx={{ fontWeight: 600, flexGrow: 1 }}>
            Wanderlust Journeys
          </Typography>
        </Toolbar>
      </AppBar>

      <Box
        sx={{
          minHeight: '100vh',
          background: `linear-gradient(rgba(26, 35, 126, 0.8), rgba(121, 134, 203, 0.8)), url('https://images.pexels.com/photos/379419/pexels-photo-379419.jpeg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          pt: 10,
          pb: 4
        }}
      >
        <Container maxWidth="lg">
          <Box sx={{ mb: 4 }}>
            <Typography variant="h4" sx={{ color: 'white', mb: 1, textAlign: 'center' }}>
              {departcity || 'Loading...'} to {goingcity || 'Loading...'}
            </Typography>
            <Typography variant="subtitle1" sx={{ color: 'white', opacity: 0.9, textAlign: 'center' }}>
              {flightDetails[0]?.Date || 'Select your flight'}
            </Typography>
          </Box>

          {[...Array(5)].map((_, index) => (
            <Card
              key={index}
              sx={{
                mb: 3,
                backgroundColor: 'rgba(255, 255, 255, 0.95)',
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 1)',
                  transform: 'translateY(-2px)',
                },
                transition: 'all 0.3s',
                borderRadius: 2,
                overflow: 'visible'
              }}
            >
              <Box sx={{ p: 3 }}>
               

                <Grid container spacing={2} alignItems="center">
                  <Grid item xs={12} sm={2}>
                    <Box sx={{ textAlign: 'center' }}>
                      <img 
                        src="https://logos-world.net/wp-content/uploads/2023/01/IndiGo-Logo.png" 
                        alt="Airline Logo" 
                        style={{ width: '120px', objectFit: 'contain' }} 
                      />
                      <Typography variant="subtitle2" color="text.secondary">
                        6E-2134
                      </Typography>
                    </Box>
                  </Grid>
                
                  <Grid item xs={12} sm={8}>
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                     <Box sx={{ textAlign: 'center' }}>
                        <Typography variant="h4" color="primary" fontWeight="500">06:30</Typography>
                        <Typography variant="subtitle1">Delhi (DEL)</Typography>
                        <Typography variant="caption" color="text.secondary">Terminal 3</Typography>
                      </Box>
                
                      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', px: 2 }}>
                        <Typography variant="caption" sx={{ 
                          mb: 1,
                          color: 'text.secondary',
                          display: 'flex',
                          alignItems: 'center',
                          bgcolor: 'rgba(26, 35, 126, 0.08)',
                          px: 1.5,
                          py: 0.5,
                          borderRadius: 8
                        }}>
                          <AccessTimeIcon sx={{ fontSize: 16, mr: 0.5 }} />
                          2h 30m
                        </Typography>
                        <Box sx={{ 
                          display: 'flex', 
                          alignItems: 'center', 
                          width: '200px', 
                          position: 'relative',
                          '&::after': {
                            content: '""',
                            position: 'absolute',
                            left: '12px',
                            right: '12px',
                            height: '2px',
                            background: 'repeating-linear-gradient(90deg, #1a237e 0px, #1a237e 6px, transparent 6px, transparent 12px)',
                            animation: 'moveRight 3s linear forwards',
                          },
                          '@keyframes moveRight': {
                            '0%': {
                              backgroundPosition: '0 0',
                            },
                            '100%': {
                              backgroundPosition: '12px 0',
                            },
                          }
                        }}>
                          <Box 
                            sx={{ 
                              position: 'absolute',
                              left: '0%',
                              top: '50%',
                              transform: 'translate(-50%, -50%)',
                              bgcolor: '#1a237e',
                              borderRadius: '50%',
                              p: 0.6,
                              zIndex: 2,
                              animation: 'movePlane 6s linear forwards',
                              '@keyframes movePlane': {
                                '0%': {
                                  left: '0%',
                                },
                                '100%': {
                                  left: '100%',
                                }
                              }
                            }}
                          >
                            <FlightTakeoffIcon sx={{ 
                              color: 'white', 
                              fontSize: '14px',
                              transform: 'rotate(-15deg)'
                            }} />
                          </Box>
                          <Box sx={{ 
                            width: '8px', 
                            height: '8px', 
                            bgcolor: '#1a237e', 
                            borderRadius: '50%',
                            marginLeft: 'auto',
                            zIndex: 1
                          }} />
                        </Box>
                        <Typography variant="caption" sx={{ 
                          mt: 1, 
                          color: '#2e7d32',
                          bgcolor: 'rgba(46, 125, 50, 0.1)',
                          px: 1.5,
                          py: 0.5,
                          borderRadius: 1,
                          display: 'flex',
                          alignItems: 'center',
                          gap: 0.5,
                          fontWeight: 500
                        }}>
                          <span style={{ fontSize: '8px', color: '#2e7d32' }}>●</span> Non-stop
                        </Typography>
                      </Box>
                
                      <Box sx={{ textAlign: 'center' }}>
                        <Typography variant="h4" color="primary" fontWeight="500">09:00</Typography>
                        <Typography variant="subtitle1">Mumbai (BOM)</Typography>
                        <Typography variant="caption" color="text.secondary">Terminal 2</Typography>
                      </Box>
                    </Box>
                  </Grid>
                
                  <Grid item xs={12} sm={2}>
                    <Box sx={{ textAlign: 'center' }}>
                      <Typography 
                        variant="h5" 
                        color="primary" 
                        fontWeight="500"
                        sx={{ 
                          fontSize: '1.6rem',
                          mb: 0.5
                        }}
                      >
                        ₹5,299
                      </Typography>
                      <Typography 
                        variant="caption" 
                        sx={{ 
                          display: 'block',
                          color: 'success.main',
                          mb: 1,
                          fontSize: '0.75rem'
                        }}
                      >
                        Best Price
                      </Typography>
                      <Button
                        fullWidth
                        variant="outlined"
                        onClick={() => setExpanded(expanded === index ? null : index)}
                        sx={{
                          borderColor: '#1a237e',
                          color: '#1a237e',
                          '&:hover': {
                            backgroundColor: '#1a237e',
                            color: 'white'
                          },
                          textTransform: 'none',
                          borderRadius: 2
                        }}
                      >
                        View Fares
                      </Button>
                    </Box>
                  </Grid>
                </Grid>

                <Collapse in={expanded === index}>
                  <Divider sx={{ my: 3 }} />
                  <Grid container spacing={3}>
                    {['Saver', 'Flexi', 'Business'].map((type, idx) => (
                      <Grid item xs={12} md={4} key={idx}>
                        <Card
                          sx={{
                            height: '100%',
                            border: '2px solid',
                            borderColor: idx === 1 ? 'primary.main' : 'grey.200',
                            position: 'relative',
                            '&:hover': { borderColor: 'primary.main' }
                          }}
                        >
                          {idx === 1 && (
                            <Box
                              sx={{
                                position: 'absolute',
                                top: -12,
                                left: '50%',
                                transform: 'translateX(-50%)',
                                bgcolor: 'primary.main',
                                color: 'white',
                                px: 2,
                                py: 0.5,
                                borderRadius: 1,
                              }}
                            >
                              Best Value
                            </Box>
                          )}
                          <CardContent>
                            <Typography variant="h6" gutterBottom color="primary">
                              {type}
                            </Typography>
                            <Typography variant="h4" color="primary" gutterBottom>
                              ₹{(5299 + idx * 2000).toLocaleString()}
                            </Typography>
                            <List dense>
                              <ListItem>
                                <ListItemIcon><LuggageIcon color="primary" /></ListItemIcon>
                                <ListItemText primary="Cabin Bag: 7 Kg" />
                              </ListItem>
                              <ListItem>
                                <ListItemIcon><AirlineSeatReclineNormalIcon color="primary" /></ListItemIcon>
                                <ListItemText primary={idx === 2 ? "Free Seat Selection" : "Paid Seat Selection"} />
                              </ListItem>
                              <ListItem>
                                <ListItemIcon><FastfoodIcon color="primary" /></ListItemIcon>
                                <ListItemText primary={idx === 2 ? "Complimentary Meals" : "Meals Available"} />
                              </ListItem>
                            </List>
                          </CardContent>
                          <Box sx={{ p: 2 }}>
                            <Button
                              variant="contained"
                              fullWidth
                              onClick={handleclickbook}
                              sx={{
                                bgcolor: idx === 1 ? 'primary.main' : 'grey.200',
                                color: idx === 1 ? 'white' : 'primary.main',
                                '&:hover': {
                                  bgcolor: 'primary.main',
                                  color: 'white'
                                }
                              }}
                            >
                              Book Now
                            </Button>
                          </Box>
                        </Card>
                      </Grid>
                    ))}
                  </Grid>
                </Collapse>
              </Box>
            </Card>
          ))}
        </Container>
      </Box>
    </>
  );
};

export default FlightDetails;
