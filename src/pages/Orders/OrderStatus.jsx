import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import statusConfig from "./statusConfig";
import formatCurrency from "../../utils/formatCurrency";

export default function OrderStatus({ orders }) {
  if (orders.length === 0)
    return (
      <div className="py-20 text-center">
        <h3>No active orders</h3>
      </div>
    );

  return (
    <div className="space-y-4">
      {orders.map((order, index) => {
        const status = statusConfig[order.status];

        return (
          <motion.div
            key={order.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="rounded-xl bg-card border border-border p-4"
          >
            <div className="flex gap-4">
              <img
                src={order.restaurantImage}
                className="w-16 h-16 rounded-lg object-cover"
              />
              <div className="flex-1">
                <h3 className="font-semibold">{order.restaurantName}</h3>
                <p className="text-sm text-muted-foreground">
                  {order.items.map(i => `${i.quantity}x ${i.name}`).join(", ")}
                </p>

                <div className="mt-2 flex justify-between">
                  <span className="font-bold text-primary">
                    {formatCurrency(order.total)}
                  </span>
                </div>
              </div>
            </div>

            {/* Progress Tracker */}
            <div className="mt-6 pt-4 border-t border-border">
              <div className="flex justify-between">
                {["pending", "preparing", "on_the_way", "delivered"].map((step, i) => {
                  const stepConfig = statusConfig[step];
                  const isActive =
                    ["pending", "preparing", "on_the_way", "delivered"].indexOf(order.status) >= i;

                  return (
                    <div key={step} className="flex flex-col items-center flex-1">
                      <div
                        className={`flex h-10 w-10 items-center justify-center rounded-full ${
                          isActive
                            ? "bg-primary text-black"
                            : "bg-secondary text-muted-foreground"
                        }`}
                      >
                        <stepConfig.icon className="h-5 w-5" />
                      </div>
                      <span className="mt-2 text-xs text-center">
                        {stepConfig.label}
                      </span>
                    </div>
                  );
                })}
              </div>

              <div className="mt-4 flex items-center gap-2 p-3 rounded-lg bg-secondary/50">
                <MapPin className="h-4 w-4 text-primary" />
                <span className="text-sm">Rider is 15 mins away from your location</span>
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
