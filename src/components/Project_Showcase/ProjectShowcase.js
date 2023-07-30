import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useAuth0 } from '@auth0/auth0-react';
import Logo from '../../assets/logo.png';
import Confetti from 'react-confetti';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ProjectShowcase = () => {
    const { isAuthenticated, user } = useAuth0();
    const [openSourceProjects, setOpenSourceProjects] = useState([]);
    const [showConfetti, setShowConfetti] = useState(false);
    const [uploadSuccess, setUploadSuccess] = useState(false);
    const [devRankData, setDevRankData] = useState([]);
  
    useEffect(() => {
      const fetchOpenSourceProjects = async () => {
        try {
          const response = await fetch('https://api.github.com/users/vaishnavi-3969/repos');
          const data = await response.json();
          setOpenSourceProjects(data);
        } catch (error) {
          console.error('Error fetching open-source projects:', error);
        }
      };
  
      fetchOpenSourceProjects();
    }, []);
  
    useEffect(() => {
      const fetchDevRankData = async () => {
        try {
          const response = await axios.get('https://randomuser.me/api/?results=10');
          const data = response.data.results.map((user, index) => ({
            id: index + 1,
            name: `${user.name.first} ${user.name.last}`,
            rank: Math.floor(Math.random() * 10) + 1,
            avatar: user.picture.large,
          }));
  
          setDevRankData(data);
        } catch (error) {
          console.error('Error fetching DevRank data:', error);
        }
      };
  
      fetchDevRankData();
    }, []);
  
    const handleUpload = () => {
      setTimeout(() => {
        setUploadSuccess(true);
        setShowConfetti(true);
  
        setTimeout(() => {
          setShowConfetti(false);
        }, 3000);
      }, 2000);
    };
  
    const gradientBackgroundStyle = {
      background: 'linear-gradient(180deg, #1a202c 0%, #2d3748 100%)',
    };
  
    const primaryTextColor = '#e2e8f0';
    const secondaryTextColor = '#cbd5e0';
    const primaryButtonColor = 'linear-gradient(45deg, #48BB78, #81E6D9)';
    const secondaryButtonColor = 'linear-gradient(45deg, #FC8181, #F6AD55)';
  
    const dicebearAPI = 'https://avatars.dicebear.com/api/avataaars/';
  
    const leaderboardData = [
      { id: 1, name: 'Project1', rank: 10 },
      { id: 2, name: 'Project2', rank: 8 },
      { id: 3, name: 'Project3', rank: 6 },
    ];

  return (
    <div style={gradientBackgroundStyle} className="min-h-screen p-20">
      {/* Header */}
      <div className="header-section bg-gradient-to-r from-indigo-600 via-indigo-700 to-indigo-800 text-white py-3 px-10 relative">
        <div className="container mx-auto">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <img src={Logo} alt="Logo" className="w-40 md:w-60 h-auto" />
              <h1 className="text-3xl text-lg font-semibold ml-4">Project Showcase</h1>
            </div>
            {isAuthenticated && (
              <div className="user-info flex items-center">
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

      {/* Open Source Projects */}
      <div className="container mx-auto my-8">
        <h2 className="text-2xl font-semibold mb-4 text-white">Open Source Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {Array.isArray(openSourceProjects) && openSourceProjects.length > 0 ? (
            openSourceProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ type: 'spring', stiffness: 150, damping: 15, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5, boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.2)' }}
                className="bg-gray-800 p-10 rounded-md shadow-md relative overflow-hidden"
              >
                <motion.div
                  className="absolute w-12 h-12 rounded-full bg-white bg-opacity-10 top-2 right-2"
                  style={{
                    backdropFilter: 'blur(8px)',
                  }}
                />
                <motion.div
                  className="absolute w-12 h-12 rounded-full bg-white bg-opacity-10 bottom-2 left-2"
                  style={{
                    backdropFilter: 'blur(8px)',
                  }}
                />
                <h3 className="text-lg font-semibold text-white">{project.name}</h3>
                <p className="text-gray-300 mt-2">{project.description}</p>
                <div className="flex justify-center mt-4 space-x-4">
                  <motion.a
                    href={`https://github.com/vaishnavi-3969/${project.name}/issues/new`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-400 hover:sparkle text-white font-bold py-2 px-4 rounded-full"
                    whileHover={{ scale: 1.05 }}
                    variants={{
                      sparkle: {
                        backgroundImage: primaryButtonColor,
                        boxShadow: '0px 0px 20px 3px rgba(255, 255, 255, 1)',
                      },
                    }}
                  >
                    Open Issue
                  </motion.a>
                 <Link to='https://github.com/vaishnavi-3969/Garden-Connect'>
                 <motion.button
                    className="bg-yellow-400 hover:sparkle text-white font-bold py-2 px-4 rounded-full"
                    whileHover={{ scale: 1.05 }}
                    variants={{
                      sparkle: {
                        backgroundImage: secondaryButtonColor,
                        boxShadow: '0px 0px 20px 3px rgba(255, 255, 255, 1)',
                      },
                    }}
                  >
                    View
                  </motion.button>
                 </Link>
                </div>
              </motion.div>
            ))
          ) : (
            <p className="text-white">No open source projects found.</p>
          )}
        </div>
      </div>

       {/* DevRank */}
       <div className="container mx-auto my-8">
        <h2 className="text-2xl font-semibold mb-4 text-white">DevRank</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {devRankData.map((user, index) => (
            <div
              key={user.id}
              className="bg-gray-800 p-10 rounded-md shadow-md relative overflow-hidden text-center"
            >
              <motion.div
                className="absolute w-12 h-12 rounded-full bg-white bg-opacity-10 top-2 right-2"
                style={{
                  backdropFilter: 'blur(8px)',
                }}
              />
              <motion.div
                className="absolute w-12 h-12 rounded-full bg-white bg-opacity-10 bottom-2 left-2"
                style={{
                  backdropFilter: 'blur(8px)',
                }}
              />
              <img
                src={user.avatar}
                alt="User Avatar"
                className="w-20 h-20 rounded-full object-cover mx-auto mb-3"
              />
              <h3 className="text-lg font-semibold text-white">{user.name}</h3>
              <p className="text-gray-300 mt-2">Rank: {user.rank}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Leaderboard */}
      <div className="container mx-auto my-8">
        <h2 className="text-2xl font-semibold mb-4 text-white">Leaderboard</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {leaderboardData.map((project, index) => (
            <div
              key={project.id}
              className="bg-gray-800 p-10 rounded-md shadow-md relative overflow-hidden text-center"
            >
              <motion.div
                className="absolute w-12 h-12 rounded-full bg-white bg-opacity-10 top-2 right-2"
                style={{
                  backdropFilter: 'blur(8px)',
                }}
              />
              <motion.div
                className="absolute w-12 h-12 rounded-full bg-white bg-opacity-10 bottom-2 left-2"
                style={{
                  backdropFilter: 'blur(8px)',
                }}
              />
              <h3 className="text-lg font-semibold text-white">{project.name}</h3>
              <p className="text-gray-300 mt-2">Rank: {project.rank}</p>
            </div>
          ))}
        </div>
      </div>


      {showConfetti && (
        <Confetti
          width={window.innerWidth}
          height={window.innerHeight}
          recycle={false}
        />
      )}

      {uploadSuccess && (
        <div className="fixed bottom-0 right-0 m-4 p-4 bg-white shadow-lg rounded-lg z-50">
          <div className="flex items-center">
            <div className="mr-3">
              {user && user.picture && (
                <img
                  src={user.picture}
                  alt="User Avatar"
                  className="w-10 h-10 rounded-full object-cover"
                />
              )}
            </div>
            <div>
              {user && user.name && (
                <>
                  <p className="font-semibold text-blue-500">{user.name}</p>
                  <p>Successfully uploaded your post!</p>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectShowcase;
