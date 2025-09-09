"use client"; // cần thiết vì bạn dùng useState, useEffect, gsap

import CircuitBackground from "../components/animations/CircuitBackground";
import MainContent from "../components/animations/mainContent";
import Navbar from "../components/Navbar";
import Portal from "../components/animations/portal";

import "../styles/home.css"
import "../styles/background.css"
export default function Home() {
  return (
    <div className="app">
      <CircuitBackground glow={true} />
      {/* <Navbar /> */}
      <MainContent />
      {/* <Portal /> */}
    </div>
  );
}
