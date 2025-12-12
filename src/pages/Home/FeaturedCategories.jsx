import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Link } from "react-router-dom";

const categories = [
  {
    id: 1,
    name: "Fast Food",
    image:
      "https://images.unsplash.com/photo-1550547660-d9450f859349?w=400&q=80",
    rating: 4.5,
    description: "Burgers, fries, chicken & tasty quick meals.",
  },
  {
    id: 2,
    name: "Local Dishes",
    image:
      "https://images.unsplash.com/photo-1604908177522-04061814a8c9?w=400&q=80",
    rating: 4.7,
    description: "Traditional Nigerian flavors served hot.",
  },
  {
    id: 3,
    name: "Snacks",
    image:
      "https://images.unsplash.com/photo-1546069901-eacef0df6022?w=400&q=80",
    rating: 4.3,
    description: "Light bites and tasty finger foods.",
  },
  {
    id: 4,
    name: "Drinks",
    image:
      "https://images.unsplash.com/photo-1604908554168-57436c360253?w=400&q=80",
    rating: 4.4,
    description: "Refreshments, smoothies, juices & more.",
  },
];

export default function FoodCategories() {
  return (
    <div className="px-5 py-10 bg-[#E9E9E9] text-center">
      {/* Title */}
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Categories</h1>

      {/* Wrapper */}
      <div className="max-w-[1000px] mx-auto bg-white py-4 rounded-lg">
        <Swiper
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          slidesPerView="auto"
          loop={false}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
          }}
          pagination={{ clickable: true }}
          navigation={true}
          modules={[EffectCoverflow, Pagination, Navigation]}
          className="py-6"
        >
          {categories.map((cat) => (
            <SwiperSlide
              key={cat.id}
              className="flex justify-center !w-auto"
            >
              <div
                className="
                  bg-white rounded-xl p-3
                  shadow-[0_4px_12px_rgba(0,0,0,0.8)]
                  text-center w-[260px]
                  sm:w-[340px]
                  md:w-[500px]
                  lg:w-[700px]
                  xl:w-[850px]
                "
              >
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="
                    mx-auto rounded-lg object-cover
                    h-[180px]
                    sm:h-[200px]
                    md:h-[230px]
                    lg:h-[250px]
                    w-full
                  "
                />

                <h3 className="mt-3 text-xl md:text-2xl font-bold text-gray-800">
                  {cat.name}
                </h3>

                <p className="text-gray-500 mt-1 text-sm md:text-base">
                  {cat.description}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

