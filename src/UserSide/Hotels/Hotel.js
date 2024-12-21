import React from "react";
import { useNavigate } from "react-router-dom";
import { Box, Typography, Container, Paper, Button } from "@mui/material";
import Toolbar from "@mui/material/Toolbar";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import { useTheme } from "@mui/material/styles";
import Autocomplete from "@mui/material/Autocomplete";
import { styled } from "@mui/material/styles";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar from "@mui/material/AppBar";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import TrainOutlinedIcon from "@mui/icons-material/TrainOutlined";
import FlightOutlinedIcon from "@mui/icons-material/FlightOutlined";
import HotelIcon from "@mui/icons-material/Hotel";
import DirectionsBusIcon from "@mui/icons-material/DirectionsBus";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateRangePicker } from "@mui/x-date-pickers-pro/DateRangePicker";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const drawerWidth = 240;
const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  })
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));
const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));
const icons = {
  Hotel: <HotelIcon />,
  Bus: <DirectionsBusIcon />,
  Flight: <FlightOutlinedIcon />,
  Train: <TrainOutlinedIcon />,
};

function Hotel() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [adult, setAdult] = React.useState(0);
  const [children, setChildren] = React.useState(0);
  const [room, setRoom] = React.useState(0);
  const [data, setData] = React.useState();
  const [searchcity, setSearchcity] = React.useState();
  const [date, setDate] = React.useState();
  let navigate = useNavigate();
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handlechange = (e) => {
    console.log({ city: e.target.value });
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  const handleclick = (id) => {
    if (id === 0) {
      navigate("/Hotel");
    } else if (id === 1) {
      navigate("/Bus");
    } else if (id === 2) {
      navigate("/Flight");
    } else if (id === 3) {
      navigate("/Train");
    } else if (id === 4) {
      navigate("/Holiday");
    }
  };
  const decrementadult = () => {
    if (adult > 0) {
      setAdult(adult - 1);
    }
  };
  const decrementchildren = () => {
    if (children > 0) {
      setAdult(children - 1);
    }
  };
  const decrementroom = () => {
    if (room > 0) {
      setRoom(room - 1);
    }
  };
  const incrementroom = () => {
    if (adult > 4) {
      setRoom(room + 1);
    }
  };
  const handleclick2 = () => {
    const data = {
      date1: date,
      city: searchcity,
      adult: adult,
      children: children,
      room: room,
      hotel: hotel,
    };
    setData(data);
    console.log(data);
    navigate("/Hotelinfo");
  };

  const handleDateChange = (newDate) => {
    setDate(newDate);
    console.log("Selected date range:", newDate);
  };

  const city = [
    { label: "Ahmedabad" },
    { label: "Vadodara" },
    { label: "Surat" },
    { label: "Nadiad" },
    { label: "Rajkot" },
    { label: "Dwarka" },
  ];
  const hotel = [
    {
      name: "Lemon Tree Hotel",
      price: "10,000",
      ratings: "4",
      address: "Near Nehru Bridge, Ahmedabad",
      roomtype: "Deluxe",
    },
    {
      name: "Vivanta Ahmedabad",
      price: "8,000",
      ratings: "4.3",
      address: "SG Highway, Ahmedabad",
      roomtype: "Deluxe",
    },
    {
      name: "Courtyard by Marriott",
      price: "12,000",
      ratings: "4.5",
      address: "Sindhu Bhavan Road, Ahmedabad",
      roomtype: "premium",
    },
    {
      name: "Radisson Blu Hotel",
      price: "9,000",
      ratings: "4.0",
      address: "Ellisbridge, Ahmedabad",
      roomtype: "Standard",
    },
  ];

  return (
    <>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar position="fixed" open={open} sx={{ backgroundColor: "Blue" }}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={{ mr: 2, ...(open && { display: "none" }) }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap component="div">
              Wanderlust Journeys
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: drawerWidth,
              boxSizing: "border-box",
            },
          }}
          variant="persistent"
          anchor="left"
          open={open}
        >
          <DrawerHeader>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === "ltr" ? (
                <ChevronLeftIcon />
              ) : (
                <ChevronRightIcon />
              )}
            </IconButton>
          </DrawerHeader>
          <Divider />
          <List>
            {["Hotel", "Bus", "Flight", "Train", "Holiday"].map((text, id) => (
              <ListItem key={text} disablePadding>
                <ListItemButton
                  onClick={() => {
                    handleclick(id);
                  }}
                >
                  <ListItemIcon>{icons[text]}</ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
        </Drawer>
        <Main open={open}>
          <DrawerHeader />
        </Main>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box
          sx={{
            width: "40%",
            padding: "1rem",
            backgroundColor: "rgba(250, 250, 255, 0.8)",
          }}
        >
          <Container
            maxWidth="sm"
            sx={{
              display: "flex",
              justifyContent: "left",
              alignItems: "center",
            }}
          >
            <Paper
              elevation={4}
              sx={{
                padding: 3,
                width: "100%",
                borderRadius: 4,
                backgroundColor: "rgba(250, 250, 255, 0.8)",
                backdropFilter: "blur(30px)",
                boxShadow: "0px 0px 20px 0px rgba(0,0,0,0.2)",
              }}
            >
              <Stack spacing={5} sx={{ width: "auto" }}>
                <Autocomplete
                  id="country-customized-option-demo"
                  options={city}
                  CloseOnSelect
                  value={searchcity}
                  onChange={(newValue) => {
                    setSearchcity(newValue);
                  }}
                  getOptionLabel={(option) => `${option.label} `}
                  renderInput={(params) => (
                    <TextField {...params} label="Choose a City" />
                  )}
                />
              </Stack>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={["DateRangePicker"]}>
                  <Box sx={{ width: "auto", height: "auto" }}>
                    <DateRangePicker
                      value={date}
                      onChange={(newValue) => handleDateChange(newValue)}
                      localeText={{ start: "Check-in", end: "Check-out" }}
                      renderInput={(startProps, endProps) => (
                        <>
                          <TextField {...startProps} />
                          <Box sx={{ mx: 2 }}> to </Box>
                          <TextField {...endProps} />
                        </>
                      )}
                    />
                  </Box>
                </DemoContainer>
              </LocalizationProvider>
              <Accordion
                sx={{
                  marginTop: "20px",
                  width: "auto",
                  backgroundColor: "rgba(250, 250, 255, 0.8)",
                }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2-content"
                  id="panel2-header"
                >
                  <div>
                    Travellers: {adult} Adults, {children} Children, Rooms:{" "}
                    {room}
                  </div>
                </AccordionSummary>
                <AccordionDetails>
                  <div>
                    <div style={{ width: "10px" }}>Adult:</div>
                    <Button
                      variant="text"
                      onClick={() => {
                        setAdult(adult + 1);
                      }}
                    >
                      +
                    </Button>
                    <Button variant="contained">{adult}</Button>
                    <Button
                      variant="text"
                      onClick={() => {
                        decrementadult();
                      }}
                    >
                      -
                    </Button>
                    <div style={{ width: "10px" }}>Children:</div>
                    <Button
                      variant="text"
                      onClick={() => {
                        setChildren(children + 1);
                      }}
                    >
                      +
                    </Button>
                    <Button variant="contained">{children}</Button>
                    <Button
                      variant="text"
                      onClick={() => {
                        decrementchildren();
                      }}
                    >
                      -
                    </Button>
                    <div>
                      <div style={{ width: "10px" }}>Room:</div>
                      <Button
                        sx={{ marginRight: "10px" }}
                        variant="contained"
                        onClick={() => {
                          setRoom(room + 1);
                        }}
                      >
                        Add Room
                      </Button>

                      <Button
                        variant="contained"
                        onClick={() => {
                          decrementroom();
                        }}
                      >
                        Remove
                      </Button>
                    </div>
                  </div>
                </AccordionDetails>
              </Accordion>
              <br />
              <Button variant="contained" onClick={handleclick2}>
                Search Hotels
              </Button>
            </Paper>
          </Container>
        </Box>
      </Box>
    </>
  );
}

export default Hotel;
