import { useState } from "react";
import { ChevronDown, Star, Clock, Bike, MapPin } from "lucide-react";
import MenuSection from "../../components/restaurant/MenuSection";

export default function RestaurantDetails() {
  const [activeTab, setActiveTab] = useState("menu");

  // Dummy Restaurant Data – later replace with API
  const restaurant = {
    name: "Kilimanjaro Fast Food",
    cover:
      "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?w=1200&q=80",
    logo:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=200&q=80",
    rating: 4.5,
    time: "20-30 min",
    delivery: "₦700",
    distance: "1.5 km",
    categories: [
      {
        title: "Popular",
        items: [
          {
            id: 1,
            name: "Jollof Rice + Chicken",
            price: 2500,
            image:
              "https://images.unsplash.com/photo-1604908177522-04061814a8c9?w=400&q=80",
          },
          {
            id: 2,
            name: "Beef Burger",
            price: 3500,
            image:
              "https://images.unsplash.com/photo-1550547660-d9450f859349?w=400&q=80",
          },
        ],
      },
      {
        title: "Rice Meals",
        items: [
          {
            id: 3,
            name: "Fried Rice + Turkey",
            price: 3200,
            image:
              "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?w=400&q=80",
          },
        ],
      },
    ],
  };

  return (
    <div className="pb-20">

      {/* COVER IMAGE + OVERLAY */}
      <div className="relative w-full h-[380px] rounded-xl overflow-hidden">
        <img
          src={restaurant.cover}
          alt={restaurant.name}
          className="w-full h-full object-cover"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>

        {/* Restaurant Logo */}
        <div className="absolute bottom-4 left-4 flex items-center gap-3">
          <img
            src={restaurant.logo}
            className="w-16 h-16 rounded-full border-2 border-white object-cover shadow-lg"
          />
          <div>
            <h1 className="text-xl font-bold text-white">{restaurant.name}</h1>

            <div className="flex items-center text-white text-sm gap-2 mt-1">
              <span className="flex items-center gap-1">
                <Star size={14} className="text-yellow-400" /> {restaurant.rating}
              </span>
              •
              <span className="flex items-center gap-1">
                <Clock size={14} /> {restaurant.time}
              </span>
              •
              <span className="flex items-center gap-1">
                <Bike size={14} /> {restaurant.delivery}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* LOCATION + DISTANCE */}
      <div className="flex items-center gap-2 text-gray-600 mt-3 px-1">
        <MapPin size={16} />
        <span className="text-sm">{restaurant.distance} away</span>
      </div>

      {/* TABS */}
      <div className="mt-6 border-b border-gray-300 sticky top-[70px] bg-white z-30">
        <div className="flex items-center justify-around text-gray-600 font-medium">
          {["menu", "info", "reviews"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`py-3 w-full text-center capitalize relative
                ${
                  activeTab === tab
                    ? "text-[#00A4F6] font-semibold"
                    : "text-gray-500"
                }
              `}
            >
              {tab}

              {activeTab === tab && (
                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#00A4F6]"></span>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* CONTENT */}
      <div className="mt-6">
        {activeTab === "menu" && (
          <div>
            {restaurant.categories.map((section, index) => (
              <MenuSection key={index} title={section.title} items={section.items} />
            ))}
          </div>
        )}

        {activeTab === "info" && (
          <div className="text-gray-700 px-2">
            <h2 className="font-bold text-lg mb-2">Restaurant Information</h2>
            <p className="text-sm leading-relaxed">
              This restaurant offers delicious meals prepared fresh daily. Delivery
              is fast, affordable and reliable.
            </p>
          </div>
        )}

        {activeTab === "reviews" && (
          <div className="text-gray-700 px-2">
            <h2 className="font-bold text-lg mb-2">Reviews</h2>
            <p className="text-sm">No reviews yet.</p>
          </div>
        )}
      </div>
    </div>
  );
}
