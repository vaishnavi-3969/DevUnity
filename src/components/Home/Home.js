import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useAuth0 } from '@auth0/auth0-react';
import { BsHeart, BsChat } from 'react-icons/bs';
import { FiLogOut } from 'react-icons/fi';
import Logo from '../../assets/logo.png';
import Suggestions from './Suggestions';
import Stories from './Stories';
import { FaHeart } from 'react-icons/fa';

const Home = () => {
  const { isAuthenticated, loginWithRedirect, logout, user } = useAuth0();
  const [showLogin, setShowLogin] = useState(true);
  const [heartFillColor, setHeartFillColor] = useState('blue');

  const samplePosts = [
    {
      id: 1,
      user: 'Pratyaksh',
      image: 'https://images.unsplash.com/photo-1496171367470-9ed9a91ea931?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
      content: 'Just launched my new portfolio website! Check it out!',
    },
    {
      id: 2,
      user: 'Harshvardhan',
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
      content: 'Excited to start working on a new React project! 🚀',
    },
    {
      id: 3,
      user: 'Vaishnavi',
      image: 'https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
      content: 'Spent the weekend learning Python. Feeling accomplished!',
    },
    {
      id: 4,
      user: 'John',
      image: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
      content: 'Working on a cool machine learning project. #AI #ML',
    },
    {
      id: 5,
      user: 'Emily',
      image: 'https://images.unsplash.com/photo-1535303311164-664fc9ec6532?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80',
      content: 'Celebrating the launch of our new app! 🎉 #AppLaunch',
    },
    {
      id: 6,
      user: 'Michael',
      image: 'https://images.unsplash.com/photo-1535223289827-42f1e9919769?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80',
      content: 'Exploring the world of virtual reality! #VR',
    },
    {
      id: 7,
      user: 'Sophia',
      image: 'https://images.unsplash.com/photo-1517433456452-f9633a875f6f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1032&q=80',
      content: 'Had a great time at the hackathon! #Hackathon',
    },
    {
      id: 8,
      user: 'Ethan',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
      content: 'Just got my AWS certification. #AWS #Certified',
    },
    {
      id: 9,
      user: 'Isabella',
      image: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=869&q=80',
      content: 'Learning about blockchain technology. #Blockchain',
    },
    {
      id: 10,
      user: 'William',
      image: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
      content: 'Attending a web development conference. #WebDev #Conference',
    },
    {
      id: 11,
      user: 'Olivia',
      image: 'https://plus.unsplash.com/premium_photo-1679079456083-9f288e224e96?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
      content: 'Building a chat application using React and Firebase. #React #Firebase',
    },
  ];


  const generateRandomLikes = () => Math.floor(Math.random() * 1000) + 1;

  const initialPosts = samplePosts.map((post) => ({
    ...post,
    isLiked: false,
    likes: generateRandomLikes(),
  }));

  const [posts, setPosts] = useState(initialPosts);
  const [postLikes, setPostLikes] = useState(initialPosts.map(() => false));

  const handleLikeClick = (postId, index) => {
    setPostLikes((prevLikes) => {
      const updatedLikes = [...prevLikes];
      updatedLikes[index] = !updatedLikes[index];
      return updatedLikes;
    });

    setHeartFillColor((prevColor) => (prevColor === 'blue' ? 'red' : 'blue'));
  };

  useEffect(() => {
    setPostLikes(initialPosts.map(() => false));
  }, []);
  // Animation for greeting
  const greetingAnimation = {
    initial: { opacity: 0, y: -30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 1, delay: 0.5 },
  };

  // Animation for sparkles
  const sparkleAnimation = {
    initial: { opacity: 0, y: -10 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, delay: 1 },
  };

  return (
    <div>
      {/* Hero */}
      <div className="hero-section bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white py-3 px-10 relative">
        <div className="container mx-auto">
          <div className="text-center">
            <img src={Logo} alt="Logo" className="w-40 md:w-60 h-auto mx-auto mb-6" />
            {showLogin ? (
              <>
                {isAuthenticated && (

                  <motion.h1
                    className="text-2xl md:text-4xl font-bold mb-2 text-gray-900"
                    initial={greetingAnimation.initial}
                    animate={greetingAnimation.animate}
                    transition={greetingAnimation.transition}
                  >
                    <div>
                      Hello {user.name},
                    </div>
                  </motion.h1>
                )}
                {/* <div>            
                <p>{user.email}</p>
                </div> */}
                <motion.h1
                  className="text-4xl md:text-6xl font-bold mb-4 text-yellow-300"
                  initial={greetingAnimation.initial}
                  animate={greetingAnimation.animate}
                  transition={greetingAnimation.transition}
                  style={{ fontFamily: 'Luckiest Guy', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)' }}
                >
                  Welcome to DevUnity
                </motion.h1>
                <motion.p
                  className="text-lg mt-4"
                  initial={greetingAnimation.initial}
                  animate={greetingAnimation.animate}
                  transition={greetingAnimation.transition}
                >
                  A social media platform for developers
                </motion.p>
                {!isAuthenticated && (
                  <motion.button
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    onClick={() => loginWithRedirect()}
                    className="hero-button bg-white text-blue-500 font-bold rounded-full px-6 py-3 mt-6 shadow-lg hover:shadow-xl"
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
                  <span
                    className="text-lg font-bold ml-2"
                    initial={sparkleAnimation.initial}
                    animate={sparkleAnimation.animate}
                    transition={sparkleAnimation.transition}
                  >
                    {user.name}
                  </span>
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


      {/* Stories */}
      {isAuthenticated && <Stories />}

      {/* Suggestions */}
      {isAuthenticated && <Suggestions />}

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
            {posts.map((post, index) => (
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
                {post.image && (
                  <div className="post-image">
                    <img src={post.image} alt="Post Image" className="w-full h-auto rounded-md mt-4" />
                  </div>
                )}
                <div className="post-actions mt-4 flex items-center">
                  <button
                    onClick={() => handleLikeClick(post.id, index)}
                    className={`flex items-center text-${postLikes[index] ? 'red' : 'blue'}-500 font-bold mr-4`}
                  >
                    <FaHeart className="mr-1" />
                    Like ({post.likes})
                  </button>
                  <button className="flex items-center text-blue-500 font-bold">
                    <BsChat className="mr-1" />
                    Comment ({Math.floor(Math.random() * 100)})
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      )}
      <div className='py-10'>

      </div>
    </div>
  );
};

export default Home;
