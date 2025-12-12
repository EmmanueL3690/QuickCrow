import Navbar from "../components/common/Navbar";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Fixed Header */}
      <Navbar />

      {/* Page Content */}
      <main className="pt-[10px] px-4">
        <Outlet />
      </main>
    </div>
  );
}
