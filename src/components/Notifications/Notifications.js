import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useAuth0 } from '@auth0/auth0-react';
import Logo from '../../assets/notifications.png';
import NotificationSound from '../../assets/notification.wav';

const Notifications = () => {
  const { isAuthenticated, user } = useAuth0();
  const [likes, setLikes] = useState([]);
  const [showNotification, setShowNotification] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      const randomUsernames = [
        'JohnDoe',
        'JaneSmith',
        'Eva123',
        'MarkJ',
        'TechGuru',
        'CodeMaster',
        'WebDev101',
        'FrontendWizard',
        'BackendNinja',
        'DataGeek',
      ];

      const randomLike = {
        id: Date.now(),
        user: randomUsernames[Math.floor(Math.random() * randomUsernames.length)],
        postId: Math.floor(Math.random() * 10) + 1, // Assuming there are 10 posts in the Explore component
      };

      setLikes((prevLikes) => [...prevLikes, randomLike]);
      setShowNotification(true);
      handleNotificationSound();

      setTimeout(() => {
        setShowNotification(false);
      }, 3000);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handleNotificationSound = () => {
    const notificationSound = new Audio(NotificationSound);
    notificationSound.play();
  };

  return (
    <div>
      {/* Header */}
      <div className="header-section bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white py-3 px-10 relative">
        <div className="container mx-auto">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <img src={Logo} alt="Logo" className="w-40 md:w-60 h-auto" />
              <h1 className="text-3xl text-lg font-semibold ml-4">Notifications</h1>
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

      {/* Notification */}
      {showNotification && (
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.5 }}
          className="fixed top-0 right-0 m-4 p-4 bg-white shadow-lg rounded-lg z-50"
        >
          <div className="flex items-center">
            <div className="mr-3">
              <img
                src={`https://avatars.dicebear.com/api/bottts/${likes[likes.length - 1]?.user}.svg`}
                alt="User Avatar"
                className="w-10 h-10 rounded-full object-cover"
              />
            </div>
            <div>
              <p className="font-semibold text-blue-500">{likes[likes.length - 1]?.user}</p>
              <p>liked your post!</p>
            </div>
          </div>
        </motion.div>
      )}

      {/* Likes List */}
      <div className="container mx-auto my-8">
        <h2 className="text-2xl font-semibold mb-4">Likes</h2>
        <ul>
          {likes.map((like) => (
            <li key={like.id} className="mb-2">
              <div className="flex items-center">
                <div className="mr-3">
                  <img
                    src={`https://avatars.dicebear.com/api/bottts/${like.user}.svg`}
                    alt="User Avatar"
                    className="w-10 h-10 rounded-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-semibold text-blue-500">{like.user}</p>
                  <p>liked your post!</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Notifications;
