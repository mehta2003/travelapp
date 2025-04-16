import React from "react";
import {
  Box,
  Container,
  Grid,
  Paper,
  Typography,
  Card,
  CardContent,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  styled,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import HotelIcon from "@mui/icons-material/Hotel";
import DirectionsBusIcon from "@mui/icons-material/DirectionsBus";
import BeachAccessIcon from "@mui/icons-material/BeachAccess";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleIcon from "@mui/icons-material/People";
import PaymentIcon from "@mui/icons-material/Payment";
import BookOnlineIcon from "@mui/icons-material/BookOnline";

const StyledCard = styled(Card)(({ theme }) => ({
  height: "100%",
  display: "flex",
  flexDirection: "column",
  transition: "transform 0.3s ease-in-out",
  "&:hover": {
    transform: "translateY(-5px)",
    boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
  },
}));

const DashboardItem = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  display: "flex",
  flexDirection: "column",
  height: "100%",
  backgroundColor: "#ffffff",
  borderRadius: "10px",
  boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
  transition: "transform 0.3s ease-in-out",
  "&:hover": {
    transform: "translateY(-5px)",
    boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
  },
}));

const services = [
  {
    title: "Flight Management",
    icon: <FlightTakeoffIcon sx={{ fontSize: 40, color: "#0066FF" }} />,
    path: "/admin/flights",
    stats: {
      total: "150+",
      active: "120",
      bookings: "1.2K",
    },
  },
  {
    title: "Hotel Management",
    icon: <HotelIcon sx={{ fontSize: 40, color: "#FF385C" }} />,
    path: "/admin/hotels",
    stats: {
      total: "200+",
      active: "180",
      bookings: "2.5K",
    },
  },
  {
    title: "Bus Management",
    icon: <DirectionsBusIcon sx={{ fontSize: 40, color: "#00A699" }} />,
    path: "/admin/buses",
    stats: {
      total: "100+",
      active: "90",
      bookings: "800",
    },
  },
  {
    title: "Holiday Packages",
    icon: <BeachAccessIcon sx={{ fontSize: 40, color: "#6246EA" }} />,
    path: "/admin/holidays",
    stats: {
      total: "50+",
      active: "45",
      bookings: "500",
    },
  },
];

const quickActions = [
  { title: "View Bookings", icon: <BookOnlineIcon />, path: "/admin/bookings" },
  { title: "Manage Users", icon: <PeopleIcon />, path: "/admin/users" },
  { title: "Payment Overview", icon: <PaymentIcon />, path: "/admin/payments" },
  { title: "Dashboard", icon: <DashboardIcon />, path: "/admin/dashboard" },
];

function MainDashboard() {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        flexGrow: 1,
        py: 3,
        backgroundColor: "#f5f5f5",
        minHeight: "100vh",
      }}
    >
      <Container maxWidth="xl">
        <Typography
          variant="h4"
          sx={{
            mb: 4,
            fontWeight: 700,
            color: "#2C3E50",
            textAlign: "center",
          }}
        >
          Admin Dashboard
        </Typography>

        <Grid container spacing={3}>
          {/* Quick Actions */}
          <Grid item xs={12} md={3}>
            <Paper sx={{ p: 2, height: "100%" }}>
              <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
                Quick Actions
              </Typography>
              <List>
                {quickActions.map((action, index) => (
                  <React.Fragment key={action.title}>
                    <ListItem
                      button
                      onClick={() => navigate(action.path)}
                      sx={{
                        borderRadius: 1,
                        mb: 1,
                        "&:hover": {
                          backgroundColor: "rgba(0, 0, 0, 0.04)",
                        },
                      }}
                    >
                      <ListItemIcon>{action.icon}</ListItemIcon>
                      <ListItemText primary={action.title} />
                    </ListItem>
                    {index < quickActions.length - 1 && <Divider />}
                  </React.Fragment>
                ))}
              </List>
            </Paper>
          </Grid>

          {/* Service Management Cards */}
          <Grid item xs={12} md={9}>
            <Grid container spacing={3}>
              {services.map((service) => (
                <Grid item xs={12} sm={6} key={service.title}>
                  <StyledCard onClick={() => navigate(service.path)}>
                    <CardContent>
                      <Box
                        sx={{ display: "flex", alignItems: "center", mb: 2 }}
                      >
                        <IconButton
                          sx={{
                            backgroundColor: "rgba(0, 0, 0, 0.04)",
                            mr: 2,
                          }}
                        >
                          {service.icon}
                        </IconButton>
                        <Typography variant="h6" component="div">
                          {service.title}
                        </Typography>
                      </Box>
                      <Grid container spacing={2}>
                        <Grid item xs={4}>
                          <Typography variant="body2" color="text.secondary">
                            Total
                          </Typography>
                          <Typography variant="h6">
                            {service.stats.total}
                          </Typography>
                        </Grid>
                        <Grid item xs={4}>
                          <Typography variant="body2" color="text.secondary">
                            Active
                          </Typography>
                          <Typography variant="h6">
                            {service.stats.active}
                          </Typography>
                        </Grid>
                        <Grid item xs={4}>
                          <Typography variant="body2" color="text.secondary">
                            Bookings
                          </Typography>
                          <Typography variant="h6">
                            {service.stats.bookings}
                          </Typography>
                        </Grid>
                      </Grid>
                    </CardContent>
                  </StyledCard>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default MainDashboard;
