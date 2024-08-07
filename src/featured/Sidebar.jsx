import React from 'react';
import { FaTimes, FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import '../styles/style.scss'; 

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <div className={`fixed top-0 left-0 w-96 bg-black h-full z-50 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform overflow-y-auto sidebar`}>
      <div className="p-4">
        <div className="flex justify-center items-center">
          <div className="flex items-center">
            <img src="https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/techblog-logo-dark@2x.png" alt="" className="w-30 h-10 mr-2" />
          </div>
          <FaTimes className="text-white text-2xl cursor-pointer" onClick={toggle} />
        </div>
        <div className="mt-8 text-center pr-6">
          <div className="border p-6 rounded-lg bg-black h-[25rem]">
            <h3 className="text-white text-xl font-bold w-[12rem] pl-14">Subscribe to Updates</h3>
            <p className="text-gray-400 mt-2">Get the latest creative news from FooBar about art, design, and business.</p>
            <form className="mt-4">
              <input type="email" placeholder="Your email address.." className="w-full p-3 rounded bg-gray-800 text-white placeholder-gray-500 border border-gray-700" />
              <button type="submit" className="w-full bg-blue-700 text-bold text-white p-3 mt-2 rounded">Subscribe</button>
              <div className="flex items-center mt-2 justify-center">
                <input type="checkbox" className="mr-2" />
                <p className="text-gray-400 text-sm">By signing up, you agree to our terms and our <a href="/" className="text-white underline">Privacy Policy</a> agreement.</p>
              </div>
            </form>
          </div>
        </div>
        <div className="mt-8">
          <h3 className="text-white text-lg">WHAT'S HOT</h3>
          <div className="mt-4 space-y-4">
            <a href="/" className="flex items-center text-white">
              <img src="https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/thisisengineering-raeng-a7A9O5htrKs-unsplash-1024x683.jpg" alt="" className="w-24 h-20 mr-4 rounded-lg" />
              <div>
                <p className="text-lg font-semibold leading-tight">Game Development This Week: Save On Essential Tools and More</p>
                <span className="text-gray-400 text-sm block mt-1">Nov 19, 2022</span>
              </div>
            </a>
            <a href="/" className="flex items-center text-white">
              <img src="https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/Depositphotos_242235046_xl-2015-1-1024x582.jpg" alt="" className="w-24 h-20 mr-4 rounded-lg" />
              <div>
                <p className="text-lg font-semibold leading-tight">Is the Hyperloop Doomed? What Elon Musk's Latest Setback Really Means</p>
                <span className="text-gray-400 text-sm block mt-1">Mar 10, 2022</span>
              </div>
            </a>
            <a href="/" className="flex items-center text-white">
              <img src="https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/remy_loz-3vVzdb8KKIw-unsplash-1024x683.jpg" alt="" className="w-24 h-20 mr-4 rounded-lg" />
              <div>
                <p className="text-lg font-semibold leading-tight">The Best Early Black Friday Deals on Gaming Laptops and Accessories</p>
                <span className="text-gray-400 text-sm block mt-1">Mar 10, 2022</span>
              </div>
            </a>
          </div>
        </div>
        <div className="mt-8 flex space-x-4 justify-center">
          <button className="bg-gray-800 p-2 rounded-full">
            <FaFacebookF className="text-white text-lg cursor-pointer" />
          </button>
          <button className="bg-gray-800 p-2 rounded-full">
            <FaTwitter className="text-white text-lg cursor-pointer" />
          </button>
          <button className="bg-gray-800 p-2 rounded-full">
            <FaInstagram className="text-white text-lg cursor-pointer" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
