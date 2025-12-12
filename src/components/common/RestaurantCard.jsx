import { Star, Heart, Clock, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

export default function RestaurantCard({ rest }) {
  return (
    <Link
      to={`/restaurant/${rest.id}`}
      className="bg-white rounded-2xl shadow-md hover:shadow-xl transition transform hover:-translate-y-1 overflow-hidden block"
    >
      {/* Image */}
      <div className="relative h-48 w-full overflow-hidden rounded-t-2xl">
        <img
          src={rest.image || rest.img}
          alt={rest.name}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />

        {rest.category && (
          <span className="absolute top-4 right-0 bg-gradient-to-r from-black to-yellow-700 text-white text-xs font-medium px-3 py-1 rounded-l-lg shadow">
            {rest.category}
          </span>
        )}

        {rest.promo && (
          <span className="absolute top-4 left-4 bg-orange-600 text-white text-xs font-medium px-3 py-1 rounded-lg shadow">
            {rest.promo}
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-4">
        {/* Logo + Name + Heart */}
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            {rest.logo && (
              <img
                src={rest.logo}
                className="w-12 h-12 rounded-full object-cover"
                alt="logo"
              />
            )}

            <h3 className="text-lg font-semibold">{rest.name}</h3>
          </div>

          <Heart
            size={22}
            className="text-gray-400 hover:text-red-500 cursor-pointer transition"
          />
        </div>

        {/* Description */}
        {rest.description && (
          <p className="text-gray-600 text-sm mt-2 leading-snug">
            {rest.description}
          </p>
        )}

        {/* Footer */}
        <div className="flex items-center justify-between mt-4 text-sm text-gray-700">
          <div className="flex items-center gap-1">
            <Clock size={16} />
            <span>{rest.time}</span>
          </div>

          <div className="flex items-center gap-1">
            <Star size={16} className="text-yellow-400 fill-yellow-400" />
            <span>{rest.rating}</span>
          </div>

          {rest.distance && (
            <div className="flex items-center gap-1">
              <MapPin size={16} />
              <span>{rest.distance} km</span>
            </div>
          )}
        </div>
      </div>
    </Link>
  );
}
