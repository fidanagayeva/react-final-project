import React from 'react';

const Featured = () => {
  return (
    <div className="max-w-7xl mx-auto p-5">
      <div className="flex items-center justify-center mb-6">
        <div className="flex-1 h-px bg-gray-300"></div>
        <h2 className="mx-2 text-[1.7rem] font-bold">Featured Reviews</h2>
        <div className="flex-1 h-px bg-gray-300"></div>
      </div>
      <div className="flex flex-col md:flex-row bg-gray-900 text-white rounded-lg shadow-lg overflow-hidden h-[25rem]">
        <div className="flex flex-col justify-center p-6 flex-1">
          <span className="bg-pink-600 text-white font-semibold px-3 py-1 rounded-lg text-sm w-[5rem] inline-block mb-3">Gaming</span>
          <h3 className="text-[1.7rem] font-bold mb-2 leading-snug">Pico 4 Review: Should You Actually Buy One Instead Of Quest 2?</h3>
          <div className="flex items-center mb-3">
            <img src="https://cheerup.theme-sphere.com/wp-content/uploads/2016/05/bella-doe.jpg" alt="" className="w-8 h-8 rounded-full mr-2" />
            <div className="flex items-center space-x-1">
              <p className="font-semibold text-sm">Shane Doe</p>
              <span className="text-gray-400 text-xs">· Jan 15, 2021</span>
            </div>
          </div>
          <p className="text-gray-400 text-sm font-bold">To understand the new smart watches and other pro devices of recent focus, we should look to...</p>
        </div>
        <div className="relative flex-1">
          <img src="https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/woman-in-3d-virtual-reality-glasses_t20_WQVvL4.jpg" alt="" className="w-full h-full object-cover" />
          <div className="absolute top-4 right-4 bg-blue-900 text-white font-bold py-1 px-3 w-[3rem] h-[3rem] rounded-full flex items-center justify-center">85%</div>
        </div>
      </div>
    </div>
  );
}

export default Featured;
