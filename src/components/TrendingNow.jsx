import React, { useEffect, useRef } from "react";
import "../styles/TrendingNow.css";

import pizzaImg from "../assets/image23.png";
import chineseImg from "../assets/image21-1.png";
import grillImg from "../assets/grill.jpg";
import friedRiceImg from "../assets/friedricecombo.jpg";
import burgerImg from "../assets/image8.png";
import dessertImg from "../assets/dessert.jpg";

const dishes = [
  {
    id: 1,
    name: "Pepperoni Pizza",
    price: "₦2,500",
    image: pizzaImg,
    description: "A spicy cheesy delight.",
  },
  {
    id: 2,
    name: "Spaghetti Bolognese",
    price: "₦3,000",
    image: chineseImg,
    description: "Classic pasta with rich meat sauce.",
  },
  {
    id: 3,
    name: "Grilled Chicken",
    price: "₦4,200",
    image: grillImg,
    description: "Juicy chicken with smoky flavor.",
  },
  {
    id: 4,
    name: "Fried Rice Combo",
    price: "₦3,500",
    image: friedRiceImg,
    description: "Savory rice with beef and plantain.",
  },
  {
    id: 5,
    name: "Cheeseburger",
    price: "₦2,800",
    image: burgerImg,
    description: "Melty cheese on a juicy beef patty.",
  },
  {
    id: 6,
    name: "Dessert",
    price: "₦1,800",
    image: dessertImg,
    description: "Sweet creamy indulgent finish.",
  },
];

const TrendingNow = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    let scrollSpeed = 1;

    const autoScroll = () => {
      if (scrollContainer) {
        scrollContainer.scrollLeft += scrollSpeed;

        // Infinite loop
        if (
          scrollContainer.scrollLeft >=
          scrollContainer.scrollWidth - scrollContainer.clientWidth
        ) {
          scrollContainer.scrollLeft = 0;
        }
      }
    };

    const interval = setInterval(autoScroll, 20); // smooth & continuous

    return () => clearInterval(interval); // cleanup
  }, []);

  return (
    <section className="trending-section">
      <div className="trending-header">
        <h2 className="trending-title">Trending Now</h2>
        <button className="view-all-btn">View All</button>
      </div>
      <div className="trending-scroll-wrapper" ref={scrollRef}>
        {[...dishes, ...dishes].map((dish, index) => (
          <div className="trending-card" key={`${dish.id}-${index}`}>
            <img src={dish.image} alt={dish.name} />
            <div className="card-content">
              <h4>{dish.name}</h4>
              <p className="dish-description">{dish.description}</p>
              <p className="dish-price">{dish.price}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TrendingNow;

