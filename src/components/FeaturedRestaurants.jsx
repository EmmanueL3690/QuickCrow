import React, { useState, useEffect } from "react";
import "../styles/FeaturedRestaurants.css";

// ✅ Import all images from your assets folder
import exoticindianflavorsImg from "../assets/exoticindianflavors.jpg";
import pastaPalaceImg from "../assets/pastapalace.jpg";
import sushiCentralImg from "../assets/sushicentral.jpg";
import burgerTownImg from "../assets/image8.png";
import tacoFiestaImg from "../assets/tacofiesta.jpg";

const restaurants = [
  {
    id: 1,
    name: "The Spice Garden",
    description: "Exotic Indian flavors",
    image: exoticindianflavorsImg,
  },
  {
    id: 2,
    name: "Pasta Palace",
    description: "Authentic Italian pasta",
    image: pastaPalaceImg,
  },
  {
    id: 3,
    name: "Sushi Central",
    description: "Fresh sushi and rolls",
    image: sushiCentralImg,
  },
  {
    id: 4,
    name: "Burger Town",
    description: "Juicy gourmet burgers",
    image: burgerTownImg,
  },
  {
    id: 5,
    name: "Taco Fiesta",
    description: "Mexican street food",
    image: tacoFiestaImg,
  },
];

const FeaturedRestaurants = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(1);

  useEffect(() => {
    const updateCardsPerView = () => {
      const width = window.innerWidth;
      if (width < 640) setCardsPerView(1);
      else if (width < 1024) setCardsPerView(2);
      else setCardsPerView(3);
    };

    updateCardsPerView();
    window.addEventListener("resize", updateCardsPerView);
    return () => window.removeEventListener("resize", updateCardsPerView);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) =>
        (prev + 1) % Math.ceil(restaurants.length / cardsPerView)
      );
    }, 4000);
    return () => clearInterval(interval);
  }, [cardsPerView]);

  const totalSlides = Math.ceil(restaurants.length / cardsPerView);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  };

  const getVisibleRestaurants = () => {
    const start = currentIndex * cardsPerView;
    return restaurants.concat(restaurants).slice(start, start + cardsPerView);
  };

  return (
    <div className="carousel-container">
      <h2 className="carousel-title">Featured Restaurants</h2>
      <div className="carousel-wrapper">
        <button className="carousel-btn left" onClick={prevSlide}>
          &#8249;
        </button>
        <div className="carousel-track">
          {getVisibleRestaurants().map((rest, i) => (
            <div className="carousel-card" key={`${rest.id}-${i}`}>
              <img src={rest.image} alt={rest.name} />
              <h3>{rest.name}</h3>
              <p>{rest.description}</p>
            </div>
          ))}
        </div>
        <button className="carousel-btn right" onClick={nextSlide}>
          &#8250;
        </button>
      </div>
    </div>
  );
};

export default FeaturedRestaurants;
