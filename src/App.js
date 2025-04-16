import React from "react";
import Register from "./UserSide/Register";
import Login from "./UserSide/Login";
import Dashboard from "./UserSide/Dashboard";
import Hotel from "./UserSide/Hotels/Hotel";
import Bus from "./UserSide/BusTicketing/Bus";
import Flight from "./UserSide/FlightTicketing/Flight";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Hotel2 from "./UserSide/Hotel2";
import FlightDetails from "./UserSide/FlightTicketing/FlightDetails";
import FlightBooking from "./UserSide/FlightTicketing/FlightBooking";
import Holiday from "./UserSide/Holidays/Holiday";
import Busdetails from "./UserSide/BusTicketing/Busdetails";
import Itinerary from "./UserSide/Holidays/Itinerary";
import Itineryinfo from "./UserSide/Holidays/Itineryinfo";
import Hotelinfo from "./UserSide/Hotels/Hotelinfo";
import Businfo from "./UserSide/BusTicketing/Businfo";
import Boarding from "./UserSide/BusTicketing/Boarding";
import BoardFinal from "./UserSide/BusTicketing/BoardFinal";
import HotelDetail from "./UserSide/Hotels/HotelDetail";
import HotelPricing from "./UserSide/Hotels/HotelPricing";

// In your routes configuration

import Services from "./UserSide/Services";
import AddFlight from "./AdminSide/FlightManagement/AddFlight";
import EditFlight from "./AdminSide/FlightManagement/EditFlight";
import AdminFlightPanel from "./AdminSide/FlightManagement/AdminFlightPanel";
import AdminDashboard from "./AdminSide/AdminDashboard/MainDashboard";
import ManageBookings from "./AdminSide/FlightManagement/ManageBookings";
import ManagePayments from "./AdminSide/FlightManagement/ManagePayments";
import HotelDashboard from "./AdminSide/HotelManagement/HotelDashboard";
import HotelForm from "./AdminSide/HotelManagement/HotelForm";
import BusDashboard from "./AdminSide/BusManagement/BusDashboard";
import BusForm from "./AdminSide/BusManagement/BusForm";
import HolidayDashboard from "./AdminSide/HolidayManagement/HolidayDashboard";
import HolidayForm from "./AdminSide/HolidayManagement/HolidayForm";
function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/Register" element={<Register />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/" element={<Dashboard />} />
          <Route path="/Hotel" element={<Hotel />} />
          <Route path="/Bus" element={<Bus />} />
          <Route path="/Flight" element={<Flight />} />

          <Route path="/Busdetails" element={<Busdetails />} />
          <Route path="/FlightDetails" element={<FlightDetails />} />
          <Route path="/FlightBooking" element={<FlightBooking />} />
          <Route path="/Holiday" element={<Holiday />} />
          <Route path="/Itinerary" element={<Itinerary />} />
          <Route path="/Itineryinfo" element={<Itineryinfo />} />
          <Route path="/Hotelinfo" element={<Hotelinfo />} />
          <Route path="/Businfo" element={<Businfo />} />
          <Route path="Boarding" element={<Boarding />}></Route>
          <Route path="BoardFinal" element={<BoardFinal />}></Route>
          <Route path="/HotelDetail" element={<HotelDetail />}></Route>
          <Route path="/HotelPricing" element={<HotelPricing />} />

          {/* Admin Routes */}
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/admin/flights" element={<AdminFlightPanel />} />
          <Route path="/admin/add-flight" element={<AddFlight />} />
          <Route path="/admin/edit-flight/:id" element={<EditFlight />} />
          <Route path="/admin/bookings" element={<ManageBookings />} />
          <Route path="/admin/payments" element={<ManagePayments />} />
          <Route path="/admin/hotels" element={<HotelDashboard />} />
          <Route path="/admin/add-hotel" element={<HotelForm />} />
          <Route path="/admin/edit-hotel/:id" element={<HotelForm />} />
          <Route path="/admin/buses" element={<BusDashboard />} />
          <Route path="/admin/add-bus" element={<BusForm />} />
          <Route path="/admin/edit-bus/:id" element={<BusForm />} />
          <Route path="/admin/holidays" element={<HolidayDashboard />} />
          <Route path="/admin/add-holiday" element={<HolidayForm />} />
          <Route path="/admin/edit-holiday/:id" element={<HolidayForm />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
