import { Clock } from "lucide-react";
import { Link } from "react-router-dom";

export default function FastDeliveryTrending() {
  const vendors = [
    {
      id: 1,
      name: "Chicken Republic",
      time: "15–20 mins",
      image: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?w=900",
    },
    {
      id: 2,
      name: "Genesis Restaurant",
      time: "20–25 mins",
      image: "https://images.unsplash.com/photo-1545668855-b923f0176935?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWVhdCUyMHBpZXxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      id: 3,
      name: "Market Square",
      time: "10–15 mins",
      image: "https://images.unsplash.com/photo-1592415486689-125cbbfcbee2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHNhbmR3aWNofGVufDB8fDB8fHww",
    },
    {
      id: 4,
      name: "Kilimanjaro",
      time: "18–22 mins",
      image: "https://images.unsplash.com/photo-1529006557810-274b9b2fc783?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHNoYXdhcm1hfGVufDB8fDB8fHww",
    },
  ];

  return (
    <section className="mt-10 w-full">
      {/* HEADER */}
      <div className="flex items-center justify-between mb-5">
        <h2 className="text-2xl lg:text-3xl font-extrabold">
          ⚡ Fast Delivery
        </h2>
        <button className="text-sm lg:text-base font-semibold text-primary hover:underline">
          View All
        </button>
      </div>

      {/* GRID CARDS */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
        {vendors.map((vendor) => (
          <Link
            key={vendor.id}
            to={`/restaurant/${vendor.id}`}
            className="bg-white rounded-2xl shadow-lg border overflow-hidden 
                       transition-all duration-300 hover:scale-105 hover:shadow-xl"
          >
            {/* IMAGE */}
            <div className="relative">
              <img
                src={vendor.image}
                alt={vendor.name}
                className="w-full h-32 lg:h-44 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            </div>

            {/* CONTENT */}
            <div className="p-3 lg:p-4">
              <h4 className="text-sm lg:text-lg font-bold truncate">
                {vendor.name}
              </h4>

              <div className="flex items-center gap-1 mt-2 text-xs lg:text-sm text-gray-600">
                <Clock size={15} />
                <span>{vendor.time}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
