import React, { useState } from 'react';

const GadgetsCards = () => {
    const [currentPage, setCurrentPage] = useState(1);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    return (
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-4 gap-9 py-8">
            <div className="col-span-1 lg:col-span-3">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-7">
                    {currentPage === 1 && (
                        <>
                            <div className="relative rounded-lg shadow-lg overflow-hidden w-full sm:w-80 md:w-96">
                                <div className="relative">
                                    <img
                                        src="https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/surya-devarakonda-lnEM5jOu-mc-unsplash-1024x683.jpg"
                                        alt=""
                                        className="w-full h-56 object-cover rounded-lg"
                                    />
                                    <div className="absolute top-2 right-2 bg-purple-700 text-white text-xs w-[2.3rem] h-[2.3rem] font-bold flex items-center justify-center rounded-full">
                                        8.7
                                    </div>
                                    <div className="absolute top-0 left-0 bg-purple-700 text-white text-xs font-semibold px-2 py-1 rounded-md">
                                        GADGETS
                                    </div>
                                </div>
                                <div className="p-4">
                                    <h3 className="mt-2 text-sm sm:text-base font-bold leading-tight">
                                        DJI Avata Review: Immersive FPV Flying For Drone Enthusiasts
                                    </h3>
                                    <div className="mt-2 text-xs flex items-center">
                                        <span className='text-black'>Shane Doe &bull; </span>
                                        <span className='text-gray-500'>Jan 15, 2021</span>
                                    </div>
                                    <p className="mt-2 text-xs sm:text-sm text-gray-600">
                                        To understand the new smart watched and other pro devices of recent focus, we should look to Silicon Valley and...
                                    </p>
                                </div>
                            </div>

                            <div className="relative rounded-lg shadow-lg overflow-hidden w-full sm:w-80 md:w-96">
                                <div className="relative">
                                    <img
                                        src="https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/omid-armin-gSZCLsE7ysc-unsplash-1024x683.jpg"
                                        alt=""
                                        className="w-full h-56 object-cover rounded-lg"
                                    />
                                    <div className="absolute top-2 right-2 bg-purple-700 text-white text-xs w-[2.3rem] h-[2.3rem] font-bold flex items-center justify-center rounded-full">
                                        8.7
                                    </div>
                                    <div className="absolute top-0 left-0 bg-purple-700 text-white text-xs font-semibold px-2 py-1 rounded-md">
                                        GADGETS
                                    </div>
                                </div>
                                <div className="p-4">
                                    <h3 className="mt-2 text-sm sm:text-base font-bold leading-tight">
                                        DJI Avata Review: Immersive FPV Flying For Drone Enthusiasts
                                    </h3>
                                    <div className="mt-2 text-xs flex items-center">
                                        <span className='text-black'>Shane Doe &bull; </span>
                                        <span className='text-gray-500'>Jan 15, 2021</span>
                                    </div>
                                    <p className="mt-2 text-xs sm:text-sm text-gray-600">
                                        To understand the new smart watched and other pro devices of recent focus, we should look to Silicon Valley and...
                                    </p>
                                </div>
                            </div>

                            <div className="relative rounded-lg shadow-lg overflow-hidden w-full sm:w-80 md:w-96">
                                <div className="relative">
                                    <img
                                        src="https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2021/01/muhammad-faiz-zulkeflee-p-yGtLN-GKA-unsplash-1-1024x1024.jpg"
                                        alt=""
                                        className="w-full h-56 object-cover rounded-lg"
                                    />
                                    <div className="absolute top-2 right-2 bg-purple-700 text-white text-xs w-[2.3rem] h-[2.3rem] font-bold flex items-center justify-center rounded-full">
                                        8.7
                                    </div>
                                    <div className="absolute top-0 left-0 bg-purple-700 text-white text-xs font-semibold px-2 py-1 rounded-md">
                                        GADGETS
                                    </div>
                                </div>
                                <div className="p-4">
                                    <h3 className="mt-2 text-sm sm:text-base font-bold leading-tight">
                                        Thousands Of PC Games Discounted In New Black Friday Sale
                                    </h3>
                                    <div className="mt-2 text-xs flex items-center">
                                        <span className='text-black'>Shane Doe &bull; </span>
                                        <span className='text-gray-500'>Jan 15, 2021</span>
                                    </div>
                                    <p className="mt-2 text-xs sm:text-sm text-gray-600">
                                        To understand the new smart watched and other pro devices of recent focus, we should look to Silicon Valley and...
                                    </p>
                                </div>
                            </div>

                            <div className="relative rounded-lg shadow-lg overflow-hidden w-full sm:w-80 md:w-96">
                                <div className="relative">
                                    <img
                                        src="https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2021/01/blaz-erzetic-ChSgE4K1iGY-unsplash-1024x683.jpg"
                                        alt=""
                                        className="w-full h-56 object-cover rounded-lg"
                                    />
                                    <div className="absolute top-2 right-2 bg-purple-700 text-white text-xs w-[2.3rem] h-[2.3rem] font-bold flex items-center justify-center rounded-full">
                                        8.7
                                    </div>
                                    <div className="absolute top-0 left-0 bg-purple-700 text-white text-xs font-semibold px-2 py-1 rounded-md">
                                        GADGETS
                                    </div>
                                </div>
                                <div className="p-4">
                                    <h3 className="mt-2 text-sm sm:text-base font-bold leading-tight">
                                        Could Solar-Powered Headphones Be The Next Must-Have?
                                    </h3>
                                    <div className="mt-2 text-xs flex items-center">
                                        <span className='text-black'>Shane Doe &bull; </span>
                                        <span className='text-gray-500'>Jan 15, 2021</span>
                                    </div>
                                    <p className="mt-2 text-xs sm:text-sm text-gray-600">
                                        To understand the new smart watched and other pro devices of recent focus, we should look to Silicon Valley and...
                                    </p>
                                </div>
                            </div>

                            <div className="relative rounded-lg shadow-lg overflow-hidden w-full sm:w-80 md:w-96">
                                <div className="relative">
                                    <img
                                        src="https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2021/01/pexels-dids-3657268-1024x683.jpg"
                                        alt=""
                                        className="w-full h-56 object-cover rounded-lg"
                                    />
                                    <div className="absolute top-2 right-2 bg-purple-700 text-white text-xs w-[2.3rem] h-[2.3rem] font-bold flex items-center justify-center rounded-full">
                                        8.7
                                    </div>
                                    <div className="absolute top-0 left-0 bg-purple-700 text-white text-xs font-semibold px-2 py-1 rounded-md">
                                        GADGETS
                                    </div>
                                </div>
                                <div className="p-4">
                                    <h3 className="mt-2 text-sm sm:text-base font-bold leading-tight">
                                        Take Your Photography to The Next Level with This Drone
                                    </h3>
                                    <div className="mt-2 text-xs flex items-center">
                                        <span className='text-black'>Shane Doe &bull; </span>
                                        <span className='text-gray-500'>Jan 15, 2021</span>
                                    </div>
                                    <p className="mt-2 text-xs sm:text-sm text-gray-600">
                                        To understand the new smart watched and other pro devices of recent focus, we should look to Silicon Valley and...
                                    </p>
                                </div>
                            </div>

                            <div className="relative rounded-lg shadow-lg overflow-hidden w-full sm:w-80 md:w-96">
                                <div className="relative">
                                    <img
                                        src="https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/Depositphotos_286775054_xl-2015-1-1024x445.jpg"
                                        alt=""
                                        className="w-full h-56 object-cover rounded-lg"
                                    />
                                    <div className="absolute top-2 right-2 bg-purple-700 text-white text-xs w-[2.3rem] h-[2.3rem] font-bold flex items-center justify-center rounded-full">
                                        8.7
                                    </div>
                                    <div className="absolute top-0 left-0 bg-purple-700 text-white text-xs font-semibold px-2 py-1 rounded-md">
                                        GADGETS
                                    </div>
                                </div>
                                <div className="p-4">
                                    <h3 className="mt-2 text-sm sm:text-base font-bold leading-tight">
                                        Oculus Founder Makes a VR Headset That Can Literally Kill You
                                    </h3>
                                    <div className="mt-2 text-xs flex items-center">
                                        <span className='text-black'>Shane Doe &bull; </span>
                                        <span className='text-gray-500'>Jan 15, 2021</span>
                                    </div>
                                    <p className="mt-2 text-xs sm:text-sm text-gray-600">
                                        To understand the new smart watched and other pro devices of recent focus, we should look to Silicon Valley and...
                                    </p>
                                </div>
                            </div>

                            <div className="relative rounded-lg shadow-lg overflow-hidden w-full sm:w-80 md:w-96">
                                <div className="relative">
                                    <img
                                        src="https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/Depositphotos_422797426_xl-2015-1-1024x681.jpg"
                                        alt=""
                                        className="w-full h-56 object-cover rounded-lg"
                                    />
                                    <div className="absolute top-2 right-2 bg-purple-700 text-white text-xs w-[2.3rem] h-[2.3rem] font-bold flex items-center justify-center rounded-full">
                                        8.7
                                    </div>
                                    <div className="absolute top-0 left-0 bg-purple-700 text-white text-xs font-semibold px-2 py-1 rounded-md">
                                        GADGETS
                                    </div>
                                </div>
                                <div className="p-4">
                                    <h3 className="mt-2 text-sm sm:text-base font-bold leading-tight">
                                        Braun Series 7 Electric Shaver Review: Quality at a Good Price
                                    </h3>
                                    <div className="mt-2 text-xs flex items-center">
                                        <span className='text-black'>Shane Doe &bull; </span>
                                        <span className='text-gray-500'>Jan 15, 2021</span>
                                    </div>
                                    <p className="mt-2 text-xs sm:text-sm text-gray-600">
                                        To understand the new smart watched and other pro devices of recent focus, we should look to Silicon Valley and...
                                    </p>
                                </div>
                            </div>

                            <div className="relative rounded-lg shadow-lg overflow-hidden w-full sm:w-80 md:w-96">
                                <div className="relative">
                                    <img
                                        src="https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/Depositphotos_443469058_xl-2015-1-1024x693.jpg"
                                        alt=""
                                        className="w-full h-56 object-cover rounded-lg"
                                    />
                                    <div className="absolute top-2 right-2 bg-purple-700 text-white text-xs w-[2.3rem] h-[2.3rem] font-bold flex items-center justify-center rounded-full">
                                        8.7
                                    </div>
                                    <div className="absolute top-0 left-0 bg-purple-700 text-white text-xs font-semibold px-2 py-1 rounded-md">
                                        GADGETS
                                    </div>
                                </div>
                                <div className="p-4">
                                    <h3 className="mt-2 text-sm sm:text-base font-bold leading-tight">
                                        Google Pixel 7, iPhone 14 Compared: Check Out 5 Major Differences
                                    </h3>
                                    <div className="mt-2 text-xs flex items-center">
                                        <span className='text-black'>Shane Doe &bull; </span>
                                        <span className='text-gray-500'>Jan 15, 2021</span>
                                    </div>
                                    <p className="mt-2 text-xs sm:text-sm text-gray-600">
                                        To understand the new smart watched and other pro devices of recent focus, we should look to Silicon Valley and...
                                    </p>
                                </div>
                            </div>

                            <div className="relative rounded-lg shadow-lg overflow-hidden w-full sm:w-80 md:w-96">
                                <div className="relative">
                                    <img
                                        src="https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/laurens-derks-h0tMHMyfr9A-unsplash-1024x678.jpg"
                                        alt=""
                                        className="w-full h-56 object-cover rounded-lg"
                                    />
                                    <div className="absolute top-2 right-2 bg-purple-700 text-white text-xs w-[2.3rem] h-[2.3rem] font-bold flex items-center justify-center rounded-full">
                                        8.7
                                    </div>
                                    <div className="absolute top-0 left-0 bg-purple-700 text-white text-xs font-semibold px-2 py-1 rounded-md">
                                        GADGETS
                                    </div>
                                </div>
                                <div className="p-4">
                                    <h3 className="mt-2 text-sm sm:text-base font-bold leading-tight">
                                        Why Apple Should Skip The MacBook Pro Launch
                                    </h3>
                                    <div className="mt-2 text-xs flex items-center">
                                        <span className='text-black'>Shane Doe &bull; </span>
                                        <span className='text-gray-500'>Jan 15, 2021</span>
                                    </div>
                                    <p className="mt-2 text-xs sm:text-sm text-gray-600">
                                        To understand the new smart watched and other pro devices of recent focus, we should look to Silicon Valley and...
                                    </p>
                                </div>
                            </div>

                            <div className="relative rounded-lg shadow-lg overflow-hidden w-full sm:w-80 md:w-96">
                                <div className="relative">
                                    <img
                                        src="https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/Depositphotos_430988634_xl-2015-4-1024x711.jpg"
                                        alt=""
                                        className="w-full h-56 object-cover rounded-lg"
                                    />
                                    <div className="absolute top-2 right-2 bg-purple-700 text-white text-xs w-[2.3rem] h-[2.3rem] font-bold flex items-center justify-center rounded-full">
                                        8.7
                                    </div>
                                    <div className="absolute top-0 left-0 bg-purple-700 text-white text-xs font-semibold px-2 py-1 rounded-md">
                                        GADGETS
                                    </div>
                                </div>
                                <div className="p-4">
                                    <h3 className="mt-2 text-sm sm:text-base font-bold leading-tight">
                                        Apollo G2J Showcases Electric Sports Car
                                    </h3>
                                    <div className="mt-2 text-xs flex items-center">
                                        <span className='text-black'>Shane Doe &bull; </span>
                                        <span className='text-gray-500'>Jan 15, 2021</span>
                                    </div>
                                    <p className="mt-2 text-xs sm:text-sm text-gray-600">
                                        To understand the new smart watched and other pro devices of recent focus, we should look to Silicon Valley and...
                                    </p>
                                </div>
                            </div>
                        </>
                    )}

                    {currentPage === 2 && (
                        <>
                            <div className="relative rounded-lg shadow-lg overflow-hidden w-full sm:w-80 md:w-96">
                                <div className="relative">
                                    <img
                                        src="https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/youssef-sarhan-tze1kKj7Lgg-unsplash-1-1024x652.jpg"
                                        alt=""
                                        className="w-full h-56 object-cover rounded-lg"
                                    />
                                    <div className="absolute top-0 left-0 bg-purple-700 text-white text-xs font-semibold px-2 py-1 rounded-md">
                                        GADGETS
                                    </div>
                                </div>
                                <div className="p-4">
                                    <h3 className="mt-2 text-sm sm:text-base font-bold leading-tight">
                                        The Famous Dyson Bladeless Fan is On Sale at Walmart
                                    </h3>
                                    <div className="mt-2 text-xs flex items-center">
                                        <span className='text-black'>Shane Doe &bull; </span>
                                        <span className='text-gray-500'>Jan 15, 2021</span>
                                    </div>
                                    <p className="mt-2 text-xs sm:text-sm text-gray-600">
                                        To understand the new smart watched and other pro devices of recent focus, we should look to Silicon Valley and...
                                    </p>
                                </div>
                            </div>

                            <div className="relative rounded-lg shadow-lg overflow-hidden w-full sm:w-80 md:w-96">
                                <div className="relative">
                                    <img
                                        src="https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/light-fun-technology-neon-woman-enjoy-headset-happy-virtual-vr_t20_zWNmJX-1-1024x686.jpg"
                                        alt=""
                                        className="w-full h-56 object-cover rounded-lg"
                                    />
                                    <div className="absolute top-0 left-0 bg-purple-700 text-white text-xs font-semibold px-2 py-1 rounded-md">
                                        GADGETS
                                    </div>
                                </div>
                                <div className="p-4">
                                    <h3 className="mt-2 text-sm sm:text-base font-bold leading-tight">
                                        Best Luxury Hotels In Bogotá 2022
                                    </h3>
                                    <div className="mt-2 text-xs flex items-center">
                                        <span className='text-black'>Shane Doe &bull; </span>
                                        <span className='text-gray-500'>Jan 15, 2021</span>
                                    </div>
                                    <p className="mt-2 text-xs sm:text-sm text-gray-600">
                                        To understand the new smart watched and other pro devices of recent focus, we should look to Silicon Valley and...
                                    </p>
                                </div>
                            </div>

                            <div className="relative rounded-lg shadow-lg overflow-hidden w-full sm:w-80 md:w-96">
                                <div className="relative">
                                    <img
                                        src="https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/sajad-nori-CeyE899Q73Y-unsplash-450x300.jpg"
                                        alt=""
                                        className="w-full h-56 object-cover rounded-lg"
                                    />
                                    <div className="absolute top-0 left-0 bg-purple-700 text-white text-xs font-semibold px-2 py-1 rounded-md">
                                        GADGETS
                                    </div>
                                </div>
                                <div className="p-4">
                                    <h3 className="mt-2 text-sm sm:text-base font-bold leading-tight">
                                        Soundcore VR Gaming Earbuds Designed for Meta Quest 2 Launched
                                    </h3>
                                    <div className="mt-2 text-xs flex items-center">
                                        <span className='text-black'>Shane Doe &bull; </span>
                                        <span className='text-gray-500'>Jan 15, 2021</span>
                                    </div>
                                    <p className="mt-2 text-xs sm:text-sm text-gray-600">
                                        To understand the new smart watched and other pro devices of recent focus, we should look to Silicon Valley and...
                                    </p>
                                </div>
                            </div>

                            <div className="relative rounded-lg shadow-lg overflow-hidden w-full sm:w-80 md:w-96">
                                <div className="relative">
                                    <img
                                        src="https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/billy-freeman-yk-jzxSIk90-unsplash-450x253.jpg"
                                        alt=""
                                        className="w-full h-56 object-cover rounded-lg"
                                    />
                                    <div className="absolute top-0 left-0 bg-purple-700 text-white text-xs font-semibold px-2 py-1 rounded-md">
                                        GADGETS
                                    </div>
                                </div>
                                <div className="p-4">
                                    <h3 className="mt-2 text-sm sm:text-base font-bold leading-tight">
                                        Leaf Headphones: Here are Some of The Best Devices from This Brand
                                    </h3>
                                    <div className="mt-2 text-xs flex items-center">
                                        <span className='text-black'>Shane Doe &bull; </span>
                                        <span className='text-gray-500'>Jan 15, 2021</span>
                                    </div>
                                    <p className="mt-2 text-xs sm:text-sm text-gray-600">
                                        To understand the new smart watched and other pro devices of recent focus, we should look to Silicon Valley and...
                                    </p>
                                </div>
                            </div>

                            <div className="relative rounded-lg shadow-lg overflow-hidden w-full sm:w-80 md:w-96">
                                <div className="relative">
                                    <img
                                        src="https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/jerin-john-Smbz6GQt_CI-unsplash-2-450x264.jpg"
                                        alt=""
                                        className="w-full h-56 object-cover rounded-lg"
                                    />
                                    <div className="absolute top-0 left-0 bg-purple-700 text-white text-xs font-semibold px-2 py-1 rounded-md">
                                        GADGETS
                                    </div>
                                </div>
                                <div className="p-4">
                                    <h3 className="mt-2 text-sm sm:text-base font-bold leading-tight">
                                        Wireless Earbuds May Help Amplify Sound for People with Hearing Loss
                                    </h3>
                                    <div className="mt-2 text-xs flex items-center">
                                        <span className='text-black'>Shane Doe &bull; </span>
                                        <span className='text-gray-500'>Jan 15, 2021</span>
                                    </div>
                                    <p className="mt-2 text-xs sm:text-sm text-gray-600">
                                        To understand the new smart watched and other pro devices of recent focus, we should look to Silicon Valley and...
                                    </p>
                                </div>
                            </div>

                            <div className="relative rounded-lg shadow-lg overflow-hidden w-full sm:w-80 md:w-96">
                                <div className="relative">
                                    <img
                                        src="https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/akhil-yerabati-Q2uV5TkjNz8-unsplash-1024x579.jpg"
                                        alt=""
                                        className="w-full h-56 object-cover rounded-lg"
                                    />
                                    <div className="absolute top-0 left-0 bg-purple-700 text-white text-xs font-semibold px-2 py-1 rounded-md">
                                        GADGETS
                                    </div>
                                </div>
                                <div className="p-4">
                                    <h3 className="mt-2 text-sm sm:text-base font-bold leading-tight">
                                        Study: Earbuds Use, Youngsters at High Risk of Hearing Loss
                                    </h3>
                                    <div className="mt-2 text-xs flex items-center">
                                        <span className='text-black'>Shane Doe &bull; </span>
                                        <span className='text-gray-500'>Jan 15, 2021</span>
                                    </div>
                                    <p className="mt-2 text-xs sm:text-sm text-gray-600">
                                        To understand the new smart watched and other pro devices of recent focus, we should look to Silicon Valley and...
                                    </p>
                                </div>
                            </div>

                            <div className="relative rounded-lg shadow-lg overflow-hidden w-full sm:w-80 md:w-96">
                                <div className="relative">
                                    <img
                                        src="https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/pexels-sound-on-3761262-1-1024x607.jpg"
                                        alt=""
                                        className="w-full h-56 object-cover rounded-lg"
                                    />
                                    <div className="absolute top-0 left-0 bg-purple-700 text-white text-xs font-semibold px-2 py-1 rounded-md">
                                        GADGETS
                                    </div>
                                </div>
                                <div className="p-4">
                                    <h3 className="mt-2 text-sm sm:text-base font-bold leading-tight">
                                        PC Game Deals: Stealth Classic to Grab, Fresh VR Bundle & More
                                    </h3>
                                    <div className="mt-2 text-xs flex items-center">
                                        <span className='text-black'>Shane Doe &bull; </span>
                                        <span className='text-gray-500'>Jan 15, 2021</span>
                                    </div>
                                    <p className="mt-2 text-xs sm:text-sm text-gray-600">
                                        To understand the new smart watched and other pro devices of recent focus, we should look to Silicon Valley and...
                                    </p>
                                </div>
                            </div>

                            <div className="relative rounded-lg shadow-lg overflow-hidden w-full sm:w-80 md:w-96">
                                <div className="relative">
                                    <img
                                        src="https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/Depositphotos_29247013_xl-2015-2-1024x683.jpg"
                                        alt=""
                                        className="w-full h-56 object-cover rounded-lg"
                                    />
                                    <div className="absolute top-0 left-0 bg-purple-700 text-white text-xs font-semibold px-2 py-1 rounded-md">
                                        GADGETS
                                    </div>
                                </div>
                                <div className="p-4">
                                    <h3 className="mt-2 text-sm sm:text-base font-bold leading-tight">
                                        Save $25 on Philips Wired Headphone For A Great Sounding Over-Ear Headphone
                                    </h3>
                                    <div className="mt-2 text-xs flex items-center">
                                        <span className='text-black'>Shane Doe &bull; </span>
                                        <span className='text-gray-500'>Jan 15, 2021</span>
                                    </div>
                                    <p className="mt-2 text-xs sm:text-sm text-gray-600">
                                        To understand the new smart watched and other pro devices of recent focus, we should look to Silicon Valley and...
                                    </p>
                                </div>
                            </div>
                        </>
                    )}
                </div>

                <div className="flex justify-start mt-8">
                    <button
                        onClick={() => handlePageChange(1)}
                        className={`px-4 py-2 mx-1 text-gray ${currentPage === 1 ? 'bg-blue-500' : 'bg-white'} rounded`}
                    >
                        1
                    </button>
                    <button
                        onClick={() => handlePageChange(2)}
                        className={`px-4 py-2 mx-1 text-gray ${currentPage === 2 ? 'bg-blue-500' : 'bg-white'} rounded`}
                    >
                        2
                    </button>
                </div>
            </div>


            
            <div className="col-span-1">
                {/* Right side content */}
                <div className="bg-white p-4 rounded-lg shadow-md">
                    <h3 className="text-lg font-bold mb-4">Top Posts</h3>
                    <div className="space-y-4">
                        <div className="flex items-center">
                            <img src="image_url" alt="Post Image" className="w-16 h-16 rounded-md" />
                            <div className="ml-4">
                                <h4 className="text-sm font-semibold">Popular New Xbox Game Pass Game Being Review Bombed With “Os”</h4>
                                <p className="text-xs text-gray-500">Jan 14, 2021 · <span className="text-red-500">7,796 Views</span></p>
                            </div>
                        </div>
                        {/* Repeat similar blocks for other posts */}
                    </div>
                </div>
                <div className="bg-white p-4 mt-6 rounded-lg shadow-md">
                    <h3 className="text-lg font-bold mb-4">Stay In Touch</h3>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="flex items-center space-x-2">
                            <i className="fab fa-facebook text-blue-600"></i>
                            <span className="text-sm font-semibold">1.1K Facebook</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <i className="fab fa-youtube text-red-600"></i>
                            <span className="text-sm font-semibold">105K YouTube</span>
                        </div>
                        {/* Repeat similar blocks for other social media platforms */}
                    </div>
                </div>
                <div className="bg-white p-4 mt-6 rounded-lg shadow-md">
                    <h3 className="text-lg font-bold mb-4">Latest Reviews</h3>
                    <div className="space-y-4">
                        <div className="flex items-center">
                            <img src="image_url" alt="Review Image" className="w-16 h-16 rounded-md" />
                            <div className="ml-4">
                                <span className="text-xs bg-pink-600 text-white rounded px-2 py-1">GAMING</span>
                                <h4 className="text-sm font-semibold">Pico 4 Review: Should You Actually Buy One Instead Of Quest 2?</h4>
                                <p className="text-xs text-gray-500">Shane Doe · Jan 15, 2021</p>
                            </div>
                            <div className="ml-auto bg-gray-100 rounded-full px-3 py-1 text-sm text-gray-700">
                                85%
                            </div>
                        </div>
                        {/* Repeat similar blocks for other reviews */}
                    </div>
                </div>
                <div className="bg-white p-4 mt-6 rounded-lg shadow-md">
                    <div className="text-center mb-4">
                        <i className="fas fa-envelope text-blue-600 text-3xl"></i>
                    </div>
                    <h3 className="text-lg font-bold text-center">Subscribe to Updates</h3>
                    <p className="text-sm text-center text-gray-500">Get the latest tech news from FooBar about tech, design, and biz.</p>
                    <div className="mt-4">
                        <input type="email" placeholder="Your email address..." className="w-full px-3 py-2 border border-gray-300 rounded mb-2" />
                        <button className="w-full bg-blue-600 text-white px-3 py-2 rounded">SUBSCRIBE</button>
                    </div>
                    <div className="mt-2 text-xs text-gray-500">
                        <input type="checkbox" className="mr-1" />
                        By signing up, you agree to the terms and our Privacy Policy agreement.
                    </div>
                </div>

            </div>
        </div>
    );
};

export default GadgetsCards;
