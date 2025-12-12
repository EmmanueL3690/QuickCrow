import { Star } from "lucide-react";
import { Link } from "react-router-dom";

const recommended = [
  {
    id: 1,
    name: "Spicy Jollof Rice",
    image:
      "https://images.unsplash.com/photo-1604908177070-3501a4f9c39b?w=800&q=80",
    restaurant: "Mama Put Kitchen",
    rating: 4.7,
    price: "₦2,500",
  },
  {
    id: 2,
    name: "BBQ Chicken Wings",
    image:
      "https://images.unsplash.com/photo-1606756790138-0aee2e63d3af?w=800&q=80",
    restaurant: "Grill Master",
    rating: 4.5,
    price: "₦3,200",
  },
  {
    id: 3,
    name: "Shawarma Deluxe",
    image:
      "https://images.unsplash.com/photo-1601924994987-69e26d21f1c9?w=800&q=80",
    restaurant: "Urban Shawarma",
    rating: 4.8,
    price: "₦2,800",
  },
];

export default function Recommended() {
  return (
    <section className="mt-6 px-4">
      {/* Header */}
      <h2 className="text-lg font-semibold mb-3">Recommended for you</h2>

      {/* Horizontal List */}
      <div className="flex gap-4 overflow-x-auto hide-scrollbar pb-2">
        {recommended.map((item) => (
          <Link
            key={item.id}
            to={`/food/${item.id}`}
            className="min-w-[180px] rounded-2xl bg-white shadow-sm hover:shadow-md transition"
          >
            {/* Image */}
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-28 object-cover rounded-t-2xl"
            />

            {/* Info */}
            <div className="p-3">
              <h3 className="text-sm font-semibold leading-tight">{item.name}</h3>
              <p className="text-xs text-gray-500 mt-1">{item.restaurant}</p>

              <div className="mt-2 flex items-center justify-between">
                {/* Rating */}
                <div className="flex items-center gap-1">
                  <Star size={14} className="text-yellow-500 fill-yellow-500" />
                  <span className="text-xs font-medium">{item.rating}</span>
                </div>

                {/* Price */}
                <span className="text-xs font-semibold text-gray-700">
                  {item.price}
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
