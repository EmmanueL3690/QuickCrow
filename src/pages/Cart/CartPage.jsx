import { useCartStore } from "../../store/cart";
import { Minus, Plus, Trash2, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function CartPage() {
  const navigate = useNavigate();

  const cart = useCartStore((s) => s.cart);
  const increaseQty = useCartStore((s) => s.increaseQty);
  const decreaseQty = useCartStore((s) => s.decreaseQty);
  const removeFromCart = useCartStore((s) => s.removeFromCart);
  const totalPrice = useCartStore((s) => s.totalPrice);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* HEADER */}
      <div className="flex items-center gap-3 p-4 bg-white shadow">
        <ArrowLeft onClick={() => navigate(-1)} className="cursor-pointer" />
        <h1 className="text-xl font-bold">Your Cart</h1>
      </div>

      {/* EMPTY CART */}
      {cart.length === 0 && (
        <p className="text-center mt-16 text-gray-600">Your cart is empty.</p>
      )}

      {/* CART ITEMS */}
      <div className="p-4 flex flex-col gap-4">
        {cart.map((item) => (
          <div key={item.id} className="bg-white rounded-xl p-4 shadow">
            <div className="flex gap-3">
              <img
                src={item.image}
                className="w-20 h-20 rounded-lg object-cover"
                alt=""
              />

              <div className="flex-1">
                <h2 className="font-semibold">{item.name}</h2>
                <p className="text-sm text-gray-500">₦{item.price.toLocaleString()}</p>

                {/* QTY CONTROLS */}
                <div className="flex items-center gap-3 mt-3">
                  <button
                    className="bg-gray-200 p-2 rounded-lg"
                    onClick={() => decreaseQty(item.id)}
                  >
                    <Minus size={14} />
                  </button>

                  <span className="font-semibold">{item.qty}</span>

                  <button
                    className="bg-gray-200 p-2 rounded-lg"
                    onClick={() => increaseQty(item.id)}
                  >
                    <Plus size={14} />
                  </button>
                </div>
              </div>

              {/* DELETE */}
              <Trash2
                className="text-red-500 cursor-pointer"
                onClick={() => removeFromCart(item.id)}
              />
            </div>
          </div>
        ))}
      </div>

      {/* STICKY CHECKOUT BAR */}
      {cart.length > 0 && (
        <div className="fixed bottom-0 left-0 w-full bg-white p-4 border-t shadow flex items-center justify-between">
          <p className="text-xl font-bold">
            ₦{totalPrice().toLocaleString()}
          </p>

          <button className="bg-primary text-white px-6 py-3 rounded-xl font-bold">
            Checkout
          </button>
        </div>
      )}
    </div>
  );
}
