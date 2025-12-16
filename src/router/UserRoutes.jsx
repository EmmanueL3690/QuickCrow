// // import { Route } from "react-router-dom";

// // // Layout
// // // import MainLayout from "../layouts/MainLayout";

// // // User Pages
// // import Home from "../pages/Home/Home";
// // // import RestaurantsList from "../pages/Restaurants/RestaurantsList";
// // // import RestaurantDetails from "../pages/Restaurants/RestaurantDetails";
// // // import ProductDetails from "../pages/Product/ProductDetails";
// // // import CartPage from "../pages/Cart/CartPage";
// // // import Checkout from "../pages/Checkout/Checkout";
// // // import OrderStatus from "../pages/Orders/OrderStatus";
// // // import OrderHistory from "../pages/Orders/OrderHistory";
// // // import UserProfile from "../pages/Profile/UserProfile";
// // // import EditProfile from "../pages/Profile/EditProfile";
// // // import SavedAddresses from "../pages/Profile/SavedAddresses";
// // // import SearchPage from "../pages/Search/SearchPage";

// // export const UserRoutes = (
// //   <Route>
// //     <Route path="/" element={<Home />} />

// //     {/* <Route path="/restaurants" element={<RestaurantsList />} />
// //     <Route path="/restaurant/:id" element={<RestaurantDetails />} />
// //     <Route path="/product/:id" element={<ProductDetails />} />

// //     <Route path="/cart" element={<CartPage />} />
// //     <Route path="/checkout" element={<Checkout />} />

// //     <Route path="/order/status/:id" element={<OrderStatus />} />
// //     <Route path="/orders/history" element={<OrderHistory />} />

// //     <Route path="/profile" element={<UserProfile />} />
// //     <Route path="/profile/edit" element={<EditProfile />} />
// //     <Route path="/profile/addresses" element={<SavedAddresses />} />

// //     <Route path="/search" element={<SearchPage />} /> */}
// //   </Route>
// // );

// import { Route } from "react-router-dom";

// // Layout
// import MainLayout from "../layouts/MainLayout";

// // User Pages
// import Home from "../pages/Home/Home";
// // import RestaurantsList from "../pages/Restaurants/RestaurantsList";
// // import RestaurantDetails from "../pages/Restaurants/RestaurantDetails";
// // import ProductDetails from "../pages/Product/ProductDetails";
// // import CartPage from "../pages/Cart/CartPage";
// // import Checkout from "../pages/Checkout/Checkout";
// // import OrderStatus from "../pages/Orders/OrderStatus";
// // import OrderHistory from "../pages/Orders/OrderHistory";
// // import UserProfile from "../pages/Profile/UserProfile";
// // import EditProfile from "../pages/Profile/EditProfile";
// // import SavedAddresses from "../pages/Profile/SavedAddresses";
// // import SearchPage from "../pages/Search/SearchPage";

// export const UserRoutes = (
//   <>
//     {/* REAL APP ROUTES (Using Layout) */}
//     <Route element={<Home/>}>
//       <Route path="/" element={<Home />} />

//       {/* <Route path="/restaurants" element={<RestaurantsList />} />
//       <Route path="/restaurant/:id" element={<RestaurantDetails />} />
//       <Route path="/product/:id" element={<ProductDetails />} />

//       <Route path="/cart" element={<CartPage />} />
//       <Route path="/checkout" element={<Checkout />} />

//       <Route path="/order/status/:id" element={<OrderStatus />} />
//       <Route path="/orders/history" element={<OrderHistory />} />

//       <Route path="/profile" element={<UserProfile />} />
//       <Route path="/profile/edit" element={<EditProfile />} />
//       <Route path="/profile/addresses" element={<SavedAddresses />} />

//       <Route path="/search" element={<SearchPage />} /> */}
//     </Route>

//     {/* TEST HOME WITHOUT LAYOUT */}
//     <Route path="/test-home" element={<Home />} />
//   </>
// );

import { Route } from "react-router-dom";

// Layout
import MainLayout from "../layouts/MainLayout";

// Pages
import Home from "../pages/Home/Home";
import Restaurant from "../pages/Restaurants/Restaurant"; 
import RestaurantDetails from "../pages/Restaurants/RestaurantDetails";
import FoodDetail from "../pages/Food/FoodDetail";
import OrderHistory from "../pages/Orders/OrderHistory";
import OrderStatus from "../pages/Orders/OrderStatus";
import Orders from "../pages/Orders/Order";
import EditProfile from "../../src/pages/Profile/EditProfile"
import Login from "../../src/pages/Auth/Login";
import Signup from "../../src/pages/Auth/Register";
import VendorRegister from "../pages/Vendor/VendorRegister";

import CartPage from "../pages/Cart/CartPage";

export const UserRoutes = (
  <>
    {/* ROUTES WITH NAVBAR */}
    <Route element={<MainLayout />}>
      <Route path="/" element={<Home />} />
      <Route path="/restaurants" element={<Restaurant />} />
      <Route path="/restaurants/:id" element={<RestaurantDetails />} />
      <Route path="/food/:id" element={<FoodDetail />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/orders/history" element={<OrderHistory />} />
      <Route path="/order/status/:id" element={<OrderStatus />} />
      <Route path="/orders" element={<Orders />} />
      <Route path="/EditProfile" element={<EditProfile />} />
    </Route>

    {/* ROUTES WITHOUT NAVBAR */}
    <Route path="/login" element={<Login />} />
    <Route path="/signup" element={<Signup />} />
    <Route path="/vendor/register" element={<VendorRegister />} />

    {/* Optional test */}
    <Route path="/test-home" element={<Home />} />
  </>
);

