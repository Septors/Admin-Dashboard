import { Routes, Route } from "react-router-dom";
import DashboardPage from "../features/dashboard/Dashboard.page";
import AppLayout from "../shared/layouts/AppLayout";
import ProductsPage from "../features/products/ProductsPage";
import OrderPage from "../features/orders/orderPage";
import StocksPage from "../features/stock/StockPage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<DashboardPage />} />
        <Route path="products" element={<ProductsPage />} />
        <Route path="orders" element={<OrderPage />} />
        <Route path="stock" element={<StocksPage />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;