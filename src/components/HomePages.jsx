import React from 'react';

const HomePages = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-wrap -mx-4">
        <div className="w-full lg:w-2/3 px-4 mb-4 relative">
          <div className="bg-white rounded-lg shadow-md overflow-hidden mb-4 relative">
            <div className="overflow-hidden relative group">
              <img
                src="https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/Depositphotos_29247013_xl-2015-2-1024x683.jpg"
                alt="Save $25 on Philips Wired Headphone For A Great Sounding Over-Ear Headphone"
                className="w-full h-[32rem] object-cover transform group-hover:scale-110 transition-transform duration-300 ease-in-out"
              />
              <div className="absolute bottom-0 left-0 p-4 bg-gradient-to-t from-black to-transparent w-full">
                <span className="inline-block bg-purple-600 text-white text-xs px-2 py-1 rounded">
                  Gadgets
                </span>
                <h2 className="text-2xl font-bold mt-2 text-white bg-black bg-opacity-75 p-2">
                  Save $25 on Philips Wired Headphone For A Great Sounding Over-Ear Headphone
                </h2>
                <div className="flex items-center text-gray-300 text-sm mt-2">
                  <img
                    src="https://cheerup.theme-sphere.com/wp-content/uploads/2016/05/bella-doe.jpg"
                    alt="Shane Doe"
                    className="w-6 h-6 rounded-full mr-2"
                  />
                  <span>Shane Doe</span>
                  <span className="mx-2">*</span>
                  <span>Jan 12, 2020</span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap -mx-4">
            <div className="w-full md:w-1/2 px-4 mb-4 relative">
              <div className="bg-white rounded-lg shadow-md overflow-hidden relative">
                <img
                  src="https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/daniel-korpai-seLBnDRB6_M-unsplash-1-1-819x1024.jpg"
                  alt="Tablet PC Market to Witness Exponential Growth by 2028, Sources Say"
                  className="w-full h-[15rem] rounded-lg object-cover"
                />
                <div className="absolute bottom-[8.27rem] left-0 p-2">
                  <span className="inline-block bg-blue-600 text-white text-xs px-2 py-1 rounded">
                    Technology
                  </span>
                </div>
                <div className="p-4">
                  <h2 className="text-lg font-bold mt-2">
                    Tablet PC Market to Witness Exponential Growth by 2028, Sources Say
                  </h2>
                  <div className="flex items-center text-gray-500 text-sm mt-2">
                    <span className="text-black">Shane Doe</span>
                    <span className="mx-2">*</span>
                    <span>Jan 12, 2020</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full md:w-1/2 px-4 mb-4 relative">
              <div className="bg-white rounded-lg shadow-md overflow-hidden relative">
                <img
                  src="https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/Depositphotos_245244020_xl-2015-2-1024x756.jpg"
                  alt="Microsoft Co-Founder Bill Gates Visits EU, Steers Clean Energy Talks"
                  className="w-full h-[15rem] rounded-lg object-cover"
                />
                <div className="absolute bottom-[8.27rem] left-0 p-2">
                  <span className="inline-block bg-blue-600 text-white text-xs px-2 py-1 rounded">
                    Technology
                  </span>
                </div>
                <div className="p-4">
                  <h2 className="text-lg font-bold mt-2">
                    Microsoft Co-Founder Bill Gates Visits EU, Steers Clean Energy Talks
                  </h2>
                  <div className="flex items-center text-gray-500 text-sm mt-2">
                    <span className="text-black">Shane Doe</span>
                    <span className="mx-2">*</span>
                    <span>Jan 11, 2020</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-1/3 px-4 mb-4">
          <h2 className="text-xl font-bold mb-4">People's Favorite</h2>
          <div className="pl-4">
            <div className="flex items-start mb-8">
              <div>
                <span className="text-sm text-blue-600 font-bold">Technology</span>
                <h3 className="text-lg font-bold mt-1">
                  Schools, Parents Disagree over Bans on Student Mobile Phones
                </h3>
                <div className="flex items-center text-gray-500 text-sm mt-2">
                  <span className="text-black">Shane Doe</span>
                  <span className="mx-2">*</span>
                  <span>6 Mins Read</span>
                </div>
              </div>
              <img
                src="https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/youssef-sarhan-tze1kKj7Lgg-unsplash-1-1024x652.jpg"
                alt="Schools, Parents Disagree over Bans on Student Mobile Phones"
                className="w-20 h-20 rounded-full ml-4"
              />
            </div>

            <div className="flex items-start mb-8">
              <div>
                <span className="text-sm text-blue-600 font-bold">Gadgets</span>
                <h3 className="text-lg font-bold mt-1">
                  PC Game Deals: Stealth Classic to Grab, Fresh VR Bundle & More
                </h3>
                <div className="flex items-center text-gray-500 text-sm mt-2">
                  <span className="text-black">Shane Doe</span>
                  <span className="mx-2">*</span>
                  <span>6 Mins Read</span>
                </div>
              </div>
              <img
                src="https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/pexels-sound-on-3761262-1-1024x607.jpg"
                alt="PC Game Deals: Stealth Classic to Grab, Fresh VR Bundle & More"
                className="w-20 h-20 rounded-full ml-4"
              />
            </div>

            <div className="flex items-start mb-8">
              <div>
                <span className="text-sm text-blue-600 font-bold">Technology</span>
                <h3 className="text-lg font-bold mt-1">
                  Electric Car Owners to Pay Road Tax from 2025, Hunt Announces
                </h3>
                <div className="flex items-center text-gray-500 text-sm mt-2">
                  <span className="text-black">Shane Doe</span>
                  <span className="mx-2">*</span>
                  <span>6 Mins Read</span>
                </div>
              </div>
              <img
                src="https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/Depositphotos_273724454_xl-2015-1024x683.jpg"
                alt="Electric Car Owners to Pay Road Tax from 2025, Hunt Announces"
                className="w-20 h-20 rounded-full ml-4"
              />
            </div>

            <div className="flex items-start mb-8">
              <div>
                <span className="text-sm text-blue-600 font-bold">Phones</span>
                <h3 className="text-lg font-bold mt-1">
                  Tackling Smartphone Addiction: Village Bans Mobiles for Minors
                </h3>
                <div className="flex items-center text-gray-500 text-sm mt-2">
                  <span className="text-black">Shane Doe</span>
                  <span className="mx-2">*</span>
                  <span>6 Mins Read</span>
                </div>
              </div>
              <img
                src="https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/Depositphotos_378099058_xl-2015-1-1024x615.jpg"
                alt="Tackling Smartphone Addiction: Village Bans Mobiles for Minors"
                className="w-20 h-20 rounded-full ml-4"
              />
            </div>

            <div className="flex items-start mb-8">
              <div>
                <span className="text-sm text-blue-600 font-bold">Technology</span>
                <h3 className="text-lg font-bold mt-1">
                  Epic Games Store Gives Away One of The Best VR Games
                </h3>
                <div className="flex items-center text-gray-500 text-sm mt-2">
                  <span className="text-black">Shane Doe</span>
                  <span className="mx-2">*</span>
                  <span>6 Mins Read</span>
                </div>
              </div>
              <img
                src="https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/Depositphotos_286775054_xl-2015-1-1024x445.jpg"
                alt="Epic Games Store Gives Away One of The Best VR Games"
                className="w-20 h-20 rounded-full ml-4"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePages;
