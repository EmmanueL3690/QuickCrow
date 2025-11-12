import React from "react";
import "../styles/OrderPage.css";

// ✅ Import your images from assets
import image8 from "../assets/image8.png";
import sushiCentral from "../assets/Sushi Central.jpg";
import grilledChicken from "../assets/Grilled Chicken.jpg";
import tacoFiesta from "../assets/Taco Fiesta.jpg";

const orders = [
  {
    id: "ORD001",
    restaurantName: "Pizza Palace",
    dishName: "Large Pepperoni Pizza",
    imageUrl: image8, // ✅ Imported asset
    status: "ongoing",
    items: [
      { name: "Large Pepperoni Pizza", quantity: 1 },
      { name: "Coke", quantity: 2 },
    ],
    totalPrice: "$25.99",
    orderDate: "2024-07-15 19:30",
  },
  {
    id: "ORD002",
    restaurantName: "Sushi Express",
    dishName: "Assorted Sushi Platter",
    imageUrl: sushiCentral, // ✅ Imported asset
    status: "ongoing",
    items: [
      { name: "Assorted Sushi Platter", quantity: 1 },
      { name: "Miso Soup", quantity: 1 },
    ],
    totalPrice: "$35.00",
    orderDate: "2024-07-15 18:45",
  },
  {
    id: "ORD003",
    restaurantName: "Burger Joint",
    dishName: "Classic Cheeseburger Meal",
    imageUrl: image8, // ✅ You can replace this with your burger image later
    status: "completed",
    items: [
      { name: "Classic Cheeseburger", quantity: 1 },
      { name: "Fries", quantity: 1 },
      { name: "Milkshake", quantity: 1 },
    ],
    totalPrice: "$18.50",
    orderDate: "2024-07-14 13:10",
  },
  {
    id: "ORD004",
    restaurantName: "Healthy Bites",
    dishName: "Quinoa Salad with Chicken",
    imageUrl: grilledChicken, // ✅ Imported asset
    status: "completed",
    items: [
      { name: "Quinoa Salad", quantity: 1 },
      { name: "Grilled Chicken Add-on", quantity: 1 },
    ],
    totalPrice: "$14.75",
    orderDate: "2024-07-13 12:00",
  },
  {
    id: "ORD005",
    restaurantName: "Taco Fiesta",
    dishName: "Taco Combo",
    imageUrl: tacoFiesta, // ✅ Imported asset
    status: "cancelled",
    items: [
      { name: "3 Tacos (Beef)", quantity: 1 },
      { name: "Nachos", quantity: 1 },
    ],
    totalPrice: "$16.00",
    orderDate: "2024-07-12 20:00",
  },
];

export default function OrderPage() {
  const [activeTab, setActiveTab] = React.useState("ongoing");

  const filteredOrders = orders.filter(
    (order) => order.status === activeTab
  );

  return (
    <div className="order-container">
      <h1 className="order-title">My Orders</h1>

      <div className="tabs">
        <button
          className={activeTab === "ongoing" ? "tab active" : "tab"}
          onClick={() => setActiveTab("ongoing")}
        >
          Ongoing
        </button>
        <button
          className={activeTab === "completed" ? "tab active" : "tab"}
          onClick={() => setActiveTab("completed")}
        >
          Completed
        </button>
        <button
          className={activeTab === "cancelled" ? "tab active" : "tab"}
          onClick={() => setActiveTab("cancelled")}
        >
          Cancelled
        </button>
      </div>

      <div className="orders-grid">
        {filteredOrders.length === 0 ? (
          <p className="no-orders">No {activeTab} orders.</p>
        ) : (
          filteredOrders.map((order) => (
            <div className="order-card" key={order.id}>
              <div className="card-header">
                <h3>{order.restaurantName}</h3>
                <span className={`badge ${order.status}`}>
                  {order.status}
                </span>
              </div>

              <div className="order-info">
                <img
                  src={order.imageUrl}
                  alt={order.dishName}
                  className="order-img"
                />
                <div>
                  <p className="dish-name">{order.dishName}</p>
                  <p className="order-id">Order ID: {order.id}</p>
                </div>
              </div>

              <p className="order-date">
                Ordered on: {order.orderDate}
              </p>

              <table className="order-table">
                <thead>
                  <tr>
                    <th>Item</th>
                    <th>Qty</th>
                  </tr>
                </thead>
                <tbody>
                  {order.items.map((item, index) => (
                    <tr key={index}>
                      <td>{item.name}</td>
                      <td>{item.quantity}</td>
                    </tr>
                  ))}
                </tbody>
              </table>

              <div className="total">
                <strong>Total:</strong>
                <span>{order.totalPrice}</span>
              </div>

              <div className="order-actions">
                <button className="btn-outline">View Details</button>
                {order.status !== "cancelled" && (
                  <button className="btn-primary">Reorder</button>
                )}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}


