import { useState, useEffect } from "react";
import {
  SlidersHorizontal,
  ChevronDown,
} from "lucide-react";
import RestaurantCard from "../../components/common/RestaurantCard";
import FeaturedRestaurants from "../Home/FeaturedRestaurants";

export default function Restaurant() {
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState("All");
  const [sortType, setSortType] = useState("Top Rated");
  const [filters, setFilters] = useState({
    minRating: 0,
    maxDistance: 10,
    maxPrice: 5000,
  });
  const [showFilter, setShowFilter] = useState(false);

  // Sample Data
  const restaurants = [
    {
      id: 1,
      name: "The Place Restaurant",
      category: "Rice",
      rating: 4.9,
      reviews: 1234,
      time: "30–45 min",
      distance: 3.0,
      price: 600,
      img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800",
    },
    {
      id: 2,
      name: "Mama Put Kitchen",
      category: "Swallow",
      rating: 4.8,
      reviews: 234,
      time: "20–30 min",
      distance: 1.2,
      price: 500,
      promo: "20% OFF",
      img: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800",
    },
    {
      id: 3,
      name: "Buka Hut",
      category: "Fast Food",
      rating: 4.7,
      reviews: 456,
      time: "20–30 min",
      distance: 1.0,
      price: 300,
      img: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800",
    },
  ];

  // Loading Animation
  useEffect(() => {
    const delay = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(delay);
  }, []);

  // Categories
  const categories = [
    "All",
    "Rice",
    "Swallow",
    "Fast Food",
    "Drinks",
    "Breakfast",
    "Chicken",
    "Pizza",
    "Desserts",
  ];

  // Sorting System
  const sortRestaurants = (data) => {
    switch (sortType) {
      case "Top Rated":
        return [...data].sort((a, b) => b.rating - a.rating);
      case "Nearest":
        return [...data].sort((a, b) => a.distance - b.distance);
      case "Low Price":
        return [...data].sort((a, b) => a.price - b.price);
      default:
        return data;
    }
  };

  // Main Filter
  const filteredRestaurants = sortRestaurants(
    restaurants.filter((r) => {
      const matchesSearch = r.name.toLowerCase().includes(search.toLowerCase());
      const matchesCategory =
        activeCategory === "All" || r.category === activeCategory;
      const matchesRating = r.rating >= filters.minRating;
      const matchesDistance = r.distance <= filters.maxDistance;
      const matchesPrice = r.price <= filters.maxPrice;

      return (
        matchesSearch &&
        matchesCategory &&
        matchesRating &&
        matchesDistance &&
        matchesPrice
      );
    })
  );

  // ✅ FEATURED MUST COME AFTER filteredRestaurants
  const featured = filteredRestaurants.slice(0, 3);

  return (
    <div className="w-full min-h-screen bg-white pb-20">

      {/* HEADER */}
      <div className="px-6 pt-6">
        <h1 className="text-3xl font-bold">All Restaurants</h1>
        <p className="text-gray-500 mt-1">
          {restaurants.length} restaurants available
        </p>
      </div>



      {/* CATEGORY FILTERS */}
      <div className="px-6 mt-5 flex flex-wrap gap-3">
        {categories.map((cat, index) => (
          <button
            key={index}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 rounded-full text-sm border transition ${
              activeCategory === cat
                ? "bg-black text-white border-black"
                : "text-gray-700"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* SORT + FILTER */}
      <div className="px-6 mt-5 flex items-center justify-between">
        <button
          onClick={() =>
            setSortType(
              sortType === "Top Rated"
                ? "Nearest"
                : sortType === "Nearest"
                ? "Low Price"
                : "Top Rated"
            )
          }
          className="flex items-center gap-2 text-gray-700 border px-4 py-2 rounded-xl"
        >
          {sortType} <ChevronDown size={16} />
        </button>

        <button
          onClick={() => setShowFilter(true)}
          className="flex items-center gap-2 text-gray-700 border px-4 py-2 rounded-xl"
        >
          <SlidersHorizontal size={16} /> Filters
        </button>
      </div>

      {/* FEATURED */}
      <div className="px-6 mt-10">
        <FeaturedRestaurants restaurants={featured} />
      </div>

      {/* MAIN LIST OR LOADING */}
      {loading ? (
        <div className="px-6 mt-7 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pb-24 animate-pulse">
          {[1, 2, 3].map((_, i) => (
            <div key={i} className="rounded-3xl bg-gray-200 h-64"></div>
          ))}
        </div>
      ) : (
        <div className="px-6 mt-7 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pb-24">
          {filteredRestaurants.map((rest) => (
            <RestaurantCard key={rest.id} rest={rest} />
          ))}
        </div>
      )}

      {/* FILTER MODAL */}
      {showFilter && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white rounded-3xl p-6 w-80">
            <h2 className="text-lg font-bold mb-4">Filters</h2>

            {/* Rating */}
            <label className="block mt-3 text-gray-600">Minimum Rating</label>
            <input
              type="range"
              min="0"
              max="5"
              value={filters.minRating}
              onChange={(e) =>
                setFilters({ ...filters, minRating: Number(e.target.value) })
              }
              className="w-full"
            />
            <p>{filters.minRating} ★</p>

            {/* Distance */}
            <label className="block mt-4 text-gray-600">Max Distance (km)</label>
            <input
              type="range"
              min="1"
              max="10"
              value={filters.maxDistance}
              onChange={(e) =>
                setFilters({ ...filters, maxDistance: Number(e.target.value) })
              }
              className="w-full"
            />
            <p>{filters.maxDistance} km</p>

            {/* Price */}
            <label className="block mt-4 text-gray-600">Max Price (₦)</label>
            <input
              type="range"
              min="100"
              max="5000"
              value={filters.maxPrice}
              onChange={(e) =>
                setFilters({ ...filters, maxPrice: Number(e.target.value) })
              }
              className="w-full"
            />
            <p>₦{filters.maxPrice}</p>

            <button
              onClick={() => setShowFilter(false)}
              className="mt-6 w-full bg-black text-white py-3 rounded-xl"
            >
              Apply Filters
            </button>
          </div>
        </div>
      )}

    </div>
  );
}
