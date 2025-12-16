import { MapPin, Search } from "lucide-react";
import AnimatedHeroImages from "./AnimatedHeroImages";

export default function HeroBanner() {
  return (
    <section className="w-full mt-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        
        {/* LEFT CONTENT */}
        <div>
          <span className="inline-block mb-4 rounded-full bg-orange-100 px-4 py-1 text-sm font-semibold text-green-600">
            ✨ Your All-in-One Lifestyle Platform
          </span>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
            Food, Chefs & <br />
            <span className="text-green-500">Events</span> <br />
            All in One Place
          </h1>

          <p className="mt-4 text-gray-600 max-w-xl">
            Order from top restaurants, hire professional chefs for private dining,
            or plan your dream event — all seamlessly through QuickCrow.
          </p>

          {/* CTA BUTTONS */}
          <div className="mt-6 flex flex-wrap gap-3">
            <button className="rounded-full bg-green-500 px-6 py-3 text-white font-semibold shadow hover:bg-green-600">
              🍔 Order Food
            </button>
            <button className="rounded-full bg-gray-100 px-6 py-3 font-semibold hover:bg-gray-200">
              👨‍🍳 Hire a Chef
            </button>
            <button className="rounded-full bg-gray-100 px-6 py-3 font-semibold hover:bg-gray-200">
              🎉 Plan Event
            </button>
          </div>

          {/* SEARCH BAR */}
          <div className="mt-6 flex flex-wrap items-center gap-3 rounded-full bg-white p-3 shadow-lg max-w-xl">
            <div className="flex items-center gap-2 px-3 text-gray-500">
              <MapPin size={18} />
              <span>Lagos</span>
            </div>

            <input
              type="text"
              placeholder="Search restaurants or dishes..."
              className="flex-1 outline-none px-2 text-sm"
            />

            <button className="rounded-full bg-orange-500 px-6 py-2.5 text-white font-semibold hover:bg-orange-600">
              Search
            </button>
          </div>

          {/* STATS */}
          <div className="mt-8 flex gap-16">
            <div>
              <h4 className="text-3xl font-extrabold">500+</h4>
              <p className="text-sm text-gray-500">Restaurants</p>
            </div>
            <div>
              <h4 className="text-3xl font-extrabold">50+</h4>
              <p className="text-sm text-gray-500">Pro Chefs</p>
            </div>
            <div>
              <h4 className="text-3xl font-extrabold">1000+</h4>
              <p className="text-sm text-gray-500">Events</p>
            </div>
          </div>
        </div>

        {/* RIGHT IMAGE CARDS */}
        <AnimatedHeroImages />

      </div>
    </section>
  );
}
 