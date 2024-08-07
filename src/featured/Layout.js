import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Sidebar from './Sidebar';

const Layout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = React.useState(false);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  return (
    <>
      <Header toggleSidebar={toggleSidebar} />
      <Sidebar isOpen={sidebarOpen} toggle={toggleSidebar} />
      <main className="container mx-auto px-4">{children}</main>
      <Footer />
    </>
  );
}

export default Layout;
