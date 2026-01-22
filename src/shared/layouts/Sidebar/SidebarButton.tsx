import { NavLink } from "react-router-dom";
import { useState } from "react";

interface SidebarButtonProps {
  to: string;
  text: string;
  icon: string;
  activeIcon?: string;
}

const SidebarButton = ({ to, text, icon, activeIcon }: SidebarButtonProps) => {
  const [hovered, setHovered] = useState(false)

  return (
    <NavLink
      to={to}>
      {({ isActive }) => (
        <div
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          className={`flex items-center gap-[16px] py-[16px] pr-[79px] pl-[16px] rounded-md font-medium transition-colors duration-200 easy-in-out
        ${isActive ? "bg-[#4880FF] text-white" : "text-[#202224] hover:bg-[#4880FF] hover:text-white"}
      `}
        >
          <img
            src={isActive ? activeIcon || icon : hovered && activeIcon ? activeIcon : icon}
            alt={text}
            className="w-[22px] h-[24px]"
          />
          <span className="whitespace-nowrap text-[14px]">{text}</span>
        </div>
      )}
    </NavLink>
  )
}
export default SidebarButton;