import { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "../sections/Header";

export default function Base() {
  const [isChainListCollapsed, setIsChainListCollapsed] = useState(false);
  const toggleisChainListCollapsed = () =>
    setIsChainListCollapsed((isChainListCollapsed) => !isChainListCollapsed);
  const [isMobileMenuCollapsed, setIsMobileMenuCollapsed] = useState(false);
  const toggleIsMobileMenuCollapsed = () =>
    setIsMobileMenuCollapsed((isMobileMenuCollapsed) => !isMobileMenuCollapsed);

  return (
    <div className="app">
      <Header
        isChainListCollapsed={isChainListCollapsed}
        toggleisChainListCollapsed={toggleisChainListCollapsed}
        toggleIsMobileMenuCollapsed={toggleIsMobileMenuCollapsed}
        isMobileMenuCollapsed={isMobileMenuCollapsed}
      />
      <main className="app-main">
        <div className="wrapper">
          <div className="page">
            <Outlet />
          </div>
        </div>
      </main>
    </div>
  );
}
