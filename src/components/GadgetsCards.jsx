import React, { useState } from 'react';
import { FaFacebookF, FaTwitter, FaPinterestP, FaInstagram, FaTelegramPlane, FaWhatsapp } from 'react-icons/fa';

const GadgetsCards = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [isLoading, setIsLoading] = useState(true);

    React.useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2000);
        return () => clearTimeout(timer);
    }, []);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
        setIsLoading(true);
        setTimeout(() => setIsLoading(false), 1500); 
    };

    return (
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-4 gap-9 py-8">
            <div className="col-span-1 lg:col-span-3">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-7">
                    {currentPage === 1 && (
                        <>
                            {isLoading ? (
                                <>
                                    {[...Array(8)].map((_, index) => (
                                        <div key={index} className="relative rounded-lg shadow-lg overflow-hidden w-full sm:w-80 md:w-96 bg-gray-300 animate-pulse h-64"></div>
                                    ))}
                                </>
                            ) : (
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
                                                src="https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/laurens-derks-h0tMHMyfr9A-unsplash-768x509.jpg"
                                                alt=""
                                                className="w-full h-56 object-cover rounded-lg"
                                            />
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
                                                src="https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/Depositphotos_430988634_xl-2015-4-768x533.jpg"
                                                alt=""
                                                className="w-full h-56 object-cover rounded-lg"
                                            />
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
                <div className="p-0">
                    <div className="relative mb-6">
                        <img
                            src="https://smartmag.theme-sphere.com/news-bulletin/wp-content/uploads/sites/26/2021/11/Smart-Woman.jpg"
                            alt=""
                            className="w-full h-64 object-cover"
                        />
                    </div>

                    <div>
                        <h3 className="text-lg font-bold mb-4">Top Posts</h3>
                        <div className="flex items-center mb-4">
                            <img
                                src="https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2021/01/kamil-s-SuPAbuuK7f4-unsplash-768x512.jpg"
                                alt=""
                                className="w-20 h-20 object-cover rounded-lg mr-4"
                            />
                            <div>
                                <h4 className="text-md font-semibold">
                                    Popular New Xbox Game Pass Game Being Review Bombed With “0s”
                                </h4>
                                <div className="text-gray-500 text-sm">
                                    <span>Jan 14, 2021</span> ·
                                    <span className="text-red-500 ml-2">7,792 Views</span>
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center mb-4">
                            <img
                                src="https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2021/01/jonathan-kemper-poSms2EzfNY-unsplash-768x512.jpg"
                                alt=""
                                className="w-20 h-20 object-cover rounded-lg mr-4"
                            />
                            <div>
                                <h4 className="text-md font-semibold">
                                    Samsung is Developing Bright MicroLED on Displays for AR Headsets
                                </h4>
                                <div className="text-gray-500 text-sm">
                                    <span>Jan 14, 2021</span> ·
                                    <span className="text-red-500 ml-2">6,914 Views</span>
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center mb-4">
                            <img
                                src="https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2021/01/0247d91565b69ed9ddba4ec59ac97963-1-1024x585.jpg"
                                alt=""
                                className="w-20 h-20 object-cover rounded-lg mr-4"
                            />
                            <div>
                                <h4 className="text-md font-semibold">
                                    Warner Bros. Games Announces Mortal Kombat: Onslaught
                                </h4>
                                <div className="text-gray-500 text-sm">
                                    <span>Jan 14, 2021</span> ·
                                    <span className="text-red-500 ml-2">4,418 Views</span>
                                </div>
                            </div>
                        </div>

                        <div className="p-3">
                            <h2 className="text-lg font-bold mb-4 text-start">Stay In Touch</h2>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="flex items-center justify-center border border-gray-300 p-1">
                                    <FaFacebookF className="w-6 h-6 text-blue-600" />
                                    <div className="ml-2 text-sm font-medium">1.1K Facebook</div>
                                </div>
                                <div className="flex items-center justify-center border border-gray-300 p-1">
                                    <FaTwitter className="w-6 h-6 text-blue-400" />
                                    <div className="ml-2 text-sm font-medium">68.9K Twitter</div>
                                </div>
                                <div className="flex items-center justify-center border border-gray-300 p-1">
                                    <FaPinterestP className="w-6 h-6 text-red-600" />
                                    <div className="ml-2 text-sm font-medium">10.7K Pinterest</div>
                                </div>
                                <div className="flex items-center justify-center border border-gray-300 p-1">
                                    <FaInstagram className="w-6 h-6 text-pink-600" />
                                    <div className="ml-2 text-sm font-medium">46.4K Instagram</div>
                                </div>
                                <div className="flex items-center justify-center border h-[3rem] border-gray-300 p-1">
                                    <FaTelegramPlane className="w-6 h-6 text-blue-500" />
                                    <div className="ml-2 text-sm font-medium">Telegram</div>
                                </div>
                                <div className="flex items-center justify-center border border-gray-300 p-1">
                                    <FaWhatsapp className="w-6 h-6 text-green-500" />
                                    <div className="ml-2 text-sm font-medium">WhatsApp</div>
                                </div>
                            </div>
                        </div>


                        <div className="mt-8">
                            <h3 className="text-lg font-bold mb-4">Latest Reviews</h3>

                            <div className="p-0 mb-2">
                                <div className="relative">
                                    <img
                                        src="https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/woman-in-3d-virtual-reality-glasses_t20_WQVvL4-768x513.jpg"
                                        alt=""
                                        className="w-full h-40 rounded-lg object-cover"
                                    />
                                    <div className="absolute top-0 left-0 bg-pink-600 text-white px-2 py-1 text-xs font-bold rounded">
                                        GAMING
                                    </div>
                                    <div className="absolute top-2 right-2 bg-blue-700 text-white text-xs w-[2.3rem] h-[2.3rem] font-bold flex items-center justify-center rounded-full">
                                        85%
                                    </div>
                                </div>
                                <h4 className="text-md font-semibold mt-4">
                                    Pico 4 Review: Should You Actually Buy One Instead Of Quest 2?
                                </h4>
                                <div className="text-gray-500 text-sm mt-2">
                                    Shane Doe · Jan 15, 2021
                                </div>
                            </div>

                            <div className="p-0 mb-2">
                                <div className="relative">
                                    <img
                                        src="https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/pexels-leon-3636001-2-768x512.jpg"
                                        alt=""
                                        className="w-full h-40 rounded-lg object-cover"
                                    />
                                    <div className="absolute top-0 left-0 bg-blue-600 text-white px-2 py-1 text-xs font-bold rounded">
                                        TECHNOLOGY
                                    </div>
                                    <div className="absolute top-2 right-2 bg-blue-700 text-white text-xs w-[2.3rem] h-[2.3rem] font-bold flex items-center justify-center rounded-full">
                                        8.1
                                    </div>
                                </div>
                                <h4 className="text-md font-semibold mt-4">
                                    A Review of the Venus Optics Argus 18mm f/0.95 MFT APO Lens
                                </h4>
                                <div className="text-gray-500 text-sm mt-2">
                                    Shane Doe · Jan 15, 2021
                                </div>
                            </div>

                            <div className="p-0 mb-2">
                                <div className="relative">
                                    <img
                                        src="https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/surya-devarakonda-lnEM5jOu-mc-unsplash-768x512.jpg"
                                        alt=""
                                        className="w-full h-40 rounded-lg object-cover"
                                    />
                                    <div className="absolute top-0 left-0 bg-purple-600 text-white px-2 py-1 text-xs font-bold rounded">
                                        GADGETS
                                    </div>
                                    <div className="absolute top-2 right-2 bg-blue-700 text-white text-xs w-[2.3rem] h-[2.3rem] font-bold flex items-center justify-center rounded-full">
                                        8.9
                                    </div>
                                </div>
                                <h4 className="text-md font-semibold mt-4">
                                    DJI Avata Review: Immersive FPV Flying For Drone Enthusiasts
                                </h4>
                                <div className="text-gray-500 text-sm mt-2">
                                    Shane Doe · Jan 15, 2021
                                </div>
                            </div>

                            <div className="mt-8 text-center pr-6">
                                <div className="border p-6 rounded-lg h-full lg:h-[21rem] w-full lg:w-[15rem]">
                                    <h3 className="text-black text-xl font-bold w-full text-center whitespace-nowrap">
                                        Subscribe to Updates
                                    </h3>
                                    <p className="text-gray-400 mt-2">Get the latest creative news from FooBar about art, design, and business.</p>
                                    <form className="mt-4">
                                        <input type="email" placeholder="Your email address.." className="w-full p-3 rounded bg-white text-white placeholder-gray-500 border border-gray-700" />
                                        <button type="submit" className="w-full bg-blue-700 text-bold text-white p-3 mt-2 rounded">Subscribe</button>
                                        <div className="flex items-center mt-2 justify-center">
                                            <input type="checkbox" className="mr-2" />
                                            <p className="text-gray-400 text-sm">By signing up, you agree to our terms and our <a href="/" className="text-white underline">Privacy Policy</a> agreement.</p>
                                        </div>
                                    </form>
                                </div>
                            </div>

                            <div className="relative mt-6">
                                <img
                                    src="https://smartmag.theme-sphere.com/tech-1/wp-content/uploads/sites/7/2021/01/300x600-banner-tech-02.jpg"
                                    alt=""
                                    className="w-[15rem] ull h-[30rem] object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GadgetsCards;
