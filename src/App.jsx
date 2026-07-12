import { Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import Home from "./pages/main/Home";
import Services from "./pages/Services";
import BlogDetail from "./pages/BlogDetail";
import DentalTips from "./pages/DentalTips";
import AppointmentPage from "./pages/AppointmentPage";

export default function App() {
  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/services" element={<Services />} />

        <Route path="/blog/:slug" element={<BlogDetail />} />
        
        <Route path="/appointment" element={<AppointmentPage />} />
      </Routes>
    </>
  );
}
