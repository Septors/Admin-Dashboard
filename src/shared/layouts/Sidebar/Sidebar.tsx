import { NavLink } from "react-router-dom";
import SidebarButton from "./SidebarButton";
import DashboardIconActive from "../../../assets/icons/Sidebar/Dashboard-active.png";
import DashboardIconNonActive from "../../../assets/icons/Sidebar/Dashboard-nonActive.png";
import ProductsActive from "../../../assets/icons/Sidebar/Products-active.png";
import ProductsNonActive from "../../../assets/icons/Sidebar/Products-nonActive.png";
import FavoritesActive from "../../../assets/icons/Sidebar/Favorites-active.png";
import FavoritesNonActive from "../../../assets/icons/Sidebar/Favorites-nonActive.png";
import InboxActive from "../../../assets/icons/Sidebar/Inbox-active.png";
import InboxNonActive from "../../../assets/icons/Sidebar/Inbox-nonActive.png";
import OrderListsActive from "../../../assets/icons/Sidebar/OrderLists-active.png"
import OrderListsNonActive from "../../../assets/icons/Sidebar/OrderLists-nonActive.png"
import ProductStockActive from "../../../assets/icons/Sidebar/ProductStock-active.png"
import ProductStockNonActive from "../../../assets/icons/Sidebar/ProductStock-nonActive.png"

const Sidebar = () => {
    return (
        <aside className="w-[240px] h-screen bg-[#FFFFFF]">
            <div className="flex m-[24px_45px_30px_66px] w-[129px] h-[27px]">
                <p className="text-xl font-bold text-[#4880FF] ">Dash</p>
                <p className="text-xl font-bold text-[#202224]">Stack</p>
            </div>
            <nav className="flex flex-col px-[24px]">
                <SidebarButton
                    to="/"
                    text="Dashboard"
                    icon={DashboardIconNonActive}
                    activeIcon={DashboardIconActive}
                />
                <SidebarButton
                    to="/products"
                    text="Products"
                    icon={ProductsNonActive}
                    activeIcon={ProductsActive}
                />
                <SidebarButton
                    to="/orders"
                    text="Order List"
                    icon={OrderListsNonActive}
                    activeIcon={OrderListsActive}
                />
                <SidebarButton
                    to="/stock"
                    text="Product Stock"
                    icon={ProductStockNonActive}
                    activeIcon={ProductStockActive}
                />


            </nav>
        </aside>
    )
}

export default Sidebar