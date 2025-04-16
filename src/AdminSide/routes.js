import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import MainDashboard from "./AdminDashboard/MainDashboard";
import BusDashboard from "./BusManagement/BusDashboard";
import HotelDashboard from "./HotelManagement/HotelDashboard";
import HolidayDashboard from "./HolidayManagement/HolidayDashboard";
import UserDashboard from "./UserManagement/UserDashboard";
import AdminLogin from "./AdminDashboard/AdminLogin";
import AdminRegister from "./AdminDashboard/AdminRegister";

const ProtectedRoute = ({ children }) => {
  const adminToken = localStorage.getItem("adminToken");
  if (!adminToken) {
    return <Navigate to="/admin/login" replace />;
  }
  return children;
};

function AdminRoutes() {
  return (
    <Routes>
      <Route path="/login" element={<AdminLogin />} />
      <Route path="/register" element={<AdminRegister />} />

      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <MainDashboard />
          </ProtectedRoute>
        }
      />
      <Route
        path="/buses"
        element={
          <ProtectedRoute>
            <BusDashboard />
          </ProtectedRoute>
        }
      />
      <Route
        path="/hotels"
        element={
          <ProtectedRoute>
            <HotelDashboard />
          </ProtectedRoute>
        }
      />
      <Route
        path="/holidays"
        element={
          <ProtectedRoute>
            <HolidayDashboard />
          </ProtectedRoute>
        }
      />
      <Route
        path="/users"
        element={
          <ProtectedRoute>
            <UserDashboard />
          </ProtectedRoute>
        }
      />

      <Route
        path="/"
        element={
          localStorage.getItem("adminToken") ? (
            <Navigate to="/admin/dashboard" replace />
          ) : (
            <Navigate to="/admin/login" replace />
          )
        }
      />
    </Routes>
  );
}

export default AdminRoutes;
