import React from 'react';

const FeaturedCards = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      <div className="relative rounded-lg shadow-lg overflow-hidden">
        <div className="relative">
          <img
            src="https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/pexels-leon-3636001-2-1024x683.jpg"
            alt=""
            className="w-full h-40 object-cover rounded-lg"
          />
          <div className="absolute top-2 right-2 bg-purple-700 text-white text-xs w-[2.3rem] h-[2.3rem] font-bold flex items-center justify-center rounded-full">
            8.1
          </div>
          <div className="absolute bottom-0 left-5 bg-blue-500 text-white text-xs font-semibold px-2 py-1 rounded-md">
            TECHNOLOGY
          </div>
        </div>
        <div className="p-4">
          <h3 className="mt-2 text-lg font-bold">
            A Review of the Venus Optics Argus 18mm f/0.95 MFT APO Lens
          </h3>
          <div className="mt-2 text-sm text-gray-500 flex justify-between items-center">
            <span>Shane Doe &bull; Jan 15, 2021</span>
          </div>
        </div>
      </div>

      <div className="relative rounded-lg shadow-lg overflow-hidden">
        <div className="relative">
          <img
            src="https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/surya-devarakonda-lnEM5jOu-mc-unsplash-1024x683.jpg" 
            alt=""
            className="w-full h-40 object-cover rounded-lg"
          />
          <div className="absolute top-2 right-2 bg-purple-700 text-white text-xs w-[2.3rem] h-[2.3rem] font-bold flex items-center justify-center rounded-full">
            8.9
          </div>
          <div className="absolute bottom-0 left-5 bg-purple-700 text-white text-xs font-semibold px-2 py-1 rounded-md">
            GADGETS
          </div>
        </div>
        <div className="p-4">
          <h3 className="mt-2 text-lg font-bold">
            DJI Avata Review: Immersive FPV Flying For Drone Enthusiasts
          </h3>
          <div className="mt-2 text-sm text-gray-500 flex justify-between items-center">
            <span>Shane Doe &bull; Jan 15, 2021</span>
          </div>
        </div>
      </div>

      <div className="relative rounded-lg shadow-lg overflow-hidden">
        <div className="relative">
          <img
            src="https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/omid-armin-gSZCLsE7ysc-unsplash-1024x683.jpg" 
            alt=""
            className="w-full h-40 object-cover rounded-lg"
          />
          <div className="absolute top-2 right-2 bg-purple-700 text-white text-xs w-[2.3rem] h-[2.3rem] font-bold flex items-center justify-center rounded-full">
            8.9
          </div>
          <div className="absolute bottom-0 left-5 bg-purple-700 text-white text-xs font-semibold px-2 py-1 rounded-md">
            GADGETS
          </div>
        </div>
        <div className="p-4">
          <h3 className="mt-2 text-lg font-bold">
            Bose QuietComfort Earbuds II: Noise-Cancellation Kings Reviewed
          </h3>
          <div className="mt-2 text-sm text-gray-500 flex justify-between items-center">
            <span>Shane Doe &bull; Jan 15, 2021</span>
          </div>
        </div>
      </div>

      <div className="relative rounded-lg shadow-lg overflow-hidden">
        <div className="relative">
          <img
            src="https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/42996726655_0df7830ab6_b-1.jpg" 
            alt=""
            className="w-full h-40 object-cover rounded-lg"
          />
          <div className="absolute top-2 right-2 bg-purple-700 text-white text-xs w-[2.3rem] h-[2.3rem] font-bold flex items-center justify-center rounded-full">
            81%
          </div>
          <div className="absolute bottom-0 left-5 bg-blue-500 text-white text-xs font-semibold px-2 py-1 rounded-md">
            TECHNOLOGY
          </div>
        </div>
        <div className="p-4">
          <h3 className="mt-2 text-lg font-bold">
            AMD Ryzen 9 7900X Review: Zen 4 Has a Pricing Problem
          </h3>
          <div className="mt-2 text-sm text-gray-500 flex justify-between items-center">
            <span>Shane Doe &bull; Jan 15, 2021</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedCards;
