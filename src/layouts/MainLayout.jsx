import { Outlet } from "react-router-dom";

import Navbar from "../pages/NavBar";
import Footer from "../pages/Footer";

export default function MainLayout({onOpenModal} ) {
  return (
    <div dir="rtl" className="min-h-screen w-full bg-slate-50 font-vazir">
      <main className="w-full">
        <Outlet />
      </main>

      <footer className="w-full bg-slate-950">
           <Footer onOpenModal={onOpenModal} />
      </footer>
    </div>
  );
}
