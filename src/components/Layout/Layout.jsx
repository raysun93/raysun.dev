// src/components/Layout/Layout.jsx
import React from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
