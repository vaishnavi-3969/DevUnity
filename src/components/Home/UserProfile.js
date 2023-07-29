import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { motion } from 'framer-motion';
import { FiEdit2, FiMapPin, FiMail, FiLink } from 'react-icons/fi';

const UserProfile = () => {
  const { userId } = useParams();
  const [userData, setUserData] = useState(null);
  const [userPosts, setUserPosts] = useState([]);
  const [userStories, setUserStories] = useState([]);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(`https://randomuser.me/api/?results=1&seed=${userId}`);
        const data = response.data.results[0];
        setUserData(data);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };
    fetchUserData();

    const technologyImageUrls = [
      'https://images.unsplash.com/photo-1671726203454-5d7a5370a9f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxzZWFyY2h8MXx8dGVjaG5vbG9neXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60',
      'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGVjaG5vbG9neXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60',
      'https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dGVjaG5vbG9neXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60',
      'https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dGVjaG5vbG9neXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60',
    ];

    const generateRandomPosts = () => {
      const posts = [];
      const postTypes = ['photo', 'video', 'status'];
      const postContents = [
        'Participating in MLH Hackbattle',
        'Started with Angular JS',
        'Started with React JS',
      ];

      for (let i = 0; i < 6; i++) {
        const randomTypeIndex = Math.floor(Math.random() * postTypes.length);
        const randomContentIndex = Math.floor(Math.random() * postContents.length);
        const randomImageIndex = Math.floor(Math.random() * technologyImageUrls.length);
        const post = {
          id: i + 1,
          type: postTypes[randomTypeIndex],
          content: postContents[randomContentIndex],
          imageUrl: technologyImageUrls[randomImageIndex],
        };
        posts.push(post);
      }
      setUserPosts(posts);
    };

    const generateRandomStories = () => {
      const stories = [];
      const storyImageUrls = [
        'https://images.unsplash.com/photo-1560807707-773fbb6e6d88',
        'https://images.unsplash.com/photo-1560807708-74220e840d9d',
        'https://images.unsplash.com/photo-1560807708-1676517d6ef4',
        'https://images.unsplash.com/photo-1560807708-5cc9e6c1f095',
        'https://images.unsplash.com/photo-1560807707-587b0e5d11d9',
      ];

      for (let i = 0; i < 5; i++) {
        const randomImageIndex = Math.floor(Math.random() * storyImageUrls.length);
        const story = {
          id: i + 1,
          imageUrl: storyImageUrls[randomImageIndex],
        };
        stories.push(story);
      }
      setUserStories(stories);
    };

    generateRandomPosts();
    generateRandomStories();
  }, [userId]);

  if (!userData) {
    return (
      <div className="flex items-center justify-center h-screen">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-semibold text-gray-800"
        >
          Loading...
        </motion.div>
      </div>
    );
  }

  const { name, email, location, login, picture, dob, phone, cell, nat } = userData;

  return (
    <div className="mx-auto py-20 bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 min-h-screen flex items-center justify-center">
      <div className="bg-white rounded-lg p-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="flex items-center justify-center"
        >
          <motion.div
            className="relative w-32 h-32 border-4 border-white overflow-hidden rounded-full shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <img src={picture.large} alt={`${name.first} ${name.last}`} className="w-full h-full object-cover" />
            <motion.div
              className="absolute bottom-0 right-0 bg-white p-1 rounded-full"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.2 }}
            >
              <FiEdit2 className="text-gray-700" />
            </motion.div>
          </motion.div>
        </motion.div>
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-center mt-4"
        >
          <motion.h2 className="text-xl font-semibold">{`${name.first} ${name.last}`}</motion.h2>
          <motion.p className="text-gray-600">@{login.username}</motion.p>
        </motion.div>
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="mt-6 border-t border-gray-300 pt-4"
        >
          <motion.p className="text-gray-700">
            <FiMail className="inline-block mr-2" /> {email}
          </motion.p>
          <motion.p className="text-gray-700">
            <FiMapPin className="inline-block mr-2" /> {`${location.city}, ${location.country}`}
          </motion.p>
          {/* Display other user information as needed */}
        </motion.div>
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="mt-6"
        >
          <h2 className="text-xl font-semibold mb-4">Stories</h2>
          <div className="flex space-x-4 overflow-x-auto">
            {userStories.map((story) => (
              <motion.div
                key={story.id}
                className="rounded-full w-16 h-16 border-4 border-white overflow-hidden shadow-md"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <img
                  src={story.imageUrl}
                  alt={`Story ${story.id}`}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="mt-6"
        >
          <h2 className="text-xl font-semibold mb-4">Posts</h2>
          <div className="grid gap-4 grid-cols-2">
            {userPosts.map((post) => (
              <motion.div
                key={post.id}
                className="border rounded-lg shadow-md p-4"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {post.type === 'photo' && (
                  <img
                    src={post.imageUrl}
                    alt={`Post ${post.id}`}
                    className="w-full h-32 object-cover rounded-lg mb-2"
                  />
                )}
                {post.type === 'video' && (
                  <div className="relative w-full h-32 rounded-lg mb-2 overflow-hidden">
                    <div className="absolute inset-0 bg-black opacity-40" />
                    <video
                      src="https://www.w3schools.com/html/mov_bbb.mp4"
                      controls
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
                <p className="text-gray-800">{post.content}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default UserProfile;
