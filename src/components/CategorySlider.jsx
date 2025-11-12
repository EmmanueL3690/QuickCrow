import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import "../styles/CategorySlider.css";

// ✅ Import images from assets folder
import image23 from "../assets/image23.png";
import image22 from "../assets/image22.png";
import image21 from "../assets/image21.png";
import image8 from "../assets/image8.png";
import image4 from "../assets/image4.png";
import donut6 from "../assets/donut6.png";

// ✅ Define your cards array
const cards = [
  { title: "Pizza", image: image23 },
  { title: "Shawarma", image: image22 },
  { title: "Pasta", image: image21 },
  { title: "Bread Burger", image: image8 },
  { title: "Chips", image: image4 },
  { title: "Donut", image: donut6 },
];

export default function CategorySlider() {
  const swiperRef = useRef(null);
  const [isForward, setIsForward] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      const swiper = swiperRef.current?.swiper;
      if (!swiper) return;

      if (isForward) {
        if (swiper.realIndex < cards.length - 1) {
          swiper.slideNext();
        } else {
          setIsForward(false);
          swiper.slidePrev();
        }
      } else {
        if (swiper.realIndex > 0) {
          swiper.slidePrev();
        } else {
          setIsForward(true);
          swiper.slideNext();
        }
      }
    }, 3000); // every 3 seconds

    return () => clearInterval(interval);
  }, [isForward]);

  return (
    <div className="Categories-container">
      <h1 className="cat">Categories</h1>
      <div className="card-slider-wrapper">
        <Swiper
          ref={swiperRef}
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          slidesPerView="auto"
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
          }}
          pagination={{ clickable: true }}
          navigation={true}
          loop={false}
          modules={[EffectCoverflow, Pagination, Navigation]}
          className="swiper_container"
        >
          {cards.map((card, index) => (
            <SwiperSlide key={index}>
              <div className="simple-card">
                <img src={card.image} alt={card.title} />
                <h3>{card.title}</h3>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

