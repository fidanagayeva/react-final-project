import React, { useState, useEffect } from 'react';
import { FaEye, FaEdit, FaTrash, FaPlus } from 'react-icons/fa';
import Modal from './Modal';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../styles/style.scss';

const EditorCards = () => {
  const defaultCards = [
    {
      id: 1,
      title: "Study: Earbuds Use, Youngsters at High Risk of Hearing Loss",
      category: "Gadgets",
      date: "Mar 15, 2020",
      author: "Shane Doe",
      image: "https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/akhil-yerabati-Q2uV5TkjNz8-unsplash-1024x579.jpg",
    },
    {
      id: 2,
      title: "Telescope is Revealing the Galaxies of the Universe Like Never Before",
      category: "Technology",
      date: "Mar 15, 2020",
      author: "Shane Doe",
      image: "https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/greg-rakozy-oMpAz-DN-9I-unsplash-1024x683.jpg",
    },
    {
      id: 3,
      title: "CarPlay Concept Shows Off a Modular UI Inspired by Next-Gen Design",
      category: "Phones",
      date: "Mar 15, 2020",
      author: "Shane Doe",
      image: "https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/Depositphotos_429887216_XL-1-1024x658.jpg",
    },
    {
      id: 4,
      title: "Latest Windows 11 Preview Build Finally Lets You Search for Copied Text",
      category: "Technology",
      date: "Mar 15, 2020",
      author: "Shane Doe",
      image: "https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/sunrise-king-NK-cB-l1cv0-unsplash-1-1024x617.jpg",
    },
  ];

  const [cards, setCards] = useState([]);
  const [selectedCard, setSelectedCard] = useState(null);
  const [modalType, setModalType] = useState('');

  useEffect(() => {
    const savedCards = JSON.parse(localStorage.getItem('editorCards')) || [];
    const mergedCards = mergeCards(savedCards, defaultCards);
    setCards(mergedCards);
  }, []);

  useEffect(() => {
    localStorage.setItem('editorCards', JSON.stringify(cards));
  }, [cards]);

  const mergeCards = (saved, defaults) => {
    const merged = [...defaults];
    saved.forEach(card => {
      const index = merged.findIndex(defaultCard => defaultCard.id === card.id);
      if (index !== -1) {
        merged[index] = card;
      } else {
        merged.push(card);
      }
    });
    return merged;
  };

  const handleView = (card) => {
    setSelectedCard(card);
    setModalType('view');
  };

  const handleCreate = () => {
    setSelectedCard(null);
    setModalType('create');
  };

  const handleEdit = (card) => {
    setSelectedCard(card);
    setModalType('edit');
  };

  const handleDelete = (card) => {
    setSelectedCard(card);
    setModalType('delete');
  };

  const handleCloseModal = () => {
    setSelectedCard(null);
    setModalType('');
  };

  const handleSave = (newCard) => {
    if (!newCard.title || !newCard.category || !newCard.author || !newCard.date || !newCard.image) {
      toast.error('Please fill in all fields.');
      return;
    }

    const updatedCards = [...cards, newCard];
    setCards(updatedCards);
    localStorage.setItem('editorCards', JSON.stringify(updatedCards));
    toast.success('Card created successfully!');
  };

  const handleUpdate = (updatedCard) => {
    const updatedCards = cards.map(card => card.id === updatedCard.id ? updatedCard : card);
    setCards(updatedCards);
    localStorage.setItem('editorCards', JSON.stringify(updatedCards));
  };

  const handleDeleteConfirm = (deletedCard) => {
    const updatedCards = cards.filter(card => card.id !== deletedCard.id);
    setCards(updatedCards);
    localStorage.setItem('editorCards', JSON.stringify(updatedCards));
  };

  return (
    <div className="mt-8">
      <ToastContainer />
      <div className="text-center mb-8 flex justify-between items-center">
        <h2 className="text-2xl font-bold">Editor's Picks</h2>
        <button onClick={handleCreate} className="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded flex items-center">
          <FaPlus className="mr-2" /> Create
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {cards.map((card, index) => (
          <div key={card.id} className="bg-white rounded-lg shadow-md overflow-hidden relative">
            <img src={card.image} alt={card.title} className="w-full h-40 object-cover" />
            <div className="absolute top-2 left-2 bg-purple-600 text-white text-xs px-2 py-1 rounded">{card.category}</div>
            <div className="p-4 flex items-start">
              <div className="text-5xl text-gray-400 font-bold mr-4">{index + 1}</div>
              <div>
                <h2 className="text-lg font-bold">{card.title}</h2>
                <div className="flex items-center text-gray-500 text-sm mt-2">
                  <span>{card.author}</span>
                  <span className="mx-2">•</span>
                  <span>{card.date}</span>
                </div>
              </div>
            </div>
            <div className="flex justify-around p-2">
              <FaEye className="text-yellow-600 hover:text-yellow-800 cursor-pointer" onClick={() => handleView(card)} />
              <FaEdit className="text-black hover:text-black-800 cursor-pointer" onClick={() => handleEdit(card)} />
              <FaTrash className="text-red-600 hover:text-red-800 cursor-pointer" onClick={() => handleDelete(card)} />
            </div>
          </div>
        ))}
      </div>
      {modalType && (
        <Modal
          type={modalType}
          card={selectedCard}
          onClose={handleCloseModal}
          onSave={handleSave}
          onUpdate={handleUpdate}
          onDelete={handleDeleteConfirm}
        />
      )}
    </div>
  );
};

export default EditorCards;