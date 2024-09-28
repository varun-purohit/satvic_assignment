"use client";
import { FaBars } from "react-icons/fa";
import Icon from "../components/Icon";
import Logo from "../components/Logo";
import Nav from "../components/Nav";
import { Sidebar } from "../components/Sidebar";
import { useState } from "react";

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <div
        id="main-header"
        className="fixed top-0 left-0 right-0 z-50 py-6 px-8 bg-white"
      >
        <div className="flex items-center justify-between">
          <Logo className="w-1/3 md:w-auto" />
          <Nav className="hidden md:flex" />
          <div className="flex items-center">
            <div className="hidden md:block">
              <Icon />
            </div>
            <div className="md:hidden">
              <FaBars
                onClick={toggleSidebar}
                className="text-xl cursor-pointer"
              />
            </div>
          </div>
        </div>
      </div>
      <Sidebar isOpen={isSidebarOpen} onClose={toggleSidebar} />
    </>
  );
};

export default Header;
