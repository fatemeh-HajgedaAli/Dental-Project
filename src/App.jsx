import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { AnimatePresence } from "framer-motion";

import Home from "./pages/main/Home";
import Services from "./pages/Services";
import BlogDetail from "./pages/BlogDetail";
import AppointmentPage from "./pages/AppointmentPage";
import AppointmentForm from "./components/appointment/AppointmentForm";
import Preloader from "./pages/Preloader";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />

      {/* نمایش انیمیشن پری‌لودر */}
      <AnimatePresence mode="wait">
        {isLoading && <Preloader onComplete={() => setIsLoading(false)} />}
      </AnimatePresence>

      {/* محتوای روت‌ها فقط پس از اتمام لودینگ یا همزمان در زیر آن لود می‌شوند */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/blog/:slug" element={<BlogDetail />} />
        <Route path="/appointment" element={<AppointmentForm />} />
      </Routes>
    </>
  );
}
