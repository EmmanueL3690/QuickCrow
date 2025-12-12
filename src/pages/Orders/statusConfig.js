import { Clock, CheckCircle2, Truck, ChefHat } from "lucide-react";

const statusConfig = {
  pending: { icon: Clock, label: "Order Placed", color: "text-gold bg-gold-light" },
  preparing: { icon: ChefHat, label: "Preparing", color: "text-info bg-info/10" },
  on_the_way: { icon: Truck, label: "On the Way", color: "text-primary bg-primary/10" },
  delivered: { icon: CheckCircle2, label: "Delivered", color: "text-success bg-success-light" },
};

export default statusConfig;
