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
  MenuItem,
  Chip,
  Switch,
  FormControlLabel,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import PeopleIcon from "@mui/icons-material/People";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import AdminNavbar from "../AdminDashboard/AdminNavbar";

// Mock user data
const mockUsers = [
  {
    id: 1,
    fullName: "John Doe",
    email: "john@example.com",
    role: "user",
    status: "active",
    lastLogin: "2024-02-20 10:30 AM",
    registeredDate: "2024-01-15",
  },
  {
    id: 2,
    fullName: "Jane Smith",
    email: "jane@example.com",
    role: "admin",
    status: "active",
    lastLogin: "2024-02-19 03:45 PM",
    registeredDate: "2024-01-10",
  },
  {
    id: 3,
    fullName: "Mike Johnson",
    email: "mike@example.com",
    role: "user",
    status: "inactive",
    lastLogin: "2024-02-15 11:20 AM",
    registeredDate: "2024-01-05",
  },
];

const userRoles = ["user", "admin", "moderator"];

function UserDashboard() {
  const [users, setUsers] = useState(mockUsers);
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    role: "user",
    status: "active",
  });

  const getStatusColor = (status) => {
    return status === "active" ? "success" : "error";
  };

  const getRoleColor = (role) => {
    switch (role) {
      case "admin":
        return "#FF385C";
      case "moderator":
        return "#00A699";
      default:
        return "#2C3E50";
    }
  };

  const getTotalUsers = () => users.length;

  const getActiveUsers = () =>
    users.filter((user) => user.status === "active").length;

  const getAdminUsers = () =>
    users.filter((user) => user.role === "admin").length;

  const handleEditUser = (user) => {
    setSelectedUser(user);
    setFormData({
      fullName: user.fullName,
      email: user.email,
      role: user.role,
      status: user.status,
    });
    setOpenDialog(true);
  };

  const handleDeleteUser = (userId) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      setUsers(users.filter((user) => user.id !== userId));
    }
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setSelectedUser(null);
    setFormData({
      fullName: "",
      email: "",
      role: "user",
      status: "active",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedUser) {
      setUsers(
        users.map((user) =>
          user.id === selectedUser.id ? { ...user, ...formData } : user
        )
      );
    }
    handleCloseDialog();
  };

  return (
    <AdminNavbar>
      <Box sx={{ flexGrow: 1, py: 3 }}>
        <Container maxWidth="xl">
          <Typography
            variant="h4"
            sx={{ mb: 4, fontWeight: 700, color: "#2C3E50" }}
          >
            User Management
          </Typography>

          <Grid container spacing={3} sx={{ mb: 4 }}>
            <Grid item xs={12} md={4}>
              <Card sx={{ backgroundColor: "#2C3E50", color: "white" }}>
                <CardContent>
                  <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                    <PeopleIcon sx={{ fontSize: 40, mr: 2 }} />
                    <Typography variant="h6">Total Users</Typography>
                  </Box>
                  <Typography variant="h3">{getTotalUsers()}</Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={4}>
              <Card sx={{ backgroundColor: "#00A699", color: "white" }}>
                <CardContent>
                  <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                    <SupervisorAccountIcon sx={{ fontSize: 40, mr: 2 }} />
                    <Typography variant="h6">Active Users</Typography>
                  </Box>
                  <Typography variant="h3">{getActiveUsers()}</Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={4}>
              <Card sx={{ backgroundColor: "#FF385C", color: "white" }}>
                <CardContent>
                  <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                    <AdminPanelSettingsIcon sx={{ fontSize: 40, mr: 2 }} />
                    <Typography variant="h6">Admin Users</Typography>
                  </Box>
                  <Typography variant="h3">{getAdminUsers()}</Typography>
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
                      Name
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="subtitle1" fontWeight="bold">
                      Email
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="subtitle1" fontWeight="bold">
                      Role
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="subtitle1" fontWeight="bold">
                      Status
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="subtitle1" fontWeight="bold">
                      Last Login
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
                {users.map((user) => (
                  <TableRow key={user.id} hover>
                    <TableCell>{user.fullName}</TableCell>
                    <TableCell>{user.email}</TableCell>
                    <TableCell>
                      <Chip
                        label={user.role.toUpperCase()}
                        sx={{
                          backgroundColor: getRoleColor(user.role),
                          color: "white",
                        }}
                      />
                    </TableCell>
                    <TableCell>
                      <Chip
                        label={user.status.toUpperCase()}
                        color={getStatusColor(user.status)}
                      />
                    </TableCell>
                    <TableCell>{user.lastLogin}</TableCell>
                    <TableCell>
                      <IconButton
                        size="small"
                        onClick={() => handleEditUser(user)}
                        sx={{ color: "#2C3E50" }}
                      >
                        <EditIcon />
                      </IconButton>
                      <IconButton
                        size="small"
                        onClick={() => handleDeleteUser(user.id)}
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
            maxWidth="sm"
            fullWidth
          >
            <DialogTitle>{selectedUser ? "Edit User" : "Add User"}</DialogTitle>
            <form onSubmit={handleSubmit}>
              <DialogContent>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Full Name"
                      name="fullName"
                      value={formData.fullName}
                      onChange={(e) =>
                        setFormData({ ...formData, fullName: e.target.value })
                      }
                      required
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      required
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      select
                      fullWidth
                      label="Role"
                      name="role"
                      value={formData.role}
                      onChange={(e) =>
                        setFormData({ ...formData, role: e.target.value })
                      }
                      required
                    >
                      {userRoles.map((role) => (
                        <MenuItem key={role} value={role}>
                          {role.charAt(0).toUpperCase() + role.slice(1)}
                        </MenuItem>
                      ))}
                    </TextField>
                  </Grid>
                  <Grid item xs={12}>
                    <FormControlLabel
                      control={
                        <Switch
                          checked={formData.status === "active"}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              status: e.target.checked ? "active" : "inactive",
                            })
                          }
                          color="success"
                        />
                      }
                      label="Active Status"
                    />
                  </Grid>
                </Grid>
              </DialogContent>
              <DialogActions>
                <Button onClick={handleCloseDialog}>Cancel</Button>
                <Button
                  type="submit"
                  variant="contained"
                  sx={{
                    backgroundColor: "#00A699",
                    "&:hover": { backgroundColor: "#008F86" },
                  }}
                >
                  {selectedUser ? "Save Changes" : "Add User"}
                </Button>
              </DialogActions>
            </form>
          </Dialog>
        </Container>
      </Box>
    </AdminNavbar>
  );
}

export default UserDashboard;
