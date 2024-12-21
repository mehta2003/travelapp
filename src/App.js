import React from "react";
import Register from "./UserSide/Register";
import Login from "./UserSide/Login";
import Dashboard from "./UserSide/Dashboard";
import Hotel from "./UserSide/Hotels/Hotel";
import Bus from "./UserSide/BusTicketing/Bus";
import Flight from "./UserSide/FlightTicketing/Flight";
import Cabrental from "./UserSide/Cabrental";
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

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/Register" element={<Register />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/Hotel" element={<Hotel />} />
          <Route path="/Bus" element={<Bus />} />
          <Route path="/Flight" element={<Flight />} />
          <Route path="/Cabrental" element={<Cabrental />} />
          <Route path="/Busdetails" element={<Busdetails />} />
          <Route path="FlightDetails" element={<FlightDetails />} />
          <Route path="FlightBooking" element={<FlightBooking />} />
          <Route path="/Holiday" element={<Holiday />} />
          <Route path="/Itinerary" element={<Itinerary />} />
          <Route path="/Itineryinfo" element={<Itineryinfo />} />
          <Route path="/Hotelinfo" element={<Hotelinfo />} />
          <Route path="/Businfo" element={<Businfo />} />
          <Route path="Boarding" element={<Boarding />}></Route>
          <Route path="BoardFinal" element={<BoardFinal />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
