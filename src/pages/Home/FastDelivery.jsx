import { Clock } from "lucide-react";
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

export default function FastDeliveryTrending() {
  const scrollRef = useRef(null);

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
      image: "/fast/genesis.png",
    },
    {
      id: 3,
      name: "Market Square",
      time: "10–15 mins",
      image: "/fast/market-square.png",
    },
    {
      id: 4,
      name: "Kilimanjaro",
      time: "18–22 mins",
      image: "/fast/kilimanjaro.png",
    },
  ];

  // AUTO SCROLL LIKE TRENDING
  useEffect(() => {
    const container = scrollRef.current;
    let speed = 1;

    const scroll = () => {
      if (!container) return;

      container.scrollLeft += speed;

      // Infinite loop
      if (container.scrollLeft >= container.scrollWidth - container.clientWidth) {
        container.scrollLeft = 0;
      }
    };

    const interval = setInterval(scroll, 20); 
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="mt-10 w-full">
      {/* HEADER */}
      <div className="flex items-center justify-between px-1 mb-5">
        <h2 className="text-2xl lg:text-3xl font-extrabold">⚡ Fast Delivery</h2>
        <button className="text-sm lg:text-base font-semibold text-primary hover:underline">
          View All
        </button>
      </div>

      {/* SCROLLING WRAPPER */}
      <div
        ref={scrollRef}
        className="flex gap-5 overflow-x-auto no-scrollbar py-3 scroll-smooth"
      >
        {/* Duplicate for infinite scrolling */}
        {[...vendors, ...vendors].map((vendor, index) => (
          <Link
            to={`/restaurant/${vendor.id}`}
            key={`${vendor.id}-${index}`}
            className="min-w-[165px] lg:min-w-[240px] bg-white rounded-2xl shadow-lg border overflow-hidden 
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
