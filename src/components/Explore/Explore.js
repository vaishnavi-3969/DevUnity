import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useAuth0 } from '@auth0/auth0-react';
import { BsHeart, BsChat } from 'react-icons/bs';
import { FiLogOut } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import Logo from '../../assets/logo.png';

const Explore = () => {
  const { isAuthenticated, loginWithRedirect, logout, user } = useAuth0();
  const [explorePosts, setExplorePosts] = useState([]);

  const sampleExplorePosts = [
    {
      id: 1,
      user: 'JohnDoe',
      content: 'Having a great time exploring the world of React!',
      likes: 20,
      comments: 5,
    },
    {
      id: 2,
      user: 'JaneSmith',
      content: 'Just built my first full-stack app with MERN stack! 🚀',
      likes: 34,
      comments: 12,
    },
    {
      id: 3,
      user: 'TechGuru',
      content: 'Check out these awesome tech gadgets! #TechLife',
      likes: 45,
      comments: 8,
    },
    {
      id: 4,
      user: 'CodingNinja',
      content: 'Working on a secret coding project! Stay tuned for updates...',
      likes: 15,
      comments: 3,
    },
  ];

  useEffect(() => {
    setExplorePosts(sampleExplorePosts);
  }, []);

  return (
    <div>
      {/* Header */}
      <div className="header-section bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white py-3 px-10 relative">
        <div className="container mx-auto">
          <div className="flex items-center justify-between">
            <img src={Logo} alt="Logo" className="w-40 md:w-60 h-auto" />
            {isAuthenticated && (
              <div className="user-info">
                <img src={user.picture} alt="User Avatar" className="w-12 h-12 rounded-full object-cover" />
                <span className="text-lg font-bold ml-2">{user.name}</span>
                <button
                  onClick={() => logout({ returnTo: window.location.origin })}
                  className="text-sm font-semibold text-gray-500 hover:text-gray-800 ml-4"
                >
                  Log Out
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Explore Posts */}
      <div className="explore-section bg-white py-10 px-10">
        <div className="container mx-auto grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {explorePosts.map((post) => (
            <motion.div
              key={post.id}
              whileHover={{ scale: 1.03, y: -5, boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.1)' }}
              className="post bg-gray-100 p-6 rounded-md"
            >
              <div className="post-header flex items-center mb-4">
                <img
                  src={`https://avatars.dicebear.com/api/bottts/${post.user}.svg`}
                  alt="User Avatar"
                  className="w-10 h-10 rounded-full object-cover"
                />
                <span className="text-lg font-semibold ml-2">{post.user}</span>
              </div>
              <p className="post-content text-gray-800">{post.content}</p>
              <div className="post-actions mt-4 flex items-center">
                <button className="flex items-center text-blue-500 font-bold mr-4">
                  <BsHeart className="mr-1" />
                  Like ({post.likes})
                </button>
                <button className="flex items-center text-blue-500 font-bold">
                  <BsChat className="mr-1" />
                  Comment ({post.comments})
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Back to Home Button */}
      <div className="back-to-home">
        <Link to="/">
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full mt-6 ml-6">
            Back to Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Explore;
