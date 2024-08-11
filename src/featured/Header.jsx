import React from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes, FaMoon, FaFacebookF, FaTwitter, FaInstagram, FaPinterest, FaVimeoV, FaChevronDown, FaSearch } from 'react-icons/fa';
import '../styles/style.scss';

const Header = ({ toggleSidebar, sidebar }) => {
  return (
    <header className="bg-white shadow-md">
      <div className="bg-black text-white py-2 w-full fixed top-0 left-0 z-20">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex space-x-4">
            <Link to="/" className="hover:text-gray-400 transition duration-300">Start Here</Link>
            <Link to="/" className="hover:text-gray-400 transition duration-300">Demos</Link>
            <Link to="/" className="hover:text-gray-400 transition duration-300">Contact</Link>
            <Link to="/" className="hover:text-gray-400 transition duration-300">Buy Now</Link>
          </div>
          <div className="hidden sm:flex space-x-4">
            <FaFacebookF className="hover:text-gray-400 cursor-pointer transition duration-300 text-sm" />
            <FaTwitter className="hover:text-gray-400 cursor-pointer transition duration-300 text-sm" />
            <FaInstagram className="hover:text-gray-400 cursor-pointer transition duration-300 text-sm" />
            <FaPinterest className="hover:text-gray-400 cursor-pointer transition duration-300 text-sm" />
            <FaVimeoV className="hover:text-gray-400 cursor-pointer transition duration-300 text-sm" />
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 py-2 flex justify-between items-center flex-wrap sm:flex-nowrap" style={{ marginTop: '3rem' }}>
        <div className="flex items-center">
          <FaBars className="text-lg cursor-pointer mr-4 sm:mr-0" onClick={toggleSidebar} />
          <img src="https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/1techblog-logo.png" alt="" className="w-30 h-10 mx-2" />
        </div>
        <nav className="hidden sm:flex space-x-4">
          <Link to="/" className="font-bold">Home</Link>
          <div className="relative group">
            <Link to="/" className="hover:text-blue-500 transition duration-300 flex items-center font-bold">Features <FaChevronDown className="ml-1 text-blue-500 text-sm" /></Link>
            <div className="absolute left-0 w-[13rem] bg-white shadow-md hidden group-hover:block z-30">
              <Link to="/" className="block px-4 py-2 hover:bg-gray-200 transition duration-300">50+ Unique Demos</Link>
              <Link to="/" className="block px-4 py-2 hover:bg-gray-200 transition duration-300">Post Styles</Link>
              <Link to="/" className="block px-4 py-2 hover:bg-gray-200 transition duration-300">Category Layouts</Link>
              <Link to="/" className="block px-4 py-2 hover:bg-gray-200 transition duration-300">Header Styles</Link>
              <Link to="/" className="block px-4 py-2 hover:bg-gray-200 transition duration-300">Homepage Blocks</Link>
              <Link to="/" className="block px-4 py-2 hover:bg-gray-200 transition duration-300">Featured Grids / Sliders</Link>
              <Link to="/" className="block px-4 py-2 hover:bg-gray-200 transition duration-300">12+ Premium Widgets</Link>
              <Link to="/" className="block px-4 py-2 hover:bg-gray-200 transition duration-300">Review Posts</Link>
              <Link to="/" className="block px-4 py-2 hover:bg-gray-200 transition duration-300">Pages & Templates</Link>
              <Link to="/" className="block px-4 py-2 hover:bg-gray-200 transition duration-300">Autoload Next Post</Link>
              <Link to="/" className="block px-4 py-2 hover:bg-gray-200 transition duration-300">Gutenberg Styles</Link>
              <Link to="/" className="block px-4 py-2 hover:bg-gray-200 transition duration-300">Advertisements</Link>
              <Link to="/" className="block px-4 py-2 hover:bg-gray-200 transition duration-300">Shop / WooCommerce</Link>
              <Link to="/" className="block px-4 py-2 hover:bg-gray-200 transition duration-300">bbPress Forums</Link>
              <Link to="/" className="block px-4 py-2 hover:bg-gray-200 transition duration-300">Google AMP</Link>
              <Link to="/" className="block px-4 py-2 hover:bg-gray-200 transition duration-300">See More Features</Link>
            </div>
          </div>
          <div className="relative group">
            <Link to="/" className="flex items-center font-bold">Technology <FaChevronDown className="ml-1 text-blue-500 text-sm" /></Link>
          </div>
          <Link to="/gadgets" className="font-bold">Gadgets</Link>
          <Link to="/" className="font-bold">Phones</Link>
          <Link to="/" className="font-bold">Buy Theme</Link>
        </nav>
        <div className="flex items-center space-x-4">
          <button className="bg-blue-500 text-white px-4 py-2 rounded transition duration-300 hover:bg-black font-bold hidden sm:block">Subscribe</button>
          <FaMoon className="text-lg cursor-pointer" />
          <FaSearch className="text-lg cursor-pointer" />
          <FaTimes className={`text-lg cursor-pointer ${sidebar ? 'block' : 'hidden'}`} onClick={toggleSidebar} />
        </div>
      </div>
    </header>
  );
}

export default Header;
