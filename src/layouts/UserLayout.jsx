import { Outlet } from "react-router-dom";
import { Search, User, Home, ShoppingBag, Clock } from "lucide-react";

export default function UserLayout() {
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">

      {/* TOP BAR */}
      <div className="p-4 bg-white shadow-md sticky top-0 z-50">
        <h1 className="text-xl font-bold text-primary">QuickCrow</h1>
      </div>

      {/* SEARCH BAR */}
      <div className="p-4 bg-white">
        <div className="flex items-center gap-2 bg-gray-100 p-3 rounded-xl">
          <Search size={20} className="text-gray-500" />
          <input
            type="text"
            placeholder="Search for food or restaurants..."
            className="bg-transparent outline-none w-full"
          />
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="flex-1 p-4">
        <Outlet />
      </div>

      {/* BOTTOM NAVIGATION */}
      <div className="bg-white shadow-inner border-t flex justify-between p-3 sticky bottom-0 z-50">
        <NavItem icon={<Home size={22} />} label="Home" />
        <NavItem icon={<ShoppingBag size={22} />} label="Orders" />
        <NavItem icon={<Clock size={22} />} label="History" />
        <NavItem icon={<User size={22} />} label="Account" />
      </div>
    </div>
  );
}

function NavItem({ icon, label }) {
  return (
    <button className="flex flex-col items-center text-gray-600 hover:text-primary">
      {icon}
      <span className="text-xs mt-1">{label}</span>
    </button>
  );
}
