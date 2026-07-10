import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Services from "./pages/Services";
import BlogDetail from "./pages/BlogDetail";
import DentalTips from "./pages/DentalTips";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/services" element={<Services />} />

      {/* Blog Detail Page */}
      <Route path="/blog/:slug" element={<BlogDetail />} />
      <Route path="/#tips" element={<DentalTips />} />

    </Routes>
  );
}
