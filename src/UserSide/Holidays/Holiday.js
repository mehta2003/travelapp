import React from "react";
import {
  Typography,
  Box,
  Paper,
  Container,
  Button,
  TextField,
  MenuItem,
  Grid,
} from "@mui/material";
import { styled, useTheme } from "@mui/material/styles";
import Toolbar from "@mui/material/Toolbar";
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
import { useNavigate } from "react-router-dom";
// import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
// import {Dayjs} from "dayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
// import Itinerary from "./Itinerary";

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

function Holiday() {
  let navigate = useNavigate();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [departcity, setDepartcity] = React.useState("");
  const [goingcity, setGoingcity] = React.useState("");
  const [adult, setAdult] = React.useState(0);
  const [children, setChildren] = React.useState(0);
  const [date, setDate] = React.useState([null, null]);
  const [data, setData] = React.useState("");
  const [error, setError] = React.useState("");

  const handleDrawerOpen = () => {
    setOpen(true);
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
  const handledepart = (e) => {
    setDepartcity(e.target.value);
  };
  const handlegoing = (e) => {
    setGoingcity(e.target.value);
  };
  const decrementadult = () => {
    if (adult > 0) {
      setAdult(adult - 1);
    }
  };
  const decrementchildren = () => {
    if (children > 0) {
      setChildren(children - 1);
    }
  };
  const cities = [
    { name: "Ahmedabad" },
    { name: "Vadodara" },
    { name: "Surat" },
    { name: "Delhi" },
    { name: "Mumbai" },
    { name: "Bangalore" },
    { name: "Hyderabad" },
    { name: "Kolkata" },
    { name: "Pune" },
    { name: "Goa" },
  ];
  const handleDateChange = (newDate) => {
    setDate(newDate);
    console.log("Selected date range:", newDate);
  };
  const handleclick2 = () => {
    if (departcity === goingcity) {
      setError(alert("You have not entered valid details"));
      return;
    }
    const newData = {
      departcity: departcity,
      goingcity: goingcity,
      adult: adult,
      children: children,
      date: date,
    };
    setData(newData);
    console.log("Search data:", newData);
    navigate("/Itinerary");
  };

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
              Travel Website
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
      <Box
        sx={{
          width: "40%",
          //   padding: "0.5rem",
          backgroundColor: "rgba(250, 250, 255, 0.8)",
        }}
      >
        <Container
          maxWidth="sm"
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            // minHeight: "50vh",
            // marginTop: 2,
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
              boxShadow: "10px 0px 40px 0px rgba(0,0,0,0.2)",
            }}
          >
            <Grid container spacing={2} sx={{ padding: 2 }}>
              <Grid item xs={6}>
                <TextField
                  select
                  label="Departure City"
                  value={departcity}
                  onChange={handledepart}
                  fullWidth
                  margin="normal"
                >
                  {cities.map((city) => (
                    <MenuItem value={`${city.name}`}>{city.name}</MenuItem>
                  ))}
                </TextField>
              </Grid>
              <Grid item xs={6}>
                <TextField
                  select
                  label="Going to City"
                  value={goingcity}
                  onChange={handlegoing}
                  fullWidth
                  margin="normal"
                >
                  {cities.map((city) => (
                    <MenuItem value={`${city.name}`}>{city.name}</MenuItem>
                  ))}
                </TextField>
              </Grid>
            </Grid>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer
                components={["DatePicker"]}
                sx={{ marginTop: -1, marginLeft: "10px" }}
              >
                <DatePicker onChange={handleDateChange} />
              </DemoContainer>
            </LocalizationProvider>
            <Accordion
              sx={{
                marginTop: "20px",
                width: "auto",
                backgroundColor: "rgba(250, 250, 255, 0.8)",
                marginLeft: "10px",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2-content"
                id="panel2-header"
              >
                <div>
                  Travellers : {adult} Adults, {children} Children,
                </div>
              </AccordionSummary>
              <AccordionDetails>
                <div>
                  <Divider />
                  <br />
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
                </div>
              </AccordionDetails>
            </Accordion>
            <Button
              variant="contained"
              onClick={handleclick2}
              sx={{ marginTop: 3, marginLeft: "10px" }}
            >
              Search Holidays
            </Button>
          </Paper>
        </Container>
      </Box>
    </>
  );
}

export default Holiday;
