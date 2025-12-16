import { Link } from "react-router-dom";
import { Star, ArrowRight } from "lucide-react";

const chefs = [
  {
    id: 1,
    name: "Chef Akon Okonkwo",
    title: "Master of Nigerian Cuisine",
    image:
      "https://images.unsplash.com/photo-1654922207993-2952fec328ae?w=500&auto=format&fit=crop&q=60",
    rating: 4.9,
    tags: ["Nigerian Cuisine", "Continental"],
    price: "₦75,000",
    events: "420+ events",
  },
  {
    id: 2,
    name: "Chef Amaka Nwosu",
    title: "Pastry Artist & Dessert Queen",
    image:
      "https://images.unsplash.com/photo-1709837167686-a2e33aad1bf0?w=500&auto=format&fit=crop&q=60",
    rating: 5.0,
    tags: ["Pastry & Desserts", "Continental"],
    price: "₦50,000",
    events: "350+ events",
  },
  {
    id: 3,
    name: "Chef Adu Hassan",
    title: "Healthy & Vegan Specialist",
    image:
      "https://plus.unsplash.com/premium_photo-1703435536977-a496234479e0?w=500&auto=format&fit=crop&q=60",
    rating: 4.8,
    tags: ["Vegan", "Meal Prep"],
    price: "₦40,000",
    events: "180+ events",
  },
];

export default function ChefServiceSection() {
  return (
    <section className="py-16">
      {/* HEADER */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <span className="text-sm font-semibold text-orange-500">
            🍳 New Service
          </span>
          <h2 className="text-2xl md:text-3xl font-extrabold mt-1">
            Hire a Private Chef
          </h2>
          <p className="text-gray-500 text-sm">
            Professional chefs at your doorstep
          </p>
        </div>

        <Link
          to="/chefs"
          className="hidden md:flex items-center gap-1 text-orange-500 font-semibold hover:underline"
        >
          View All <ArrowRight size={16} />
        </Link>
      </div>

      {/* ✅ GRID CHEF CARDS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {chefs.map((chef) => (
          <div
            key={chef.id}
            className="bg-white rounded-3xl border border-gray-100 overflow-hidden 
                       hover:shadow-xl transition-all duration-300"
          >
            {/* IMAGE */}
            <div className="relative h-56">
              <img
                src={chef.image}
                alt={chef.name}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-black/20" />

              {/* RATING */}
              <div className="absolute top-4 right-4 flex items-center gap-1 
                              rounded-full bg-white px-2 py-1 text-xs font-semibold shadow">
                <Star size={14} className="text-yellow-500 fill-yellow-500" />
                {chef.rating}
              </div>
            </div>

            {/* CONTENT */}
            <div className="p-5 flex flex-col h-full">
              <h3 className="font-bold text-lg">{chef.name}</h3>
              <p className="text-sm text-gray-500 mb-3">{chef.title}</p>

              {/* TAGS */}
              <div className="flex flex-wrap gap-2 mb-4">
                {chef.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-orange-50 px-3 py-1 
                               text-xs font-medium text-orange-600"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* PRICE + EVENTS */}
              <div className="mt-auto flex items-center justify-between text-sm">
                <span className="font-semibold text-orange-600">
                  From {chef.price}
                </span>
                <span className="text-gray-400">{chef.events}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* CTA STRIP */}
      <div className="mt-12 flex flex-col md:flex-row items-center justify-between gap-4 
                      rounded-2xl bg-orange-50 px-6 py-5">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-500 text-white">
            🍽️
          </div>
          <div>
            <h4 className="font-semibold">
              Want a chef for your next event?
            </h4>
            <p className="text-sm text-gray-600">
              Browse our curated list of professional chefs
            </p>
          </div>
        </div>

        <Link
          to="/chefs"
          className="rounded-full bg-orange-500 px-6 py-3 text-white 
                     font-semibold hover:bg-orange-600 transition"
        >
          Explore Chefs
        </Link>
      </div>
    </section>
  );
}
