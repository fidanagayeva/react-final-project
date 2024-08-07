import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaPinterest } from 'react-icons/fa';
import '../styles/style.scss';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex justify-between">
          <div>
            <h2 className="text-lg font-bold">Most Popular</h2>
            <ul>
              <li className="flex items-center my-4">
                <img src="https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2021/01/kamil-s-SuPAbuuK7f4-unsplash-1024x683.jpg" alt="Popular Article 1" className="w-16 h-16 mr-4 rounded-lg" />
                <div>
                  <a href="#" className="block text-sm font-bold leading-tight">Popular New Xbox Game Pass Game Being Review Bombed With “Os”</a>
                  <span className="text-gray-400 text-xs block">Jan 14, 2021</span>
                  <span className="text-red-500 text-xs block">7,792 Views</span>
                </div>
              </li>
              <li className="flex items-center my-4">
                <img src="https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/Depositphotos_242235046_xl-2015-1-1024x582.jpg" alt="Popular Article 2" className="w-16 h-16 mr-4 rounded-lg" />
                <div>
                  <a href="#" className="block text-sm font-bold leading-tight">Samsung is Developing Bright MicroLED on Displays for AR Headsets</a>
                  <span className="text-gray-400 text-xs block">Jan 14, 2021</span>
                  <span className="text-red-500 text-xs block">6,914 Views</span>
                </div>
              </li>
              <li className="flex items-center my-4">
                <img src="https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/remy_loz-3vVzdb8KKIw-unsplash-1024x683.jpg" alt="Popular Article 3" className="w-16 h-16 mr-4 rounded-lg" />
                <div>
                  <a href="#" className="block text-sm font-bold leading-tight">Warner Bros. Games Announces Mortal Kombat: Onslaught</a>
                  <span className="text-gray-400 text-xs block">Jan 14, 2021</span>
                  <span className="text-red-500 text-xs block">4,418 Views</span>
                </div>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-lg font-bold">Our Picks</h2>
            <ul>
              <li className="flex items-center my-4">
                <img src="https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/thisisengineering-raeng-a7A9O5htrKs-unsplash-1024x683.jpg" alt="Pick Article 1" className="w-16 h-16 mr-4 rounded-lg" />
                <div>
                  <a href="#" className="block text-sm font-bold leading-tight">Game Development This Week: Save On Essential Tools and More</a>
                  <span className="text-gray-400 text-xs block">Nov 19, 2022</span>
                </div>
              </li>
              <li className="flex items-center my-4">
                <img src="https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/Depositphotos_242235046_xl-2015-1-1024x582.jpg" alt="Pick Article 2" className="w-16 h-16 mr-4 rounded-lg" />
                <div>
                  <a href="#" className="block text-sm font-bold leading-tight">Is the Hyperloop Doomed? What Elon Musk's Latest Setback Really Means</a>
                  <span className="text-gray-400 text-xs block">Mar 10, 2022</span>
                </div>
              </li>
              <li className="flex items-center my-4">
                <img src="https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/remy_loz-3vVzdb8KKIw-unsplash-1024x683.jpg" alt="Pick Article 3" className="w-16 h-16 mr-4 rounded-lg" />
                <div>
                  <a href="#" className="block text-sm font-bold leading-tight">The Best Early Black Friday Deals on Gaming Laptops and Accessories</a>
                  <span className="text-gray-400 text-xs block">Mar 10, 2022</span>
                </div>
              </li>
            </ul>
          </div>
          <div className="w-1/3">
            <h2 className="text-lg font-bold">Subscribe to Updates</h2>
            <form className="bg-black border p-6 rounded-lg mt-4">
              <p className="text-gray-400 mb-4">Get the latest creative news from FooBar about art, design and business.</p>
              <input type="email" placeholder="Your email address.." className="w-full p-3 rounded bg-gray-800 text-white placeholder-gray-500 border border-gray-700 mb-2" />
              <button type="submit" className="w-full bg-violet-500 text-bold text-white p-3 rounded">SUBSCRIBE</button>
              <div className="flex items-center mt-2">
                <input type="checkbox" className="mr-2" />
                <p className="text-gray-400 text-xs">By signing up, you agree to the our terms and our <a href="#" className="text-white underline">Privacy Policy</a> agreement.</p>
              </div>
            </form>
          </div>
        </div>
        <div className="flex justify-center mt-8 space-x-4">
          <button className="bg-gray-800 p-2 rounded-full">
            <FaFacebook className="text-white text-lg cursor-pointer" />
          </button>
          <button className="bg-gray-800 p-2 rounded-full">
            <FaTwitter className="text-white text-lg cursor-pointer" />
          </button>
          <button className="bg-gray-800 p-2 rounded-full">
            <FaInstagram className="text-white text-lg cursor-pointer" />
          </button>
          <button className="bg-gray-800 p-2 rounded-full">
            <FaPinterest className="text-white text-lg cursor-pointer" />
          </button>
        </div>
        <div className="text-center mt-8">
          <div className="flex justify-center space-x-4">
            <a href="#" className="hover:underline">Home</a>
            <a href="#" className="hover:underline">Phones</a>
            <a href="#" className="hover:underline">About</a>
            <a href="#" className="hover:underline">Contact</a>
          </div>
          <p className="mt-4 text-gray-400">&copy; 2024 ThemeSphere. Designed by ThemeSphere.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
