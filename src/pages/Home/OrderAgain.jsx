import { Repeat } from "lucide-react";
import { Link } from "react-router-dom";

export default function OrderAgain() {
  const previousOrders = [
    {
      id: 1,
      name: "Shawarma Chicken Wrap",
      restaurant: "Genesis",
      image: "/orderagain/shawarma.png",
    },
    {
      id: 2,
      name: "Jollof Rice + Chicken",
      restaurant: "Chicken Republic",
      image: "/orderagain/jollof.png",
    },
    {
      id: 3,
      name: "Beef Burger",
      restaurant: "Kilimanjaro",
      image: "/orderagain/burger.png",
    },
    {
      id: 4,
      name: "Beef Burger",
      restaurant: "Kilimanjaro",
      image: "/orderagain/burger.png",
    },
    {
      id: 5,
      name: "Beef Burger",
      restaurant: "Kilimanjaro",
      image: "/orderagain/burger.png",
    },
    {
      id: 6,
      name: "Beef Burger",
      restaurant: "Kilimanjaro",
      image: "/orderagain/burger.png",
    },
    {
      id: 7,
      name: "Beef Burger",
      restaurant: "Kilimanjaro",
      image: "/orderagain/burger.png",
    },
    {
      id: 8,
      name: "Beef Burger",
      restaurant: "Kilimanjaro",
      image: "/orderagain/burger.png",
    },
  ];

  return (
    <div className="w-full mt-6">
      {/* TITLE */}
      <div className="flex items-center justify-between mb-4 px-1">
        <h2 className="text-xl font-extrabold text-gray-900">
          🔄 Order Again
        </h2>

        <span className="text-sm text-primary font-semibold cursor-pointer hover:underline">
          View all
        </span>
      </div>

      {/* SCROLL LIST */}
      <div className="flex gap-4 overflow-x-auto no-scrollbar py-2">
        {previousOrders.map((item) => (
          <Link
            to={`/restaurant/${item.id}`}
            key={item.id}
            className="min-w-[160px] bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden
                       transition-all duration-300 hover:scale-[1.05] hover:shadow-xl cursor-pointer block"
          >
            {/* Image */}
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-28 object-cover"
            />

            {/* Info */}
            <div className="p-3">
              <h3 className="text-[14px] font-bold text-gray-900 leading-tight truncate">
                {item.name}
              </h3>

              <p className="text-[12px] text-gray-600 truncate mt-1 font-medium">
                {item.restaurant}
              </p>

              {/* Reorder Button */}
              <button
                className="mt-3 w-full flex items-center justify-center gap-1 bg-primary text-white 
                           text-xs py-1.5 rounded-full font-semibold hover:opacity-90 transition"
              >
                <Repeat size={13} />
                Reorder
              </button>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
