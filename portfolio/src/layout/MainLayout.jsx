import { Outlet } from "react-router-dom";
import Navbar from "../components/NavBar";
import Footer from "../components/Footer";

const MainLayout = () => {
  return (
    <div className="bg-black text-white min-h-screen">
      <Navbar />
      <main className="pt-20 px-6">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
