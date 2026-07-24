import React from "react";
import { Outlet } from "react-router-dom";

import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";

export default function MainLayout() {
  return (
    <div
      dir="rtl"
      className="
        flex
        min-h-screen
        w-full
        flex-col
        overflow-x-hidden
        bg-slate-50
        text-slate-900
        font-vazir
      "
    >
      {/* Navbar */}
      <header
        className="
          sticky
          top-0
          z-50
          w-full
          border-b
          border-slate-100
          bg-white/90
          shadow-sm
          backdrop-blur-md
        "
      >
        <Navbar />
      </header>

      {/* Main */}
      <main className="w-full flex-1">
        <div
          className="
            mx-auto
            w-full
            max-w-7xl
            px-3
            sm:px-4
            md:px-6
            lg:px-8
            py-4
            sm:py-6
            lg:py-8
          "
        >
          <Outlet />
        </div>
      </main>

      {/* Footer */}
      <footer
        className="
          mt-auto
          w-full
          border-t
          border-slate-100
          bg-white
        "
      >
        <Footer />
      </footer>
    </div>
  );
}
