import { motion, AnimatePresence, useMotionValue, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

const bigImages = [
  {
    image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=1200",
    tag: "Food Delivery",
    title: "Order from 500+ Restaurants",
    desc: "Fast delivery, amazing deals",
  },
  {
    image: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?w=1200",
    tag: "Trending",
    title: "Hot & Fresh Meals",
    desc: "Delivered in minutes",
  },
];

const smallImages = [
  {
    image: "https://media.istockphoto.com/id/664222314/photo/cooking-together.webp?a=1&b=1&s=612x612&w=0&k=20&c=VQnzLQ4au3jl-KpJ4BitKzWbQVH1KxICXitZLYeDtiI=",
    title: "Hire a Chef",
    desc: "Personal dining",
  },
  {
    image: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?w=900",
    title: "Plan Events",
    desc: "Weddings & parties",
  },
];

export default function AnimatedHeroImages() {
  const [bigIndex, setBigIndex] = useState(0);
  const [smallIndex, setSmallIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const isMobile = window.innerWidth < 768;

  /* TIMERS */
  useEffect(() => {
    if (paused) return;

    const bigTimer = setInterval(() => {
      setBigIndex((i) => (i + 1) % bigImages.length);
    }, 5000);

    const smallTimer = setInterval(() => {
      setSmallIndex((i) => (i + 1) % smallImages.length);
    }, 6500);

    return () => {
      clearInterval(bigTimer);
      clearInterval(smallTimer);
    };
  }, [paused]);

  /* PARALLAX */
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const translateX = useTransform(x, [-50, 80], [-12, 12]);
  const translateY = useTransform(y, [-50, 50], [-10, 10]);

  const handleMouseMove = (e) => {
    if (isMobile) return;
    const rect = e.currentTarget.getBoundingClientRect();
    x.set(e.clientX - rect.left - rect.width / 2);
    y.set(e.clientY - rect.top - rect.height / 2);
  };

  return (
    <div
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onMouseMove={handleMouseMove}
      className="grid grid-cols-2 gap-4"
    >
      {/* BIG CARD */}
      <div className="col-span-2 relative h-64 overflow-hidden rounded-3xl">
        <AnimatePresence mode="wait">
          <motion.div
            key={bigIndex}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.9 }}
            style={!isMobile ? { x: translateX, y: translateY } : {}}
            className="absolute inset-0"
          >
            <img
              src={bigImages[bigIndex].image}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40" />
            <div className="absolute bottom-4 left-4 text-white">
              <span className="rounded-full bg-orange-500 px-3 py-1 text-xs font-semibold">
                {bigImages[bigIndex].tag}
              </span>
              <h4 className="mt-2 text-lg font-bold">
                {bigImages[bigIndex].title}
              </h4>
              <p className="text-sm text-white/80">
                {bigImages[bigIndex].desc}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* SMALL CARD 1 */}
      <AnimatePresence mode="wait">
        <motion.div
          key={`s1-${smallIndex}`}
          initial={isMobile ? { opacity: 0, scale: 0.95 } : { opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="relative h-52 overflow-hidden rounded-3xl"
        >
          <img
            src={smallImages[smallIndex].image}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute bottom-4 left-4 text-white">
            <h4 className="font-bold">{smallImages[smallIndex].title}</h4>
            <p className="text-sm text-white/80">
              {smallImages[smallIndex].desc}
            </p>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* SMALL CARD 2 */}
      <AnimatePresence mode="wait">
        <motion.div
          key={`s2-${smallIndex}`}
          initial={isMobile ? { opacity: 0, scale: 0.95 } : { opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="relative h-52 overflow-hidden rounded-3xl"
        >
          <img
            src={smallImages[(smallIndex + 1) % smallImages.length].image}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute bottom-4 left-4 text-white">
            <h4 className="font-bold">
              {smallImages[(smallIndex + 1) % smallImages.length].title}
            </h4>
            <p className="text-sm text-white/80">
              {smallImages[(smallIndex + 1) % smallImages.length].desc}
            </p>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
