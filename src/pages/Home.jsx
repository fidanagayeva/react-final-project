import React from 'react';
import HomePages from '../components/HomePages';
import Sponsored from '../components/Sponsored';
import EditorCards from '../components/EditorCards';
import VideoCards from '../components/VideoCards'; 
import NewGadgets from '../components/NewGadgets';
import Featured from '../components/Featured';
import FeaturedCards from '../components/FeaturedCards';
import LatestArticles from '../components/LatestArticles';

const Home = () => {
  return (
    <>
      <HomePages />
      <Sponsored />
      <EditorCards /> 
      <VideoCards /> 
      <NewGadgets /> 
      <Sponsored />
      <Featured />
      <FeaturedCards />
      <LatestArticles />
    </>
  );
}

export default Home;
