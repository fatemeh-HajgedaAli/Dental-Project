import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { AnimatePresence } from "framer-motion";

// Pages
import Home from "./pages/main/Home";
import Services from "./pages/Services";
import ContactUs from "./pages/ContactUs";

// Components
import Preloader from "./pages/Preloader";
import WebsiteAdFloating from "./pages/WebsiteAdFloating";

// Layout
import MainLayout from "./layouts/MainLayout";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {/* Toast */}
      <Toaster position="top-center" reverseOrder={false} />

      {/* Preloader */}
      <AnimatePresence mode="wait">
        {isLoading && <Preloader onComplete={() => setIsLoading(false)} />}
      </AnimatePresence>

      {/* Routes */}
      {!isLoading && (
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact-us" element={<ContactUs />} />
          </Route>
        </Routes>
      )}

      {/* Floating Advertisement */}
      <WebsiteAdFloating />
    </>
  );
}
