import React from "react";
import { useNavigate } from "react-router-dom";
import { Box, Typography, Container, Paper, Button, Grid } from "@mui/material";
import Navbar from "../Navbar"; 
import TextField from "@mui/material/TextField";
import { useTheme } from "@mui/material/styles";
import Autocomplete from "@mui/material/Autocomplete";
import { styled } from "@mui/material/styles";
import MuiAppBar from "@mui/material/AppBar";
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
import PersonIcon from '@mui/icons-material/Person';
import ChildCareIcon from '@mui/icons-material/ChildCare';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

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
 
  const handlechange = (e) => {
    console.log({ city: e.target.value });
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
      <Navbar />
      <Box
        sx={{
          minHeight: '100vh',
          background: `linear-gradient(rgba(26, 35, 126, 0.8), rgba(121, 134, 203, 0.8)), url('https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          pt: 10,
          pb: 4
        }}
      >
        <Container maxWidth="md">
          <Box sx={{ textAlign: 'center', mb: 6, color: 'white' }}>
            <Typography variant="h3" sx={{ fontWeight: 700, mb: 2 }}>
              Find Your Perfect Stay
            </Typography>
            <Typography variant="h6" sx={{ opacity: 0.9 }}>
              Discover comfort and luxury in your destination
            </Typography>
          </Box>

          <Paper
            elevation={6}
            sx={{
              p: 4,
              borderRadius: 3,
              backgroundColor: 'rgba(255, 255, 255, 0.95)',
              backdropFilter: 'blur(20px)',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
            }}
          >
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Autocomplete
                  options={city}
                  value={searchcity}
                  onChange={(_, newValue) => setSearchcity(newValue)}
                  getOptionLabel={(option) => option.label}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="Where would you like to stay?"
                      variant="outlined"
                      fullWidth
                      InputProps={{
                        ...params.InputProps,
                        startAdornment: (
                          <HotelIcon sx={{ color: '#1a237e', mr: 1 }} />
                        ),
                      }}
                    />
                  )}
                />
              </Grid>

              <Grid item xs={12}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DateRangePicker
                    value={date}
                    onChange={handleDateChange}
                    sx={{
                      width: '100%',
                      '& .MuiOutlinedInput-root': {
                        '&:hover fieldset': {
                          borderColor: '#1a237e',
                        },
                      },
                    }}
                  />
                </LocalizationProvider>
              </Grid>

              <Grid item xs={12}>
                <Box
                  sx={{
                    p: 3,
                    borderRadius: 2,
                    backgroundColor: '#f8f9fa',
                    border: '1px solid #e9ecef'
                  }}
                >
                  <Grid container spacing={3}>
                    {[
                      { 
                        label: 'Adults',
                        value: adult,
                        set: setAdult,
                        icon: <PersonIcon sx={{ color: '#1a237e' }} />,
                        description: 'Age 13+ years'
                      },
                      { 
                        label: 'Children',
                        value: children,
                        set: setChildren,
                        icon: <ChildCareIcon sx={{ color: '#1a237e' }} />,
                        description: 'Age 2-12 years'
                      },
                      { 
                        label: 'Rooms',
                        value: room,
                        set: setRoom,
                        icon: <HotelIcon sx={{ color: '#1a237e' }} />,
                        description: 'Number of rooms'
                      },
                    ].map((item) => (
                      <Grid item xs={12} md={4} key={item.label}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                          {item.icon}
                          <Box>
                            <Typography variant="subtitle1" sx={{ fontWeight: 500 }}>
                              {item.label}
                            </Typography>
                            <Typography variant="caption" color="text.secondary">
                              {item.description}
                            </Typography>
                          </Box>
                        </Box>
                        <Box sx={{ 
                          display: 'flex',
                          alignItems: 'center',
                          gap: 2,
                          mt: 2
                        }}>
                          <Button
                            onClick={() => item.value > 0 && item.set(item.value - 1)}
                            variant="outlined"
                            size="small"
                            sx={{
                              minWidth: '40px',
                              height: '40px',
                              borderRadius: '50%',
                              border: '2px solid #1a237e',
                              color: '#1a237e',
                              '&:hover': {
                                border: '2px solid #1a237e',
                                backgroundColor: 'rgba(26, 35, 126, 0.04)'
                              },
                              '&.Mui-disabled': {
                                borderColor: '#e0e0e0'
                              }
                            }}
                            disabled={item.value === 0}
                          >
                            <RemoveIcon />
                          </Button>
                          <Typography 
                            sx={{ 
                              minWidth: '40px',
                              textAlign: 'center',
                              fontSize: '1.1rem',
                              fontWeight: 600,
                              color: '#1a237e'
                            }}
                          >
                            {item.value}
                          </Typography>
                          <Button
                            onClick={() => item.set(item.value + 1)}
                            variant="outlined"
                            size="small"
                            sx={{
                              minWidth: '40px',
                              height: '40px',
                              borderRadius: '50%',
                              border: '2px solid #1a237e',
                              color: '#1a237e',
                              '&:hover': {
                                border: '2px solid #1a237e',
                                backgroundColor: 'rgba(26, 35, 126, 0.04)'
                              }
                            }}
                          >
                            <AddIcon />
                          </Button>
                        </Box>
                      </Grid>
                    ))}
                  </Grid>
                </Box>
              </Grid>

              <Grid item xs={12}>
                <Button
                  variant="contained"
                  fullWidth
                  size="large"
                  onClick={handleclick2}
                  sx={{
                    backgroundColor: '#1a237e',
                    py: 1.5,
                    fontSize: '1.1rem',
                    '&:hover': {
                      backgroundColor: '#000051',
                    },
                  }}
                >
                  Search Hotels
                </Button>
              </Grid>
            </Grid>
          </Paper>
        </Container>
      </Box>
    </>
  );
}

export default Hotel;
