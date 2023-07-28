import React from 'react';

const Suggestions = () => {
  const sampleSuggestions = [
    {
      id: 1,
      user: 'devuser4',
      image: 'https://via.placeholder.com/200',
    },
    {
      id: 2,
      user: 'devuser5',
      image: 'https://via.placeholder.com/200',
    },
    {
      id: 3,
      user: 'devuser6',
      image: 'https://via.placeholder.com/200',
    },
  ];

  return (
    <div className="suggestions-section bg-white py-4 px-6">
      <h2 className="text-lg font-bold mb-4">Suggestions for You</h2>
      <div className="grid grid-cols-3 gap-4">
        {sampleSuggestions.map((suggestion) => (
          <div key={suggestion.id} className="suggestion flex flex-col items-center">
            <img src={suggestion.image} alt="User Avatar" className="w-16 h-16 rounded-full mb-2" />
            <p className="text-sm text-gray-800">{suggestion.user}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Suggestions;
