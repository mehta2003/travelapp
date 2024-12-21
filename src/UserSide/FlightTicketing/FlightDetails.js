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

const FlightDetails = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState([]);
  const [departcity, setDepartcity] = useState([]);
  const [goingcity, setGoingcity] = useState([]);
  const [flightDetails, setFlightDetails] = useState([]);
  const [selectedOption, setSelectedOption] = useState("Spice Saver");

  let navigate = useNavigate();

  const handleDateChange = (date) => {
    setSelectedDate(date);
    setOpen(false);
  };
  const handleclickbook = () => {
    navigate("/FlightBooking");
  };

  useEffect(() => {
    const departcity = JSON.parse(localStorage.getItem("departcity"));
    const goingcity = JSON.parse(localStorage.getItem("goingcity"));
    if (departcity) {
      setDepartcity(departcity);
    }
    if (goingcity) {
      setGoingcity(goingcity);
    }

    const flightdetails = [
      {
        id: "2A3301",
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
              CabinBaggage: "7 Kgs",
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
      <AppBar position="fixed" sx={{ backgroundColor: "Blue" }}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            sx={{ mr: 2 }}
          >
            {/* <MenuIcon /> */}
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Wanderlust Journeys
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        display="flex"
        alignItems="center"
        style={{ background: "rgba(255,255,255,0.7)" }}
      >
        <IconButton>
          <ArrowBackIosIcon />
        </IconButton>
        <Box display="flex" overflow="auto" whiteSpace="nowrap" flex="1">
          {dates.map((item, index) => (
            <Box key={index} textAlign="center" padding="10px">
              <Typography variant="subtitle2">{item.date}</Typography>
              <Typography variant="h6">{item.price}</Typography>
            </Box>
          ))}
        </Box>
        <IconButton>
          <ArrowForwardIosIcon />
        </IconButton>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <IconButton
            onClick={() => {
              setOpen(true);
            }}
          >
            <CalendarTodayIcon />
            <DatePicker
              label="Basic date picker"
              value={selectedDate}
              onChange={handleDateChange}
              renderInput={(params) => <TextField {...params} />}
            />
          </IconButton>
          {open && <Date1 />}
        </LocalizationProvider>
      </Box>

      {flightDetails.map((flight, index) => (
        <Accordion
          sx={{ marginTop: 2 }}
          key={index}
          expanded={isPanelExpanded(`panel${index}`)}
          onChange={handleChange(`panel${index}`)}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`panel${index}-content`}
            id={`panel${index}-header`}
          >
            <Typography style={{ flex: 1 }}>
              <Grid container spacing={3} sx={{ padding: 2 }}>
                <Grid item xs={2} sx={{ padding: 2 }}>
                  <Typography variant="body1">{flight.Airlines}</Typography>
                  <Typography variant="body2">{flight.id}</Typography>
                </Grid>
                <Grid item xs={4}>
                  <Typography variant="h6">{flight.Departcity}</Typography>
                  <Typography variant="body2">{flight.DepartTime}</Typography>
                  <Typography variant="body2">{flight.Date}</Typography>
                  <Typography variant="body2">
                    {flight.DepartAirport}
                  </Typography>
                </Grid>
                <Grid item xs={2}>
                  <Typography variant="body2">{flight.duration}</Typography>
                  <Divider sx={{ marginY: 3 }} />
                  <Typography variant="body2">{flight.stop}</Typography>
                </Grid>
                <Grid item xs={3}>
                  <Typography variant="h6">{flight.Goingcity}</Typography>
                  <Typography variant="body2">{flight.ArrivalTime}</Typography>
                  <Typography variant="body2">{flight.Date}</Typography>
                  <Typography variant="body2">
                    {flight.ArrivalAirport}
                  </Typography>
                </Grid>
                <Grid item xs={1}>
                  <Button variant="contained" color="primary">
                    Book
                  </Button>
                </Grid>
              </Grid>
            </Typography>
            <Typography style={{ marginLeft: "auto" }}>
              {isPanelExpanded(`panel${index}`)
                ? "Hide details"
                : "View details"}
            </Typography>
          </AccordionSummary>
          <AccordionDetails sx={{ size: "auto" }}>
            <RadioGroup
              aria-labelledby="demo-customized-radios"
              value={selectedOption}
              onChange={(e) => setSelectedOption(e.target.value)}
            >
              <Grid container spacing={3}>
                {flight.options.map((option, optionIndex) => (
                  <Grid item xs={12} sm={4} key={optionIndex}>
                    <Card variant="outlined">
                      <CardContent
                        style={{ fontSize: "2rem", padding: 7, margin: 10 }}
                      >
                        <FormControlLabel
                          value={option.type}
                          control={<Radio />}
                          label={
                            <Typography
                              variant="h6"
                              style={{
                                fontWeight: "bold",
                                fontFamily: "Arial, sans-serif",
                              }}
                            >
                              {option.type}
                            </Typography>
                          }
                        />
                        <Table style={{ borderCollapse: "collapse" }}>
                          <TableBody>
                            {Object.entries(option.details).map(
                              ([key, value]) => (
                                <TableRow>
                                  <TableCell
                                    style={{
                                      borderBottom: "none",
                                      padding: 5,
                                    }}
                                  >
                                    <Typography
                                      variant="body1"
                                      style={{
                                        fontWeight: "bolder",
                                        fontFamily: " sans-serif",
                                      }}
                                    >
                                      {`${key}:`}
                                    </Typography>
                                  </TableCell>
                                  <TableCell
                                    style={{
                                      borderBottom: "none",
                                      padding: 5,
                                    }}
                                  >
                                    <Typography
                                      variant="body1"
                                      style={{ fontFamily: "sans-serif" }}
                                    >
                                      {value}
                                    </Typography>
                                  </TableCell>
                                </TableRow>
                              )
                            )}
                          </TableBody>
                        </Table>
                        <Button
                          variant="contained"
                          color="primary"
                          style={{ marginTop: "10px", padding: 10 }}
                          onClick={() => {
                            handleclickbook();
                          }}
                        >
                          Book Now
                        </Button>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </RadioGroup>
          </AccordionDetails>
        </Accordion>
      ))}
    </>
  );
};

export default FlightDetails;
