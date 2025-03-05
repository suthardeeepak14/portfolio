import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div className="bg-gradient-to-br from-gray-900 to-gray-800 text-white min-h-screen">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
