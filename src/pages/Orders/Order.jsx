import { useState } from "react";
import { Package } from "lucide-react";
import { Link } from "react-router-dom";
import OrderHistory from "./OrderHistory";
import OrderStatus from "./OrderStatus";

const mockOrders = [
  {
    id: "ORD-001",
    restaurantName: "Mama Put Kitchen",
    restaurantImage: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=200",
    items: [
      { name: "Jollof Rice", quantity: 2 },
      { name: "Grilled Chicken", quantity: 1 },
    ],
    total: 5500,
    status: "on_the_way",
    date: "2024-01-15T10:30:00",
  },
  {
    id: "ORD-002",
    restaurantName: "Chicken Republic",
    restaurantImage: "https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?w=200",
    items: [
      { name: "Chicken & Chips", quantity: 1 },
      { name: "Chicken Burger", quantity: 2 },
    ],
    total: 7100,
    status: "delivered",
    date: "2024-01-14T18:45:00",
  },
];

export default function Orders() {
  const [activeTab, setActiveTab] = useState("active");

  const activeOrders = mockOrders.filter(o => o.status !== "delivered");
  const orderHistory = mockOrders.filter(o => o.status === "delivered");

  return (
    <div className="min-h-screen pb-8">
      <div className="container py-4">
        <h1 className="text-2xl font-bold mb-6">My Orders</h1>

        {/* Tabs */}
        <div className="flex gap-4 mb-6 border-b border-border">
          <button
            onClick={() => setActiveTab("active")}
            className={`pb-3 ${activeTab === "active" ? "text-primary" : "text-muted-foreground"}`}
          >
            Active Orders
          </button>

          <button
            onClick={() => setActiveTab("history")}
            className={`pb-3 ${activeTab === "history" ? "text-primary" : "text-muted-foreground"}`}
          >
            Order History
          </button>
        </div>

        {/* Show Correct Component */}
        {activeTab === "active" && <OrderStatus orders={activeOrders} />}
        {activeTab === "history" && <OrderHistory orders={orderHistory} />}

      </div>
    </div>
  );
}
