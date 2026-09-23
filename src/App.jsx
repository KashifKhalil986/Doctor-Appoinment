import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./pages/website/About";
import Home from "./pages/website/Home";
import Navbar from "./components/Navbar";
import Login from "./pages/website/Login";
import MyAppointment from "./pages/website/MyAppointment";
import MyProfile from "./pages/website/MyProfile";
import Appointment from "./pages/website/Appointment";
import Doctor from "./pages/website/Doctor";
import Footer from "./components/Footer";
import Contact from "./pages/website/Contact";

function App() {
  return (
    <div className="mx-4 sm:mx-[10%]">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/my-appointment" element={<MyAppointment />} />
        <Route path="/my-profile" element={<MyProfile />} />
        <Route path="/appointment/:docId" element={<Appointment />} />
        <Route path="/doctors" element={<Doctor />} />
        <Route path="/doctors/:speciality" element={<Doctor />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
