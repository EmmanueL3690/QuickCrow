import { Route } from "react-router-dom";
import AuthLayout from "../layouts/AuthLayout";
import DashboardLayout from "../layouts/DashboardLayout";

import AdminLogin from "../pages/Admin/AdminLogin";
import DashboardHome from "../pages/Admin/DashboardHome";
import ManageOrders from "../pages/Admin/ManageOrders";
import ManageRestaurants from "../pages/Admin/ManageRestaurants";
import ManageProducts from "../pages/Admin/ManageProducts";

export const AdminRoutes = (
  <>
    <Route element={<AuthLayout />}>
      <Route path="/admin/login" element={<AdminLogin />} />
    </Route>

    <Route path="/admin" element={<DashboardLayout />}>
      <Route index element={<DashboardHome />} />
      <Route path="orders" element={<ManageOrders />} />
      <Route path="restaurants" element={<ManageRestaurants />} />
      <Route path="products" element={<ManageProducts />} />
    </Route>
  </>
);
