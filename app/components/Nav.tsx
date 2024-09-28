import React from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

interface NavItem {
  label: string;
  hasDropdown: boolean;
}

interface NavProps {
  className?: string;
}

export const navItems: NavItem[] = [
  { label: "home", hasDropdown: false },
  { label: "about us", hasDropdown: false },
  { label: "workshops", hasDropdown: false },
  { label: "foodbooks", hasDropdown: true },
  { label: "products", hasDropdown: true },
  { label: "videos", hasDropdown: false },
  { label: "healing stories", hasDropdown: true },
  { label: "workshop login", hasDropdown: false },
];

export const NavItem = ({ label, hasDropdown }: NavItem): JSX.Element => {
  return (
    <li
      className={`${
        hasDropdown ? "flex items-center " : ""
      }hover:text-[#8c7c6e] cursor-pointer`}
    >
      {label}
      {hasDropdown && (
        <MdOutlineKeyboardArrowDown className="text-2xl mx-1 hover:text-[#8c7c6e] cursor-pointer" />
      )}
    </li>
  );
};

const Nav = ({ className }: NavProps): JSX.Element => {
  return (
    <div className={`${className} uppercase text-sm cursor-pointer`}>
      <ul className="flex justify-center items-center gap-4 flex-wrap">
        {navItems.map((item, index) => (
          <NavItem key={index} {...item} />
        ))}
      </ul>
    </div>
  );
};

export default Nav;
