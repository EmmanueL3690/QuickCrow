import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  PartyPopper,
  Heart,
  Building2,
  Cake,
  Music,
  ArrowRight,
  Star,
} from "lucide-react";

const eventTypes = [
  {
    id: "1",
    name: "Weddings",
    icon: Heart,
    image:
      "https://images.unsplash.com/photo-1519741497674-611481863552?w=600",
    count: "200+",
  },
  {
    id: "2",
    name: "Corporate",
    icon: Building2,
    image:
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600",
    count: "150+",
  },
  {
    id: "3",
    name: "Birthdays",
    icon: Cake,
    image:
      "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=600",
    count: "300+",
  },
  {
    id: "4",
    name: "Concerts",
    icon: Music,
    image:
      "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=600",
    count: "50+",
  },
];

const eventVendors = [
  {
    id: "1",
    name: "Elegant Events Lagos",
    category: "Full Service Planning",
    image:
      "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=600",
    rating: 4.9,
    reviews: 156,
    price: "From ₦500,000",
  },
  {
    id: "2",
    name: "Bliss Decor Studio",
    category: "Decoration & Styling",
    image:
      "https://images.unsplash.com/photo-1471341971476-ae15ff5dd4ea?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3R1ZGlvfGVufDB8fDB8fHww",
    rating: 4.8,
    reviews: 98,
    price: "From ₦150,000",
  },
  {
    id: "3",
    name: "Capture Moments",
    category: "Photography & Video",
    image:
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=600",
    rating: 5.0,
    reviews: 234,
    price: "From ₦200,000",
  },
];

export default function EventServicesSection() {
  return (
    <section className="py-16">
      {/* HEADER */}
      <div className="flex items-center justify-between mb-10">
        <div>
          <span className="flex items-center gap-2 text-orange-500 text-sm font-semibold mb-1">
            <PartyPopper size={18} />
            Event Planning
          </span>
          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900">
            🎉 Plan Your Perfect Event
          </h2>
          <p className="text-gray-500 mt-1">
            From intimate gatherings to grand celebrations
          </p>
        </div>

        <Link
          to="/events"
          className="hidden sm:flex items-center gap-2 text-orange-500 font-semibold hover:underline"
        >
          View All <ArrowRight size={16} />
        </Link>
      </div>

      {/* EVENT TYPES */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mb-12">
        {eventTypes.map((type, index) => (
          <motion.div
            key={type.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <Link to={`/events?type=${type.name.toLowerCase()}`}>
              <div className="group relative aspect-[4/3] overflow-hidden rounded-2xl shadow-sm hover:shadow-xl transition">
                <img
                  src={type.image}
                  alt={type.name}
                  className="absolute inset-0 h-full w-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                <div className="absolute bottom-4 left-4 text-white">
                  <div className="flex items-center gap-2 mb-1">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/90">
                      <type.icon className="h-4 w-4 text-orange-500" />
                    </div>
                  </div>
                  <h4 className="font-semibold">{type.name}</h4>
                  <p className="text-xs text-white/80">
                    {type.count} events
                  </p>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>

      {/* TOP VENDORS */}
      <h3 className="text-xl font-bold text-gray-900 mb-6">
        Top Event Vendors
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
        {eventVendors.map((vendor, index) => (
          <motion.div
            key={vendor.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <Link to={`/vendor/${vendor.id}`}>
              <div className="rounded-2xl overflow-hidden bg-white border border-gray-100 hover:shadow-lg transition">
                <div className="relative h-40">
                  <img
                    src={vendor.image}
                    alt={vendor.name}
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute top-3 right-3 flex items-center gap-1 bg-white px-2 py-1 rounded-full text-sm font-semibold shadow">
                    <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                    {vendor.rating}
                  </div>
                </div>

                <div className="p-4">
                  <span className="text-xs font-semibold text-orange-500">
                    {vendor.category}
                  </span>
                  <h4 className="font-bold text-gray-900 mt-1">
                    {vendor.name}
                  </h4>

                  <div className="flex items-center justify-between mt-3 text-sm">
                    <span className="text-gray-500">
                      {vendor.reviews} reviews
                    </span>
                    <span className="font-semibold text-gray-900">
                      {vendor.price}
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="rounded-3xl bg-orange-50 px-8 py-10 flex flex-col md:flex-row items-center justify-between gap-6"
      >
        <div>
          <h3 className="text-2xl font-extrabold text-gray-900 mb-2">
            Ready to Plan Your Event?
          </h3>
          <p className="text-gray-600 max-w-xl">
            Get matched with trusted vendors and manage everything in one place.
          </p>
        </div>

        <div className="flex gap-3">
          <Link
            to="/events"
            className="rounded-full bg-orange-500 px-7 py-3 text-white font-semibold hover:bg-orange-600"
          >
            Start Planning
          </Link>
          <Link
            to="/events/consultation"
            className="rounded-full border border-gray-300 px-7 py-3 font-semibold text-gray-800 hover:bg-gray-100"
          >
            Free Consultation
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
