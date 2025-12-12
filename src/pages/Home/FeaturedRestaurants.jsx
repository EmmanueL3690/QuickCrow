import RestaurantCard from "../../components/common/RestaurantCard";

// Default fallback featured items (optional)
const defaultFeatured = [
  {
    id: 1,
    name: "The Sass Dose",
    description: "Elegant bites to start your day",
    image: "/src/assets/image40.png",
    logo: "/src/assets/ellipse1-3.png",
    category: "NEW",
    time: "20 min",
    rating: "4.0",
  },
  {
    id: 2,
    name: "Breakfast Bistro",
    description: "Breakfast, slow and soulful.",
    image: "/src/assets/image41.png",
    logo: "/src/assets/ellipse1-4.png",
    category: "NEW",
    time: "35 min",
    rating: "4.0",
  },
  {
    id: 3,
    name: "The Sassy Dose",
    description: "Elegant bites to start your day",
    image: "/src/assets/frame85.png",
    logo: "/src/assets/ellipse1-5.png",
    category: "NEW",
    time: "20 min",
    rating: "4.0",
  },
];

export default function FeaturedRestaurants({ restaurants }) {
  // If no restaurants passed, use the default sample ones
  const list = restaurants && restaurants.length > 0 ? restaurants : defaultFeatured;

  return (
    <div className="px-4 mt-8">
      <h2 className="text-2xl font-bold mb-5 text-gray-900">
        Featured Restaurants
      </h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {list.map((rest) => (
          <RestaurantCard key={rest.id} rest={rest} />
        ))}
      </div>
    </div>
  );
}
