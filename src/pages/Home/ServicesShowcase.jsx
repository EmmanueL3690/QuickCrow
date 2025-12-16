import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  UtensilsCrossed,
  ChefHat,
  PartyPopper,
  ArrowRight,
  Sparkles,
} from "lucide-react";

const services = [
  {
    id: "food",
    title: "Food Delivery",
    description:
      "Order from hundreds of restaurants and get your favorite meals delivered hot and fresh.",
    icon: UtensilsCrossed,
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600",
    gradient: "from-orange-500 to-red-500",
    features: ["500+ Restaurants", "30-min Delivery", "Live Tracking"],
    link: "/restaurants",
    cta: "Order Now",
  },
  {
    id: "chef",
    title: "Private Chef",
    description:
      "Book professional chefs to cook at your home for intimate dinners or special occasions.",
    icon: ChefHat,
    image: "https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?w=600",
    gradient: "from-emerald-500 to-teal-500",
    features: ["50+ Pro Chefs", "All Cuisines", "Meal Prep"],
    link: "/chefs",
    cta: "Hire Chef",
  },
  {
    id: "event",
    title: "Event Planning",
    description:
      "From weddings to corporate events — full-service planning to make your vision reality.",
    icon: PartyPopper,
    image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=600",
    gradient: "from-yellow-500 to-orange-500",
    features: ["Weddings", "Corporate", "Parties"],
    link: "/events",
    cta: "Plan Event",
  },
];

export default function ServicesShowcase() {
  return (
    <section className="py-14">
      {/* HEADER */}
      <div className="text-center mb-12">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 rounded-full bg-gray-100 px-4 py-2 text-sm font-semibold text-gray-800 mb-4"
        >
          <Sparkles className="h-4 w-4" />
          Our Services
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4"
        >
          Everything You Need, One Platform
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-gray-600 max-w-2xl mx-auto"
        >
          Whether you're craving a quick meal, planning a dinner party, or
          organizing a grand event — we've got you covered.
        </motion.p>
      </div>

      {/* NORMAL GRID (ALL SCREENS) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <Link to={service.link}>
              <motion.div
                whileHover={{
                  rotateX: 6,
                  rotateY: -6,
                  scale: 1.03,
                }}
                transition={{ type: "spring", stiffness: 200, damping: 15 }}
                className="group relative h-full rounded-3xl bg-white border border-gray-200 overflow-hidden shadow-sm hover:shadow-2xl"
              >
                {/* GLOW */}
                <div
                  className={`absolute -inset-1 opacity-0 group-hover:opacity-30 blur-2xl transition duration-500 bg-gradient-to-r ${service.gradient}`}
                />

                {/* IMAGE */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div
                    className={`absolute inset-0 bg-gradient-to-t ${service.gradient} opacity-50`}
                  />
                  <div className="absolute top-4 left-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-white shadow-lg">
                    <service.icon className="h-6 w-6 text-gray-900" />
                  </div>
                </div>

                {/* CONTENT */}
                <div className="relative p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {service.title}
                  </h3>

                  <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                    {service.description}
                  </p>

                  {/* FEATURES */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {service.features.map((feature) => (
                      <span
                        key={feature}
                        className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  {/* CTA */}
                  <div className="flex items-center gap-2 font-semibold text-gray-900">
                    {service.cta}
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </motion.div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
