import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { AnimatePresence } from "framer-motion";

import Home from "./pages/main/Home";
import Services from "./pages/Services";
import BlogDetail from "./pages/BlogDetail";
import AppointmentForm from "./components/appointment/AppointmentForm";
import Preloader from "./pages/Preloader";
import WebsiteAdFloating from "./pages/WebsiteAdFloating";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />

      {/* Preloader */}
      <AnimatePresence mode="wait">
        {isLoading && <Preloader onComplete={() => setIsLoading(false)} />}
      </AnimatePresence>

      {/* نمایش صفحات بعد از تمام شدن Preloader */}
      {!isLoading && (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/blog/:slug" element={<BlogDetail />} />
          <Route path="/appointment" element={<AppointmentForm />} />
        </Routes>
      )}
      <WebsiteAdFloating />
    </>
  );
}
