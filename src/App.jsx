import { Routes, Route } from "react-router-dom";

import Home from "./pages/main/Home";
import Services from "./pages/Services";
import BlogDetail from "./pages/BlogDetail";
import DentalTips from "./pages/DentalTips";
import AppointmentPage from "./pages/AppointmentPage";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/services" element={<Services />} />

      <Route path="/blog/:slug" element={<BlogDetail />} />

      <Route path="/#tips" element={<DentalTips />} />

      <Route path="/appointment" element={<AppointmentPage />} />
    </Routes>
  );
}
