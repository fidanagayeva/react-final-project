import React from 'react';

const Sponsored = () => {
  return (
    <div className="sponsored-container mx-auto p-4 my-4">
      <div className="text-center mb-2 text-gray-500 text-sm font-bold">Sponsored</div>
      <div className="relative">
        <img
          src="https://smartmag.theme-sphere.com/tech-drop/wp-content/uploads/sites/33/2022/10/Wide-Top.jpg" 
          alt="Sponsored"
          className="w-full h-auto object-cover pl-4 pr-4 sm:pl-[6.5rem] sm:pr-[6.5rem]"
        />
      </div>
    </div>
  );
};

export default Sponsored;
