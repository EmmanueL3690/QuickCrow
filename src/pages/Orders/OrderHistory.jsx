import { motion } from "framer-motion";
import formatCurrency from "../../utils/formatCurrency";
import statusConfig from "./statusConfig";

export default function OrderHistory({ orders }) {
  if (orders.length === 0)
    return (
      <div className="py-20 text-center">
        <h3>No order history</h3>
      </div>
    );

  return (
    <div className="space-y-4">
      {orders.map((order, index) => (
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

          {/* Buttons */}
          <div className="mt-4 pt-4 border-t border-border flex gap-3">
            <button className="flex-1 rounded-lg bg-secondary py-2 text-sm font-medium">
              Reorder
            </button>
            <button className="flex-1 rounded-lg border border-border py-2 text-sm font-medium">
              Rate Order
            </button>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
