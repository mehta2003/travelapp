import React from "react";
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
import CompareArrowsOutlinedIcon from "@mui/icons-material/CompareArrowsOutlined";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import busLogo from "../../assets/buslogo.png";
import DeckOutlinedIcon from "@mui/icons-material/DeckOutlined";

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
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));
const icons = {
  Hotel: <HotelIcon />,
  Bus: <DirectionsBusIcon />,
  Flight: <FlightOutlinedIcon />,
  Train: <TrainOutlinedIcon />,
  Holiday: <DeckOutlinedIcon />,
};
function Bus() {
  let navigate = useNavigate();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [departcity, setDepartcity] = React.useState("");
  const [goingcity, setGoingcity] = React.useState("");
  const [selectedDate, setSelectedDate] = React.useState(null);
  const [data, setData] = React.useState();
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
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  const handleclick2 = () => {
    if (departcity === goingcity) {
      setError(alert("you have not entered valid details"));
      return;
    }
    const data = {
      departcity: departcity,
      goingcity: goingcity,
      date: selectedDate,
    };
    setData(data);
    console.log(data);
    navigate("/Businfo");
  };
  const cities = [
    { name: "Ahmedabad", code: "AMD" },
    { name: "Vadodara", code: "BDQ" },
    { name: "Surat", code: "STV" },
    { name: "Delhi", code: "DEL" },
    { name: "Mumbai", code: "BOM" },
    { name: "Bangalore", code: "BLR" },
    { name: "Hyderabad", code: "HYD" },
    { name: "Kolkata", code: "CCU" },
    { name: "Pune", code: "PNQ" },
    { name: "Goa", code: "GOI" },
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
            <img
              src={busLogo}
              alt="Bus Logo"
              style={{ marginLeft: 80, height: "70px" }}
            />
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
          width: "100%",
          padding: "1rem",
          backgroundColor: "rgba(250, 250, 255, 0.8)",
        }}
      >
        <Container
          maxWidth={false}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Paper
            elevation={4}
            sx={{
              padding: 3,
              width: "100%",
              maxWidth: "700px",
              borderRadius: 4,
              backgroundColor: "rgba(250, 250, 255, 0.8)",
              backdropFilter: "blur(30px)",
              boxShadow: "0px 0px 20px 0px rgba(0,0,0,0.2)",
            }}
          >
            <Grid container spacing={2}>
              <Grid item xs={5}>
                <TextField
                  select
                  label="Departure City"
                  value={departcity}
                  onChange={handledepart}
                  fullWidth
                  margin="normal"
                >
                  {cities.map((city) => (
                    <MenuItem key={city.code} value={`${city.name} `}>
                      {city.name}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
              <Grid
                item
                xs={2}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Button
                  variant="contained"
                  onClick={() => {
                    const swap = goingcity;
                    setGoingcity(departcity);
                    setDepartcity(swap);
                  }}
                >
                  <CompareArrowsOutlinedIcon />
                </Button>
              </Grid>
              <Grid item xs={5}>
                <TextField
                  select
                  label="Going to City"
                  value={goingcity}
                  onChange={handlegoing}
                  fullWidth
                  margin="normal"
                >
                  {cities.map((city) => (
                    <MenuItem key={city.code} value={`${city.name}`}>
                      {city.name}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
            </Grid>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                label="Basic date picker"
                value={selectedDate}
                onChange={handleDateChange}
              />
            </LocalizationProvider>
            <br />
            <Button onClick={handleclick2} sx={{ mt: 2 }} variant="contained">
              Search Buses
            </Button>
          </Paper>
        </Container>
      </Box>
    </>
  );
}

export default Bus;
