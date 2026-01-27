// Sidebar.tsx
import SidebarButton from "./SidebarButton";
import DashboardIconActive from "../../../assets/icons/Sidebar/Dashboard-active.png";
import DashboardIconNonActive from "../../../assets/icons/Sidebar/Dashboard-nonActive.png";
import ProductsActive from "../../../assets/icons/Sidebar/Products-active.png";
import ProductsNonActive from "../../../assets/icons/Sidebar/Products-nonActive.png";
import OrderListsActive from "../../../assets/icons/Sidebar/OrderLists-active.png";
import OrderListsNonActive from "../../../assets/icons/Sidebar/OrderLists-nonActive.png";
import ProductStockActive from "../../../assets/icons/Sidebar/ProductStock-active.png";
import ProductStockNonActive from "../../../assets/icons/Sidebar/ProductStock-nonActive.png";
import LogoutIcon from "../../../assets/icons/Logout-icon.png";
import LogoutActiveIcon from "../../../assets/icons/Logout-active.png";

const buttons = [
  { to: "/app", text: "Dashboard", icon: DashboardIconNonActive, activeIcon: DashboardIconActive, end: true },
  { to: "/app/products", text: "Products", icon: ProductsNonActive, activeIcon: ProductsActive },
  { to: "/app/orders", text: "Order List", icon: OrderListsNonActive, activeIcon: OrderListsActive },
  { to: "/app/stock", text: "Product Stock", icon: ProductStockNonActive, activeIcon: ProductStockActive },
  { to: "/", text: "Logout", icon: LogoutIcon, activeIcon: LogoutActiveIcon }
];

const Sidebar = () => {
  return (
    <aside className="w-[240px] h-screen bg-white">
      {/* Logo */}
      <div className="flex m-[24px_45px_30px_66px] w-[129px] h-[27px]">
        <p className="text-xl font-bold text-[#4880FF]">Dash</p>
        <p className="text-xl font-bold text-[#202224]">Stack</p>
      </div>

      {/* Navigation */}
      <nav className="flex flex-col px-6">
        {buttons.map(({ to, text, icon, activeIcon, end }) => (
          <SidebarButton
            key={to}
            to={to}
            text={text}
            icon={icon}
            activeIcon={activeIcon}
            end={end}
          />
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
