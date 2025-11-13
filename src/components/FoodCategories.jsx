import React from "react";
import "../styles/FoodCategories.css";

import pizzaImg from "../assets/image23.png";
import chineseImg from "../assets/image21-1.png";
import grillImg from "../assets/grill.jpg";
import dessertImg from "../assets/dessert.jpg";
import burgersImg from "../assets/image8.png";
import drinksImg from "../assets/drinks.jpg";

const categories = [
  {
    id: 1,
    name: "Pizza",
    image: pizzaImg,
    rating: 4.5,
    description: "Cheesy and crispy Italian goodness.",
  },
  {
    id: 2,
    name: "Chinese",
    image: chineseImg,
    rating: 4.2,
    description: "Noodles, rice, and dumplings with flavor.",
  },
  {
    id: 3,
    name: "Grill",
    image: grillImg,
    rating: 4.7,
    description: "Smoky meats straight from the flame.",
  },
  {
    id: 4,
    name: "Dessert",
    image: dessertImg,
    rating: 4.4,
    description: "Sweet treats and indulgent bites.",
  },
  {
    id: 5,
    name: "Burgers",
    image: burgersImg,
    rating: 4.6,
    description: "Juicy patties stacked with flavor.",
  },
  {
    id: 6,
    name: "Drinks",
    image: drinksImg,
    rating: 4.3,
    description: "Refreshing sips for every meal.",
  },
];

const FoodCategories = () => {
  return (
    <section className="category-section">
      <h2 className="category-title">Top Categories</h2>
      <div className="category-grid">
        {categories.map((cat) => (
          <div className="category-card" key={cat.id}>
            <img src={cat.image} alt={cat.name} />
            <h3>{cat.name}</h3>
            <p className="category-description">{cat.description}</p>
            <p className="category-rating">
              <i className="star">★</i> {cat.rating}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FoodCategories;


