import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Events from "./pages/Events";
import Navbar from "./components/Navbar";
import CreateEvent from "./pages/CreateEvent";
import Login from "./pages/Login";
import { useState } from "react";
import About from "./components/About";

function App() {
  const [eventData, setEventData] = useState([]);
          console.log("app", eventData);

  const handleEventCreate = (newEvent) => {
    setEventData((prevEvents) => {
      const updatedEvents = [...prevEvents, newEvent];
      console.log("Updated Events State in App.jsx:", updatedEvents);
      return updatedEvents;
    });
  };

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/create-event"
          element={<CreateEvent onEventCreate={handleEventCreate} />}
        />
        <Route
          path="/upcoming-events"
          element={<Events event={eventData} />}
        />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
