import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export default function PromoCarousel() {
  const promos = [
    {
      id: 1,
      title: "🔥 50% OFF Today Only!",
      subtitle: "Top restaurants are giving massive discounts just for you.",
      bg: "bg-gradient-to-r from-[#05B2FF] to-[#0074FF]",
      icon: "💸",
    },
    {
      id: 2,
      title: "🚚 Free Delivery",
      subtitle: "Enjoy zero delivery fees from selected top vendors.",
      bg: "bg-gradient-to-r from-[#FFD84D] to-[#FFB800]",
      icon: "⚡",
    },
    {
      id: 3,
      title: "✨ New Restaurants!",
      subtitle: "Try fresh and trending food spots in your area.",
      bg: "bg-gradient-to-r from-[#FF6392] to-[#FF2E63]",
      icon: "🍽️",
    },
  ];

  return (
    <div className="mt-6 px-4">
      <Swiper
        slidesPerView={1.15}
        spaceBetween={18}
        autoplay={{ delay: 2600, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        modules={[Autoplay, Pagination]}
      >
        {promos.map((promo) => (
          <SwiperSlide key={promo.id}>
            <div
              className={`relative overflow-hidden ${promo.bg} rounded-2xl p-5 text-white shadow-xl min-h-[250px] flex flex-col justify-center transform active:scale-95 transition-all duration-300`}
            >
              {/* Floating Icon */}
              <div className="absolute top-3 right-4 text-4xl opacity-40">
                {promo.icon}
              </div>

              {/* Shine / Glow Layer */}
              <div className="absolute inset-0 bg-white/10 backdrop-blur-[2px] opacity-0 hover:opacity-15 transition-opacity duration-500"></div>

              {/* Text Content */}
              <h2 className="text-xl font-bold drop-shadow-sm leading-snug">
                {promo.title}
              </h2>

              <p className="text-sm opacity-90 mt-2 leading-relaxed">
                {promo.subtitle}
              </p>

              {/* Decorative bottom glow */}
              <div className="absolute bottom-0 left-0 w-full h-[5px] bg-white/30 rounded-b-2xl"></div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
