"use client";
import Sidebar from "@/components/Sidebar";
import React, { useState, useEffect } from "react";
import Summary from "@/components/Summary";
import Registrations from "@/components/Registrations";
import Table from "@/components/Table";
import MobileSidebar from "@/components/MobileSidebar";
import Navbar from "@/components/MobileNavbar";

export default function Home() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleToggleCollapse = () => {
    setIsCollapsed((prev) => !prev);
  };

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex flex-row sm:flex-col items-start w-full sm:gap-0.5 dark:bg-[#383544]">
      {isMobile ? (
        <MobileSidebar isOpen={isOpen} toggleNav={toggleNav} />
      ) : (
        <Sidebar
          isCollapsed={isCollapsed}
          onToggleCollapse={handleToggleCollapse}
        />
      )}
      <div
        className={`w-[83.33vw] transition-all duration-300 pl-7 gap-6 mt-10 flex flex-col sm:w-full sm:pt-2 sm:gap-[21px] sm:ml-0 sm:pl-0 sm:mt-2 ${
          isCollapsed ? "ml-[4.44vw]" : "ml-[16.67vw]"
        } ${isOpen ? "opacity-30 pointer-events-none" : ""}`}
      >
        <h1 className="font-inter font-normal text-[22px] leading-[20px] sm:px-5 dark:text-white">
          Welcome! here&apos;s your summary
        </h1>
        <Summary />
        <Registrations />
        <Table />
        {isMobile ? <Navbar /> : ""}
      </div>
    </div>
  );
}
