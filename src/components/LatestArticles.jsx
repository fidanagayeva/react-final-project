import React from 'react';
import { FaFacebookF, FaTwitter, FaPinterestP, FaInstagram, FaTelegramPlane, FaWhatsapp } from 'react-icons/fa';

const LatestArticles = () => {
    return (
        <div className="container px-4 flex justify-center items-start mt-[3rem]">
            <div className="flex-1 pr-6">
                <div className="space-y-8">
                    <div className="space-y-4">
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-2xl font-semibold ml-[0.3rem]">New Gadgets</h2>
                            <hr className="flex-1 mx-4 border-gray-300" />
                        </div>
                        <div className="bg-white rounded-lg shadow flex">
                            <div className="relative w-1/3 h-[14rem] rounded-l-lg overflow-hidden">
                                <img
                                    src="https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/thisisengineering-raeng-a7A9O5htrKs-unsplash-1024x683.jpg"
                                    alt=""
                                    className="w-full h-full object-cover rounded-lg"
                                />
                                <div className="absolute bottom-0 left-0 bg-pink-600 text-white text-xs font-semibold px-2 py-1 rounded">
                                    GAMING
                                </div>
                            </div>
                            <div className="p-4 flex-1">
                                <h2 className="text-lg font-bold mb-2">
                                    Game Development This Week: Save On Essential Tools and More
                                </h2>
                                <div className="text-gray-500 text-sm mb-4 flex items-center">
                                    <img
                                        src="https://cheerup.theme-sphere.com/wp-content/uploads/2016/05/bella-doe.jpg"
                                        alt=""
                                        className="w-8 h-8 rounded-full mr-2"
                                    />
                                    Shane Doe · Nov 19, 2022
                                </div>
                                <p className="text-gray-700">
                                    To understand the new smart watches and other pro devices of recent focus, we should look to Silicon Valley and the quantified...
                                </p>
                            </div>
                        </div>

                        <div className="bg-white rounded-lg shadow flex">
                            <div className="relative w-1/3 h-[14rem] rounded-l-lg overflow-hidden">
                                <img
                                    src="https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/Depositphotos_242235046_xl-2015-1-1024x582.jpg"
                                    alt=""
                                    className="w-full h-full object-cover rounded-lg"
                                />
                                <div className="absolute bottom-0 left-0 bg-blue-600 text-white text-xs font-semibold px-2 py-1 rounded">
                                    TECHNOLOGY
                                </div>
                            </div>
                            <div className="p-4 flex-1">
                                <h2 className="text-lg font-bold mb-2">
                                    Is the Hyperloop Doomed? What Elon Musk's Latest Setback Really Means
                                </h2>
                                <div className="text-gray-500 text-sm mb-4 flex items-center">
                                    <img
                                        src="https://cheerup.theme-sphere.com/wp-content/uploads/2016/05/bella-doe.jpg"
                                        alt=""
                                        className="w-8 h-8 rounded-full mr-2"
                                    />
                                    Shane Doe · Mar 10, 2022
                                </div>
                                <p className="text-gray-700">
                                    To understand the new smart watches and other pro devices of recent focus, we should look to Silicon Valley and the quantified...
                                </p>
                            </div>
                        </div>

                        <div className="bg-white rounded-lg shadow flex">
                            <div className="relative w-1/3 h-[14rem] rounded-l-lg overflow-hidden">
                                <img
                                    src="https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/remy_loz-3vVzdb8KKIw-unsplash-1024x683.jpg"
                                    alt=""
                                    className="w-full h-full object-cover rounded-lg"
                                />
                                <div className="absolute bottom-0 left-0 bg-blue-600 text-white text-xs font-semibold px-2 py-1 rounded">
                                    TECHNOLOGY
                                </div>
                            </div>
                            <div className="p-4 flex-1">
                                <h2 className="text-lg font-bold mb-2">
                                    The Best Early Black Friday Deals on Gaming Laptops and Accessories
                                </h2>
                                <div className="text-gray-500 text-sm mb-4 flex items-center">
                                    <img
                                        src="https://cheerup.theme-sphere.com/wp-content/uploads/2016/05/bella-doe.jp"
                                        alt="Author"
                                        className="w-8 h-8 rounded-full mr-2"
                                    />
                                    Shane Doe · Sep 8, 2022
                                </div>
                                <p className="text-gray-700">
                                    To understand the new smart watches and other pro devices of recent focus, we should look to Silicon Valley and the quantified...
                                </p>
                            </div>
                        </div>

                        <div className="relative bg-black rounded-lg overflow-hidden h-[28rem]">
                            <img
                                src="https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/matias-islas-Nw0j-2YAnfI-unsplash-1-1024x683.jpg"
                                alt=""
                                className="w-full h-full object-cover opacity-50"
                            />
                            <div className="absolute inset-0 p-6 flex flex-col justify-end">
                                <div className="bg-pink-600 text-white text-xs font-semibold w-[4rem] px-2 py-1 rounded mb-2">
                                    GAMING
                                </div>
                                <h2 className="text-white text-3xl font-bold mb-4">
                                    Riot Games Acquires a Wargaming Studio to Help With Live Game Development
                                </h2>
                                <div className="flex items-center text-white text-sm">
                                    <img
                                        src="https://cheerup.theme-sphere.com/wp-content/uploads/2016/05/bella-doe.jpg"
                                        alt=""
                                        className="w-8 h-8 rounded-full mr-2"
                                    />
                                    Shane Doe · Mar 10, 2022
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-lg shadow flex">
                            <div className="relative w-1/3 h-[14rem] rounded-l-lg overflow-hidden">
                                <img
                                    src="https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/remy-gieling-bA5ZJ9JVrb8-unsplash-1-1024x651.jpg"
                                    alt=""
                                    className="w-full h-full object-cover rounded-lg"
                                />
                                <div className="absolute bottom-0 left-0 bg-pink-600 text-white text-xs font-semibold px-2 py-1 rounded">
                                    GAMING
                                </div>
                            </div>
                            <div className="p-4 flex-1">
                                <h2 className="text-lg font-bold mb-2">
                                    Game Development This Week: Save On Essential Tools and More
                                </h2>
                                <div className="text-gray-500 text-sm mb-4 flex items-center">
                                    <img
                                        src="https://cheerup.theme-sphere.com/wp-content/uploads/2016/05/bella-doe.jpg"
                                        alt=""
                                        className="w-8 h-8 rounded-full mr-2"
                                    />
                                    Shane Doe · Nov 19, 2022
                                </div>
                                <p className="text-gray-700">
                                    To understand the new smart watches and other pro devices of recent focus, we should look to Silicon Valley and the quantified...
                                </p>
                            </div>
                        </div>

                        <div className="bg-white rounded-lg shadow flex">
                            <div className="relative w-1/3 h-[14rem] rounded-l-lg overflow-hidden">
                                <img
                                    src="https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/pexels-bogdan-glisik-1661469-1-edited-1536x960.jpg"
                                    alt=""
                                    className="w-full h-full object-cover rounded-lg"
                                />
                                <div className="absolute bottom-0 left-0 bg-blue-600 text-white text-xs font-semibold px-2 py-1 rounded">
                                    TECHNOLOGY
                                </div>
                            </div>
                            <div className="p-4 flex-1">
                                <h2 className="text-lg font-bold mb-2">
                                    Keep Talking and Nobody Explodes: A Boomer Gaming in VR
                                </h2>
                                <div className="text-gray-500 text-sm mb-4 flex items-center">
                                    <img
                                        src="https://cheerup.theme-sphere.com/wp-content/uploads/2016/05/bella-doe.jpg"
                                        alt="Author"
                                        className="w-8 h-8 rounded-full mr-2"
                                    />
                                    Shane Doe · Mar 10, 2021
                                </div>
                                <p className="text-gray-700">
                                    To understand the new smart watches and other pro devices of recent focus, we should look to Silicon Valley and the quantified...
                                </p>
                            </div>
                        </div>

                        <div className="bg-white rounded-lg shadow flex">
                            <div className="relative w-1/3 h-[14rem] rounded-l-lg overflow-hidden">
                                <img
                                    src="https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/pexels-luis-quintero-1787236-1024x683.jpg"
                                    alt=""
                                    className="w-full h-full object-cover rounded-lg"
                                />
                                <div className="absolute bottom-0 left-0 bg-blue-600 text-white text-xs font-semibold px-2 py-1 rounded">
                                    TECHNOLOGY
                                </div>
                            </div>
                            <div className="p-4 flex-1">
                                <h2 className="text-lg font-bold mb-2">
                                    Apple Watch’s ECG Can Help Diagnose Heart Problem: Research
                                </h2>
                                <div className="text-gray-500 text-sm mb-4 flex items-center">
                                    <img
                                        src="https://cheerup.theme-sphere.com/wp-content/uploads/2016/05/bella-doe.jpg"
                                        alt=""
                                        className="w-8 h-8 rounded-full mr-2"
                                    />
                                    Shane Doe · Jan 19, 2021
                                </div>
                                <p className="text-gray-700">
                                    To understand the new smart watches and other pro devices of recent focus, we should look to Silicon Valley and the quantified...
                                </p>
                            </div>
                        </div>

                        <div className="bg-white rounded-lg shadow flex">
                            <div className="relative w-1/3 h-[14rem] rounded-l-lg overflow-hidden">
                                <img
                                    src="https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/pexels-bruno-bueno-3854821-1024x683.jpg"
                                    alt=""
                                    className="w-full h-full object-cover rounded-lg"
                                />
                                <div className="absolute bottom-0 left-0 bg-blue-600 text-white text-xs font-semibold px-2 py-1 rounded">
                                    TECHNOLOGY
                                </div>
                            </div>
                            <div className="p-4 flex-1">
                                <h2 className="text-lg font-bold mb-2">
                                    Simple Tips and Tricks to Take Care of Your Expensive DSLR Camera
                                </h2>
                                <div className="text-gray-500 text-sm mb-4 flex items-center">
                                    <img
                                        src="https://cheerup.theme-sphere.com/wp-content/uploads/2016/05/bella-doe.jpg"
                                        alt=""
                                        className="w-8 h-8 rounded-full mr-2"
                                    />
                                    Shane Doe · Mar 15, 2020
                                </div>
                                <p className="text-gray-700">
                                    To understand the new smart watches and other pro devices of recent focus, we should look to Silicon Valley and the quantified...
                                </p>
                            </div>
                        </div>
                    </div>
                    <button className="bg-blue-800 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-full w-[17rem] shadow-lg mt-6 mx-auto block">
                        LOAD MORE
                    </button>
                </div>
            </div>

            <div className="w-1/4 sticky top-0 h-screen mb-[21.5rem] space-y-6 pr-4">
                <div className="p-4 rounded-lg shadow-md border border-gray-300">
                    <h2 className="text-lg font-semibold mb-4 text-center">We're Social</h2>
                    <div className="grid grid-cols-2 gap-2">
                        <div className="flex items-center justify-center border border-gray-300 p-2 rounded-lg">
                            <div className="flex items-center space-x-2">
                                <FaFacebookF className="w-6 h-6 text-blue-600" />
                                <div className="text-sm font-medium">1.1K Facebook</div>
                            </div>
                        </div>
                        <div className="flex items-center justify-center border border-gray-300 p-2 rounded-lg">
                            <div className="flex items-center space-x-2">
                                <FaTwitter className="w-6 h-6 text-blue-400" />
                                <div className="text-sm font-medium">68.9K Twitter</div>
                            </div>
                        </div>
                        <div className="flex items-center justify-center border border-gray-300 p-2 rounded-lg">
                            <div className="flex items-center space-x-2">
                                <FaPinterestP className="w-6 h-6 text-red-600" />
                                <div className="text-sm font-medium">10.7K Pinterest</div>
                            </div>
                        </div>
                        <div className="flex items-center justify-center border border-gray-300 p-2 rounded-lg">
                            <div className="flex items-center space-x-2">
                                <FaInstagram className="w-6 h-6 text-pink-600" />
                                <div className="text-sm font-medium">46.4K Instagram</div>
                            </div>
                        </div>
                        <div className="flex items-center justify-center border border-gray-300 p-2 rounded-lg">
                            <div className="flex items-center space-x-2">
                                <FaTelegramPlane className="w-6 h-6 text-blue-500" />
                                <div className="text-sm font-medium">Telegram</div>
                            </div>
                        </div>
                        <div className="flex items-center justify-center border border-gray-300 p-2 rounded-lg">
                            <div className="flex items-center space-x-2">
                                <FaWhatsapp className="w-6 h-6 text-green-500" />
                                <div className="text-sm font-medium">WhatsApp</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="p-4 rounded-lg">
                    <h2 className="text-lg font-semibold mb-4">Gaming Zone</h2>
                    <div className="space-y-4">
                        <div>
                            <img
                                src="https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/Depositphotos_422755408_xl-2015-1-1024x512.jpg"
                                alt=""
                                className="w-full h-auto rounded-lg object-cover mb-2"
                            />
                            <div className="absolute bottom-[10.8rem] left-[1rem] bg-pink-600 text-white text-xs font-semibold px-2 py-1 rounded">GAMING</div>
                            <h3 className="text-sm font-bold">PS5 vs Xbox Series XS vs Switch Launch Sales Comparison</h3>
                            <div className="text-xs text-gray-500 mt-1">
                                Shane Doe · Sep 8, 2020
                            </div>
                        </div>
                        <div className="border-t border-gray-200 pt-4">
                            <div className="flex items-center space-x-4">
                                <div>
                                    <h4 className="text-sm font-medium">
                                        New Oculus VR Kills IRL If Your Game Character Dies
                                    </h4>
                                    <div className="text-xs text-gray-500">Shane Doe · Apr 18, 2020</div>
                                </div>
                                <img
                                    src="https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/man-with-glasses-of-virtual-reality-nominated_t20_ZYvEBR.jpg"
                                    alt=""
                                    className="w-16 h-16 rounded-lg object-cover"
                                />
                            </div>
                        </div>
                        <div className="border-t border-gray-200 pt-4">
                            <div className="flex items-center space-x-4">
                                <div>
                                    <h4 className="text-sm font-medium">
                                        Hologate VR Serves Its Five Millionth Customer
                                    </h4>
                                    <div className="text-xs text-gray-500">Shane Doe · Mar 16, 2020</div>
                                </div>
                                <img
                                    src="https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/pexels-bruno-bueno-3854821-1024x683.jpg"
                                    alt=""
                                    className="w-16 h-16 rounded-lg object-cover"
                                />
                            </div>
                        </div>
                        <div className="border-t border-gray-200 pt-4">
                            <div className="flex items-center space-x-4">
                                <div>
                                    <h4 className="text-sm font-medium">
                                        The Nintendo Switch Can’t Seem To Handle Pokémon
                                    </h4>
                                    <div className="text-xs text-gray-500">Shane Doe · Mar 15, 2020</div>
                                </div>
                                <img
                                    src="https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/yasin-hasan-PU1uYnZrAL0-unsplash-1024x683.jpg"
                                    alt=""
                                    className="w-16 h-16 rounded-lg object-cover"
                                />
                            </div>
                        </div>
                        <div className="border-t border-gray-200 pt-4">
                            <div className="flex items-center space-x-4">
                                <div>
                                    <h4 className="text-sm font-medium">
                                        The Fujifilm X-T30 is the Perfect Camera for Gaming
                                    </h4>
                                    <div className="text-xs text-gray-500">Shane Doe · Mar 15, 2020</div>
                                </div>
                                <img
                                    src="https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/puria-berenji-tUnzh_uINw0-unsplash-1152x1536.jpg"
                                    alt=""
                                    className="w-16 h-16 rounded-lg object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default LatestArticles;
