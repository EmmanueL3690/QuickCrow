import { BrowserRouter, Routes } from "react-router-dom";

import { UserRoutes } from "./UserRoutes";
// import { VendorRoutes } from "./VendorRoutes";
// import { AdminRoutes } from "./AdminRoutes";
// import NotFound from "../pages/NotFound";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        {UserRoutes}
        {/* {VendorRoutes}
        {AdminRoutes} */}

        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </BrowserRouter>
  );
}
