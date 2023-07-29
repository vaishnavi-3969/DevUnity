import React, { useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import Logo from '../../assets/uploads.png';
import Confetti from 'react-confetti';
import { motion } from 'framer-motion';

const Upload = () => {
  const { isAuthenticated, user } = useAuth0();
  const [showConfetti, setShowConfetti] = useState(false);
  const [uploadSuccess, setUploadSuccess] = useState(false);
  const [content, setContent] = useState('');
  const [image, setImage] = useState(null);
  const [caption, setCaption] = useState('');
  const [hashtags, setHashtags] = useState('');

  const handleUpload = () => {
    setTimeout(() => {
      setUploadSuccess(true);
      setShowConfetti(true);

      setContent('');
      setImage(null);
      setCaption('');
      setHashtags('');

      setTimeout(() => {
        setShowConfetti(false);
      }, 3000);
    }, 2000);
  };

  return (
    <div>
      {/* Header */}
      <div className="header-section bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white py-3 px-10 relative">
        <div className="container mx-auto">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <img src={Logo} alt="Logo" className="w-40 md:w-60 h-auto" />
              <h1 className="text-3xl text-lg font-semibold ml-4">Upload</h1>
            </div>
            {isAuthenticated && (
              <div className="user-info">
                <img
                  src={user.picture}
                  alt="User Avatar"
                  className="w-12 h-12 rounded-full object-cover"
                />
                <span className="text-lg font-bold ml-2">{user.name}</span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Upload Content */}
      <div className="container mx-auto my-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Upload Content</h2>
          {/* Image Upload */}
          <input
            type="file"
            accept="image/*"
            className="mb-4"
            onChange={(e) => setImage(e.target.files[0])}
          />
          {/* Caption */}
          <input
            type="text"
            placeholder="Write your caption..."
            value={caption}
            onChange={(e) => setCaption(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300 mb-4"
          />
          {/* Hashtags */}
          <input
            type="text"
            placeholder="Add hashtags (comma-separated)..."
            value={hashtags}
            onChange={(e) => setHashtags(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300 mb-4"
          />
          <button
            onClick={handleUpload}
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full mt-4"
          >
            Upload
          </button>
        </div>
      </div>

      {/* Confetti */}
      {showConfetti && (
        <Confetti
          width={window.innerWidth}
          height={window.innerHeight}
          recycle={false}
        />
      )}

      {/* Upload Success Message */}
      {uploadSuccess && (
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.5 }}
          className="fixed bottom-0 right-0 m-4 p-4 bg-white shadow-lg rounded-lg z-50"
        >
          <div className="flex items-center">
            <div className="mr-3">
              <img
                src={`https://avatars.dicebear.com/api/bottts/${user.name}.svg`}
                alt="User Avatar"
                className="w-10 h-10 rounded-full object-cover"
              />
            </div>
            <div>
              <p className="font-semibold text-blue-500">{user.name}</p>
              <p>Successfully uploaded your post!</p>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default Upload;
