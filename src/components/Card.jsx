// src/components/Card/Card.jsx

import React from 'react';

export const MainCard = ({ card }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden mb-4 relative">
      <div className="overflow-hidden relative group">
        <img src={card.image} alt={card.title} className="w-full h-[32rem] object-cover transform group-hover:scale-110 transition-transform duration-300 ease-in-out" />
        <div className="absolute bottom-0 left-0 p-4 bg-gradient-to-t from-black to-transparent w-full">
          <span className="inline-block bg-purple-600 text-white text-xs px-2 py-1 rounded">{card.category}</span>
          <h2 className="text-2xl font-bold mt-2 text-white bg-black bg-opacity-75 p-2">{card.title}</h2>
          <div className="flex items-center text-gray-300 text-sm mt-2">
            <img src={card.authorImage} alt={card.author} className="w-6 h-6 rounded-full mr-2" />
            <span>{card.author}</span>
            <span className="mx-2">*</span>
            <span>{card.date}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export const SubCard = ({ card }) => {
  return (
    <div className="w-full md:w-1/2 px-4 mb-4 relative">
      <div className="bg-white rounded-lg shadow-md overflow-hidden relative">
        <img src={card.image} alt={card.title} className="w-full h-[15rem] object-cover" />
        <div className="absolute bottom-[8.27rem] left-0 p-2">
          <span className="inline-block bg-blue-600 text-white text-xs px-2 py-1 rounded">{card.category}</span>
        </div>
        <div className="p-4">
          <h2 className="text-lg font-bold mt-2">{card.title}</h2>
          <div className="flex items-center text-gray-500 text-sm mt-2">
            <span className="text-black">{card.author}</span>
            <span className="mx-2">*</span>
            <span>{card.date}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export const ArticleCard = ({ article }) => {
  return (
    <div className="flex items-start mb-8">
      <div>
        <span className="text-sm text-blue-600 font-bold">{article.category}</span>
        <h3 className="text-lg font-bold mt-1">{article.title}</h3>
        <div className="flex items-center text-gray-500 text-sm mt-2">
          <span className="text-black">{article.date}</span>
          <span className="mx-2">*</span>
          <span>{article.timeToRead}</span>
        </div>
      </div>
      <img src={article.image} alt={article.title} className="w-20 h-20 rounded-full ml-4" />
    </div>
  );
};
