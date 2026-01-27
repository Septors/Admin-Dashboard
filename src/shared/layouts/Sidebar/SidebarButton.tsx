// SidebarButton.tsx
import { NavLink } from "react-router-dom";
import { useState } from "react";

interface SidebarButtonProps {
  to: string;
  text: string;
  icon?: string;
  activeIcon?: string;
  end?: boolean;
}

const SidebarButton = ({ to, text, icon, activeIcon, end = false }: SidebarButtonProps) => {
  const [hovered, setHovered] = useState(false);

  return (
    <NavLink to={to} end={end}>
      {({ isActive }) => (
        <div
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          className={`flex items-center gap-4 py-4 px-4 rounded-md font-medium transition-colors duration-200
            ${isActive ? "bg-[#4880FF] text-white" : "text-[#202224] hover:bg-[#4880FF] hover:text-white"}`}
        >
          <img
            src={isActive ? activeIcon || icon : hovered && activeIcon ? activeIcon : icon}
            alt={text}
            className="w-5 h-6"
          />
          <span className="whitespace-nowrap text-sm">{text}</span>
        </div>
      )}
    </NavLink>
  );
};

export default SidebarButton;
