import "../styles/restaurant-cards.css";

// ✅ Import all images from assets
import image41 from "../assets/image41.png";
import image40 from "../assets/image40.png";
import image39 from "../assets/image39.png";
import ellipse1 from "../assets/ellipse1.png";
import ellipse1_1 from "../assets/ellipse1-1.png";
import ellipse1_2 from "../assets/ellipse1-2.png";

const restaurants = [
  {
    id: 1,
    name: "The Seafood Place",
    description: "Dive into flavor at the Seafood Place.",
    image: image41,
    logo: ellipse1,
    category: "Seafood",
    time: "20 min",
    rating: "4.0",
  },
  {
    id: 2,
    name: "The Suya Bistro",
    description: "Dive into flavor at the Seafood Place.",
    image: image40,
    logo: ellipse1_1,
    category: "Beef Suya",
    time: "35 min",
    rating: "4.0",
  },
  {
    id: 3,
    name: "Chef Mike's Haven",
    description: "Dive into flavor at the Seafood Place.",
    image: image39,
    logo: ellipse1_2,
    category: "Soul Food",
    time: "20 min",
    rating: "4.0",
  },
];

export default function RestaurantCards() {
  return (
    <div className="container">
      <h2 className="title">Top Restaurants</h2>
      <div className="cards-container">
        {restaurants.map((restaurant) => (
          <div key={restaurant.id} className="card">
            <div className="image-container">
              <img
                src={restaurant.image}
                alt={restaurant.name}
                className="image"
              />
              <div className="category-tag1">{restaurant.category}</div>
              <button className="heart-icon">
                <i className="fa-regular fa-heart"></i>
              </button>
            </div>

            <div className="content">
              <div className="header">
                <img
                  src={restaurant.logo}
                  alt={`${restaurant.name} logo`}
                  className="logo"
                />
                <h3 className="restaurant-name">{restaurant.name}</h3>
              </div>
              <p className="description">{restaurant.description}</p>
              <div className="foot">
                <div className="time">
                  <i className="fa-regular fa-clock"></i>
                  <span>{restaurant.time}</span>
                </div>
                <div className="rating">
                  <i className="fa-solid fa-star star-icon"></i>
                  <span>{restaurant.rating}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
