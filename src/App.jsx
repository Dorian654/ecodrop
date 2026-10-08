import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import FindCenters from "./components/FindCenters";
import Education from "./components/Education";
import About from "./components/About";
import CenterDetails from "./components/CenterDetails";
import ReportActivity from "./components/ReportActivity";
import Reports from "./components/Reports";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/centers" element={<FindCenters />} />
        <Route path="/centers/:id" element={<CenterDetails />} />
        <Route path="/education" element={<Education />} />
        <Route path="/about" element={<About />} />
        <Route path="/report" element={<ReportActivity />} />
        <Route path="/reports" element={<Reports />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;