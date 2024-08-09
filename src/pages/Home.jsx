import React from 'react';
import { MainCard, SubCard, ArticleCard } from '../components/Card';
import Sponsored from '../components/Sponsored';
import EditorCards from '../components/EditorCards';
import VideoCards from '../components/VideoCards'; 
const Home = () => {
  const mainCard = {
    id: 1,
    title: "Save $25 on Philips Wired Headphone For A Great Sounding Over-Ear Headphone",
    category: "Gadgets",
    date: "Jan 12, 2020",
    author: "Shane Doe",
    image: "https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/Depositphotos_29247013_xl-2015-2-1024x683.jpg",
    authorImage: "https://cheerup.theme-sphere.com/wp-content/uploads/2016/05/bella-doe.jpg"
  };

  const subCards = [
    {
      id: 2,
      title: "Tablet PC Market to Witness Exponential Growth by 2028, Sources Say",
      category: "Technology",
      date: "Jan 12, 2020",
      author: "Shane Doe",
      image: "https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/daniel-korpai-seLBnDRB6_M-unsplash-1-1-819x1024.jpg",
      authorImage: "https://cheerup.theme-sphere.com/wp-content/uploads/2016/05/bella-doe.jpg"
    },
    {
      id: 3,
      title: "Microsoft Co-Founder Bill Gates Visits EU, Steers Clean Energy Talks",
      category: "Technology",
      date: "Jan 11, 2020",
      author: "Shane Doe",
      image: "https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/Depositphotos_245244020_xl-2015-2-1024x756.jpg",
      authorImage: "https://cheerup.theme-sphere.com/wp-content/uploads/2016/05/bella-doe.jpg"
    },
  ];

  const articles = [
    {
      id: 1,
      title: "Schools, Parents Disagree over Bans on Student Mobile Phones",
      category: "Technology",
      date: "Shane Doe",
      timeToRead: "6 Mins Read",
      image: "https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/youssef-sarhan-tze1kKj7Lgg-unsplash-1-1024x652.jpg",
    },
    {
      id: 2,
      title: "PC Game Deals: Stealth Classic to Grab, Fresh VR Bundle & More",
      category: "Gadgets",
      date: "Shane Doe",
      timeToRead: "6 Mins Read",
      image: "https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/pexels-sound-on-3761262-1-1024x607.jpg",
    },
    {
      id: 3,
      title: "Electric Car Owners to Pay Road Tax from 2025, Hunt Announces",
      category: "Technology",
      date: "Shane Doe",
      timeToRead: "6 Mins Read",
      image: "https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/Depositphotos_273724454_xl-2015-1024x683.jpg",
    },
    {
      id: 4,
      title: "Tackling Smartphone Addiction: Village Bans Mobiles for Minors",
      category: "Phones",
      date: "Shane Doe",
      timeToRead: "6 Mins Read",
      image: "https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/Depositphotos_378099058_xl-2015-1-1024x615.jpg",
    },
    {
      id: 5,
      title: "Epic Games Store Gives Away One of The Best VR Games",
      category: "Technology",
      date: "Shane Doe",
      timeToRead: "6 Mins Read",
      image: "https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/Depositphotos_286775054_xl-2015-1-1024x445.jpg",
    },
  ];

  return (
      <div className="container mx-auto p-4">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full lg:w-2/3 px-4 mb-4 relative">
            <MainCard card={mainCard} />
            <div className="flex flex-wrap -mx-4">
              {subCards.map((card) => (
                <SubCard key={card.id} card={card} />
              ))}
            </div>
          </div>
          <div className="w-full lg:w-1/3 px-4 mb-4">
            <h2 className="text-xl font-bold mb-4">People's Favorite</h2>
            <div className="pl-4">
              {articles.map((article) => (
                <ArticleCard key={article.id} article={article} />
              ))}
            </div>
          </div>
        </div>
        <Sponsored />
        <EditorCards /> 
        <VideoCards /> 
      </div>
  );
};

export default Home;
