import { useParams, useNavigate } from "react-router-dom";
import { Star, Minus, Plus, ArrowLeft } from "lucide-react";
import { useState } from "react";

// ⬇️ Import Zustand cart store
import { useCartStore } from "../../store/cart";

import friedricecombo from "../../assets/friedricecombo.jpg";
import grilledchicken from "../../assets/grilledchicken.jpg";

import image22 from "../../assets/image22.png";

const sampleFoods = {
  1: {
    id: 1,
    name: "Spicy Jollof Rice",
    image: friedricecombo,
    restaurant: "Mama Put Kitchen",
    rating: 4.7,
    price: 2500,
    description: "A delicious plate of spicy Nigerian jollof rice cooked with fresh tomato stew, served with chicken.",
  },
  2: {
    id: 2,
    name: "Grilled Chicken",
    image: grilledchicken,
    restaurant: "Grill Master",
    rating: 4.5,
    price: 3200,
    description: "Juicy grilled BBQ chicken wings with smoky flavor and delicious glaze.",
  },
  3: {
    id: 3,
    name: "Shawarma Deluxe",
    image: image22,
    restaurant: "Urban Shawarma",
    rating: 4.8,
    price: 2800,
    description: "Loaded shawarma wrap packed with beef, chicken, crunchy veggies, and creamy garlic sauce.",
  },
};

export default function FoodDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const food = sampleFoods[id];

  // ⬇️ Zustand addToCart function
  const addToCart = useCartStore((s) => s.addToCart);

  const [qty, setQty] = useState(1);

  if (!food) {
    return <p className="p-6 text-center">Food item not found.</p>;
  }

  return (
    <div className="min-h-screen bg-white">
      {/* TOP IMAGE SECTION */}
      <div className="relative w-full h-[280px]">
        <img
          src={food.image}
          alt={food.name}
          className="w-full h-full object-cover"
        />

        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="absolute top-4 left-4 bg-white/90 p-2 rounded-full shadow-lg"
        >
          <ArrowLeft size={22} />
        </button>
      </div>

      {/* CONTENT */}
      <div className="p-5 pb-32">
        <h1 className="text-2xl font-bold text-gray-900">{food.name}</h1>

        <div className="flex items-center gap-2 mt-2">
          <Star className="text-yellow-500 fill-yellow-500" size={18} />
          <span className="font-medium text-gray-700">{food.rating}</span>
          <span className="text-gray-500">• {food.restaurant}</span>
        </div>

        <p className="text-gray-600 mt-4 leading-relaxed">
          {food.description}
        </p>

        {/* PRICE */}
        <p className="text-3xl font-bold mt-5">
          ₦{food.price.toLocaleString()}
        </p>

        {/* QUANTITY SELECTOR */}
        <div className="flex items-center gap-5 mt-6 bg-gray-100 w-max p-2 rounded-xl">
          <button
            onClick={() => qty > 1 && setQty(qty - 1)}
            className="p-2 bg-white rounded-lg shadow"
          >
            <Minus size={18} />
          </button>

          <span className="text-lg font-semibold">{qty}</span>

          <button
            onClick={() => setQty(qty + 1)}
            className="p-2 bg-white rounded-lg shadow"
          >
            <Plus size={18} />
          </button>
        </div>
      </div>

      {/* STICKY ADD TO CART */}
      <div className="fixed bottom-0 left-0 w-full bg-white border-t shadow-lg p-4 flex items-center justify-between">
        <p className="text-xl font-bold">
          ₦{(food.price * qty).toLocaleString()}
        </p>

        <button
          className="bg-primary text-white font-semibold px-6 py-3 rounded-xl"
          onClick={() => addToCart(food, qty)} // ⬅️ GLOBAL ADD TO CART WORKING
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
