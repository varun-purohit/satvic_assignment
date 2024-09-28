"use client";
import { FaTimes } from "react-icons/fa";
import { NavItem, navItems } from "./Nav";
import Icon from "./Icon";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export const Sidebar = ({ isOpen, onClose }: SidebarProps) => {
  return (
    <>
      <aside
        className={` inset-0 z-50 fixed top-0 left-0 w-full h-full bg-white transform transition-transform duration-300 ease-in-out md:hidden ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-4 flex justify-end">
          <button onClick={onClose} className="text-2xl">
            <FaTimes />
          </button>
        </div>
        <ul className="p-4 capitalize">
          {navItems.map((item, index) => (
            <li key={index} className="mb-4">
              <NavItem {...item} />
            </li>
          ))}
        </ul>
        <div className="p-4">
          <Icon />
        </div>
      </aside>
    </>
  );
};
