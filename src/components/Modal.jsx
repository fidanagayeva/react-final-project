import React, { useState, useEffect } from 'react';

const Modal = ({ type, card, onClose, onSave, onUpdate, onDelete }) => {
  const [formData, setFormData] = useState(card || { title: '', category: '', author: '', date: '', image: '' });

  useEffect(() => {
    if (card) {
      setFormData(card);
    }
  }, [card]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setFormData({ ...formData, image: reader.result });
    };
    reader.readAsDataURL(file);
  };

  const handleSave = () => {
    const newCard = { ...formData, id: Date.now() };
    onSave(newCard);
    onClose();
  };

  const handleUpdate = () => {
    onUpdate(formData);
    onClose();
  };

  const handleDelete = () => {
    onDelete(card);
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75">
      <div className="bg-white p-6 shadow-lg w-10/12 max-w-lg max-h-full overflow-y-auto custom-scrollbar">
        <h2 className="text-xl font-bold mb-4">
          {type === 'view' ? 'View Card' : type === 'create' ? 'Create Card' : type === 'edit' ? 'Edit Card' : 'Delete Card'}
        </h2>
        {(type === 'view' || type === 'edit' || type === 'create') && (
          <form className="space-y-4">
            <div>
              <label className="block text-gray-700">Title</label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300"
                readOnly={type === 'view'}
              />
            </div>
            <div>
              <label className="block text-gray-700">Category</label>
              <input
                type="text"
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300"
                readOnly={type === 'view'}
              />
            </div>
            <div>
              <label className="block text-gray-700">Author</label>
              <input
                type="text"
                name="author"
                value={formData.author}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300"
                readOnly={type === 'view'}
              />
            </div>
            <div>
              <label className="block text-gray-700">Date</label>
              <input
                type="text"
                name="date"
                value={formData.date}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300"
                readOnly={type === 'view'}
              />
            </div>
            {type !== 'view' && (
              <div>
                <label className="block text-gray-700">Image</label>
                <input
                  type="file"
                  onChange={handleFileChange}
                  className="w-full p-2 border border-gray-300"
                />
              </div>
            )}
            {type === 'view' && formData.image && (
              <div>
                <label className="block text-gray-700">Image</label>
                <img src={formData.image} alt={formData.title} className="w-full h-auto" />
              </div>
            )}
          </form>
        )}
        {type === 'delete' && (
          <div className="mt-4 text-gray-700">
            Are you sure you want to delete this card?
          </div>
        )}
        <div className="mt-4 flex justify-end space-x-2">
          <button onClick={onClose} className="bg-gray-800 hover:bg-gray-900 text-white px-4 py-2">
            Cancel
          </button>
          {type === 'create' && (
            <button onClick={handleSave} className="bg-red-600 hover:bg-red-800 text-white px-4 py-2">
              Save
            </button>
          )}
          {type === 'edit' && (
            <button onClick={handleUpdate} className="bg-green-600 hover:bg-green-800 text-white px-4 py-2">
              Update
            </button>
          )}
          {type === 'delete' && (
            <button onClick={handleDelete} className="bg-red-600 hover:bg-red-800 text-white px-4 py-2">
              Delete
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Modal;
