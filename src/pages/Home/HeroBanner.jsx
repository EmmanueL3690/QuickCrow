import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { promoSlides } from "../../data/promoSlides";

export default function HeroBanner() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % promoSlides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () =>
    setCurrentSlide((prev) => (prev + 1) % promoSlides.length);

  const prevSlide = () =>
    setCurrentSlide((prev) => (prev - 1 + promoSlides.length) % promoSlides.length);

  return (
    <section className="relative overflow-hidden rounded-2xl lg:rounded-3xl mt-4">
      <div className="relative h-[200px] sm:h-[260px] lg:h-[380px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, x: 120 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -120 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0"
          >
            {/* Background Image */}
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url(${promoSlides[currentSlide].image})`,
              }}
            />

            {/* Color Overlay */}
            <div
              className={`absolute inset-0 bg-gradient-to-r ${promoSlides[currentSlide].color} opacity-80`}
            />

            {/* TEXT SECTION */}
            <div className="relative h-full flex flex-col justify-center px-6 sm:px-10 lg:px-16">
              <motion.h2
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-3xl sm:text-4xl lg:text-6xl font-bold text-white mb-2"
              >
                {promoSlides[currentSlide].title}
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-lg sm:text-xl lg:text-2xl text-white/90"
              >
                {promoSlides[currentSlide].subtitle}
              </motion.p>

              <motion.button
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mt-4 sm:mt-6 w-fit rounded-full bg-white px-6 py-2.5 sm:px-8 sm:py-3 font-semibold text-black shadow-lg hover:shadow-xl transition-all hover:scale-105"
              >
                Order Now
              </motion.button>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* LEFT ARROW */}
        <button
          onClick={prevSlide}
          className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-white/90 shadow-md hover:bg-white transition"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>

        {/* RIGHT ARROW */}
        <button
          onClick={nextSlide}
          className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-white/90 shadow-md hover:bg-white transition"
        >
          <ChevronRight className="h-5 w-5" />
        </button>

        {/* SLIDE DOTS */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {promoSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-2 rounded-full transition-all ${
                index === currentSlide ? "w-6 bg-white" : "w-2 bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
