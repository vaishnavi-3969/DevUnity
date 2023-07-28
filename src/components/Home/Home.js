import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useAuth0 } from '@auth0/auth0-react';
import { BsHeart, BsChat } from 'react-icons/bs';
import { FiLogOut } from 'react-icons/fi'; 
import Logo from '../../assets/logo.png';

const Home = () => {
  const { isAuthenticated, loginWithRedirect, logout, user } = useAuth0();
  const [posts, setPosts] = useState([]);
  const [showLogin, setShowLogin] = useState(true);

  const samplePosts = [
    {
      id: 1,
      user: 'Pratyaksh',
      content: 'Just launched my new portfolio website! Check it out!',
    },
    {
      id: 2,
      user: 'Harshvardhan',
      content: 'Excited to start working on a new React project! 🚀',
    },
    {
      id: 3,
      user: 'Vaishnavi',
      content: 'Spent the weekend learning Python. Feeling accomplished!',
    },
  ];

  useEffect(() => {
    setPosts(samplePosts);
  }, []);

  return (
    <div>
      {/* Hero */}
      <div className="hero-section bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white py-20 px-10 relative">
        <div className="container mx-auto">
          <div className="text-center">
            <img src={Logo} alt="Logo" className="w-40 md:w-60 h-auto mx-auto mb-6" />
            {showLogin ? (
              <>
                <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to DevUnity</h1>
                <p className="text-lg mt-4">A social media platform for developers</p>
                {!isAuthenticated && (
                  <motion.button
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    onClick={() => loginWithRedirect()}
                    className="hero-button bg-white text-blue-500 font-bold rounded-full px-6 py-3 mt-6 shadow-lg"
                  >
                    Log In
                  </motion.button>
                )}
              </>
            ) : (
              isAuthenticated && (
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  className="user-info"
                >
                  <img src={user.picture} alt="User Avatar" className="w-12 h-12 rounded-full inline-block" />
                  <span className="text-lg font-bold ml-2">{user.name}</span>
                  <button
                    onClick={() => logout({ returnTo: window.location.origin })}
                    className="text-sm font-semibold text-gray-500 hover:text-gray-800 ml-4"
                  >
                    Log Out
                  </button>
                </motion.div>
              )
            )}
          </div>
        </div>
      </div>

      {/* Posts */}
      {isAuthenticated && (
        <div className="posts-section bg-white py-10 px-10">
          <button
            onClick={() => logout({ returnTo: window.location.origin })}
            className="text-sm font-semibold text-gray-500 hover:text-gray-800 absolute top-6 right-6"
          >
            <FiLogOut className="w-6 h-6" />
          </button>
          <div className="container mx-auto grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <motion.div
                key={post.id}
                whileHover={{ scale: 1.03, shadow: '0px 6px 12px rgba(0, 0, 0, 0.1)' }}
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
                    Like
                  </button>
                  <button className="flex items-center text-blue-500 font-bold">
                    <BsChat className="mr-1" />
                    Comment
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
