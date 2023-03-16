import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function MainLayout({ children }) {
  return (
    <div className="body-font text-[#1B234A]">
      <div className="">
        <Navbar className="" />
      </div>

      {children}
      {/* <Footer /> */}
    </div>
  );
}

export default MainLayout;
