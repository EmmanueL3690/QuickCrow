import "../styles/Feature.css";

// ✅ Import images from assets
import image27 from "../assets/image27.png";
import image21_1 from "../assets/image21-1.png";
import image4 from "../assets/image4.png";

const features = [
  {
    id: 1,
    name: "Loaded fries",
    description: "₦1,500",
    image: image27,
  },
  {
    id: 2,
    name: "Spaghetti",
    description: "₦3,500",
    image: image21_1,
  },
  {
    id: 3,
    name: "Potato fries",
    description: "₦3,500",
    image: image4,
  },
];

export default function FeatureCards() {
  return (
    <div className="container2">
      <h2 className="title">Recommendations</h2>
      <div className="cards-container">
        {features.map((item) => (
          <div key={item.id} className="card">
            <div className="image-container">
              <img src={item.image} alt={item.name} className="image" />
            </div>
            <div className="content">
              <div className="header">
                <h3 className="restaurant-name">{item.name}</h3>
              </div>
              <div className="foot">
                <p className="description">{item.description}</p>
                <button className="btn">
                  <i className="fa-solid fa-plus"></i>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

