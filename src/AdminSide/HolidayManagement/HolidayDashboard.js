import React, { useState } from "react";
import {
  Box,
  Container,
  Grid,
  Paper,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Button,
  IconButton,
  Card,
  CardContent,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Chip,
  MenuItem,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import BeachAccessIcon from "@mui/icons-material/BeachAccess";
import GroupIcon from "@mui/icons-material/Group";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import AdminNavbar from "../AdminDashboard/AdminNavbar"; 
import { useNavigate } from "react-router-dom";

const mockPackages = [
  {
    id: 1,
    name: "Golden Triangle Tour",
    destinations: ["Delhi", "Agra", "Jaipur"],
    duration: "6 Days",
    price: 25000,
    maxGroupSize: 20,
    bookings: 45,
    status: "Active",
  },
  {
    id: 2,
    name: "Kerala Backwaters",
    destinations: ["Kochi", "Alleppey", "Munnar"],
    duration: "5 Days",
    price: 30000,
    maxGroupSize: 15,
    bookings: 38,
    status: "Active",
  },
  {
    id: 3,
    name: "Ladakh Adventure",
    destinations: ["Leh", "Pangong", "Nubra Valley"],
    duration: "7 Days",
    price: 35000,
    maxGroupSize: 12,
    bookings: 25,
    status: "Upcoming",
  },
];

function HolidayDashboard() {
  const navigate = useNavigate();
  const [packages, setPackages] = useState(mockPackages);
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    destinations: [],
    duration: "",
    price: "",
    maxGroupSize: "",
    bookings: 0,
    status: "Active",
  });

  const handleAddPackage = () => {
    navigate("/admin/add-holiday")
    // setFormData({
    //   name: "",
    //   destinations: [],
    //   duration: "",
    //   price: "",
    //   maxGroupSize: "",
    //   bookings: 0,
    //   status: "Active",
    // });
    // setSelectedPackage(null);
    // setOpenDialog(true);
  };

  const handleEditPackage = (pkg) => {
    navigate(`/admin/edit-holiday/${pkg.id}`)
    // setFormData({
    //   name: pkg.name,
    //   destinations: pkg.destinations,
    //   duration: pkg.duration,
    //   price: pkg.price,
    //   maxGroupSize: pkg.maxGroupSize,
    //   bookings: pkg.bookings,
    //   status: pkg.status,
    // });
    // setSelectedPackage(pkg);
    // setOpenDialog(true);
  };

  const handleDeletePackage = (packageId) => {
    setPackages(packages.filter((pkg) => pkg.id !== packageId));
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setSelectedPackage(null);
  };

  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success",
  });

  const handleCloseSnackbar = () => {
    setSnackbar((prev) => ({ ...prev, open: false }));
  };

  const validatePackage = (data) => {
    if (!data.name) throw new Error("Package name is required");
    if (!data.destinations || data.destinations.length === 0)
      throw new Error("At least one destination is required");
    if (!data.duration) throw new Error("Duration is required");
    if (!data.price || data.price <= 0)
      throw new Error("Valid price is required");
    if (!data.maxGroupSize || data.maxGroupSize <= 0)
      throw new Error("Valid group size is required");
  };

  const handleSavePackage = (event) => {
    event.preventDefault();
    try {
      validatePackage(formData);

      if (selectedPackage) {
        setPackages(
          packages.map((pkg) =>
            pkg.id === selectedPackage.id ? { ...pkg, ...formData } : pkg
          )
        );
        setSnackbar({
          open: true,
          message: "Holiday package updated successfully!",
          severity: "success",
        });
      } else {
        const newPackage = {
          id: packages.length + 1,
          ...formData,
        };
        setPackages([...packages, newPackage]);
        setSnackbar({
          open: true,
          message: "Holiday package added successfully!",
          severity: "success",
        });
      }
      handleCloseDialog();
    } catch (error) {
      setSnackbar({
        open: true,
        message: error.message,
        severity: "error",
      });
    }
  };

  const getTotalBookings = () => {
    return packages.reduce((sum, pkg) => sum + pkg.bookings, 0);
  };

  const getAveragePrice = () => {
    return Math.round(
      packages.reduce((sum, pkg) => sum + pkg.price, 0) / packages.length
    );
  };

  return (
    <AdminNavbar>
      <Box sx={{ flexGrow: 1, py: 3 }}>
        <Container maxWidth="xl">
          <Box
            sx={{
              mb: 4,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography variant="h4" sx={{ fontWeight: 700, color: "#2C3E50" }}>
              Holiday Package Management
            </Typography>
            <Button
              variant="contained"
              startIcon={<AddIcon />}
              onClick={handleAddPackage}
              sx={{
                backgroundColor: "#6246EA",
                "&:hover": { backgroundColor: "#5438D5" },
              }}
            >
              Add New Package
            </Button>
          </Box>

          <Grid container spacing={3} sx={{ mb: 4 }}>
            <Grid item xs={12} md={4}>
              <Card sx={{ backgroundColor: "#6246EA", color: "white" }}>
                <CardContent>
                  <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                    <BeachAccessIcon sx={{ fontSize: 40, mr: 2 }} />
                    <Typography variant="h6">Total Packages</Typography>
                  </Box>
                  <Typography variant="h3">{packages.length}</Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={4}>
              <Card sx={{ backgroundColor: "#2C3E50", color: "white" }}>
                <CardContent>
                  <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                    <GroupIcon sx={{ fontSize: 40, mr: 2 }} />
                    <Typography variant="h6">Total Bookings</Typography>
                  </Box>
                  <Typography variant="h3">{getTotalBookings()}</Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={4}>
              <Card sx={{ backgroundColor: "#00A699", color: "white" }}>
                <CardContent>
                  <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                    <TrendingUpIcon sx={{ fontSize: 40, mr: 2 }} />
                    <Typography variant="h6">Average Price</Typography>
                  </Box>
                  <Typography variant="h3">₹{getAveragePrice()}</Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>

          <TableContainer
            component={Paper}
            sx={{ boxShadow: "0 0 10px rgba(0,0,0,0.1)" }}
          >
            <Table>
              <TableHead>
                <TableRow sx={{ backgroundColor: "#f5f5f5" }}>
                  <TableCell>
                    <Typography variant="subtitle1" fontWeight="bold">
                      Package Name
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="subtitle1" fontWeight="bold">
                      Destinations
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="subtitle1" fontWeight="bold">
                      Duration
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="subtitle1" fontWeight="bold">
                      Price (₹)
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="subtitle1" fontWeight="bold">
                      Group Size
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="subtitle1" fontWeight="bold">
                      Bookings
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="subtitle1" fontWeight="bold">
                      Status
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="subtitle1" fontWeight="bold">
                      Actions
                    </Typography>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {packages.map((pkg) => (
                  <TableRow key={pkg.id} hover>
                    <TableCell>{pkg.name}</TableCell>
                    <TableCell>
                      <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
                        {pkg.destinations.map((dest, index) => (
                          <Chip
                            key={index}
                            label={dest}
                            size="small"
                            sx={{
                              backgroundColor: "#6246EA",
                              color: "white",
                              fontSize: "0.75rem",
                            }}
                          />
                        ))}
                      </Box>
                    </TableCell>
                    <TableCell>{pkg.duration}</TableCell>
                    <TableCell>{pkg.price}</TableCell>
                    <TableCell>{pkg.maxGroupSize}</TableCell>
                    <TableCell>{pkg.bookings}</TableCell>
                    <TableCell>
                      <Chip
                        label={pkg.status}
                        size="small"
                        sx={{
                          backgroundColor:
                            pkg.status === "Active" ? "#00A699" : "#FF385C",
                          color: "white",
                        }}
                      />
                    </TableCell>
                    <TableCell>
                      <IconButton
                        size="small"
                        onClick={() => handleEditPackage(pkg)}
                        sx={{ color: "#2C3E50" }}
                      >
                        <EditIcon />
                      </IconButton>
                      <IconButton
                        size="small"
                        onClick={() => handleDeletePackage(pkg.id)}
                        sx={{ color: "#FF385C" }}
                      >
                        <DeleteIcon />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>

          <Dialog
            open={openDialog}
            onClose={handleCloseDialog}
            maxWidth="md"
            fullWidth
          >
            <DialogTitle>
              {selectedPackage ? "Edit Package" : "Add New Package"}
            </DialogTitle>
            <form onSubmit={handleSavePackage}>
              <DialogContent>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Package Name"
                      defaultValue={selectedPackage?.name}
                      required
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Destinations (comma-separated)"
                      defaultValue={selectedPackage?.destinations.join(", ")}
                      required
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Duration"
                      defaultValue={selectedPackage?.duration}
                      required
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Price"
                      type="number"
                      defaultValue={selectedPackage?.price}
                      required
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Maximum Group Size"
                      type="number"
                      defaultValue={selectedPackage?.maxGroupSize}
                      required
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      select
                      fullWidth
                      label="Status"
                      defaultValue={selectedPackage?.status || "Active"}
                      required
                    >
                      {["Active", "Upcoming", "Completed"].map((status) => (
                        <MenuItem key={status} value={status}>
                          {status}
                        </MenuItem>
                      ))}
                    </TextField>
                  </Grid>
                </Grid>
              </DialogContent>
              <DialogActions>
                <Button onClick={handleCloseDialog}>Cancel</Button>
                <Button
                  type="submit"
                  variant="contained"
                  sx={{
                    backgroundColor: "#6246EA",
                    "&:hover": { backgroundColor: "#5438D5" },
                  }}
                >
                  {selectedPackage ? "Save Changes" : "Add Package"}
                </Button>
              </DialogActions>
            </form>
          </Dialog>
        </Container>
      </Box>
    </AdminNavbar>
  );
}

export default HolidayDashboard;
