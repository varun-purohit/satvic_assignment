"use client";
import { useState, useEffect } from "react";
import Header from "./pages/Header";
import Hero from "./pages/Hero";

export default function Home() {
  const [headerHeight, setHeaderHeight] = useState(0);

  useEffect(() => {
    const updateHeaderHeight = () => {
      const header = document.getElementById("main-header");
      if (header) {
        setHeaderHeight(header.offsetHeight);
      }
    };

    updateHeaderHeight();
    window.addEventListener("resize", updateHeaderHeight);

    return () => window.removeEventListener("resize", updateHeaderHeight);
  }, []);

  return (
    <>
      <Header />
      <Hero headerHeight={headerHeight} />
    </>
  );
}
