import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiX } from 'react-icons/fi';

const Stories = () => {
  const sampleStories = [
    {
      id: 1,
      user: 'Pratyaksh',
      story: 'Just launched my new portfolio website! Check it out!',
      image: 'https://avatars.dicebear.com/api/bottts/4.svg',
      video: 'https://www.youtube.com/embed/L0DWAVbdEaM',
    },
    {
      id: 2,
      user: 'Harshvardhan',
      story: 'Excited to start working on a new React project! 🚀',
      image: 'https://avatars.dicebear.com/api/bottts/62.svg',
      video: 'https://www.youtube.com/embed/do7EzsFcgaI',
    },
    {
      id: 3,
      user: 'Vaishnavi',
      story: 'Spent the weekend learning Python. Feeling accomplished!',
      image: 'https://avatars.dicebear.com/api/bottts/93.svg',
      video: 'https://www.youtube.com/embed/AHKYi0S5Xd4',
    },
    {
        id: 4,
        user: 'John Doe',
        story: 'Working on a new design project. Can\'t wait to share!',
        image: 'https://avatars.dicebear.com/api/bottts/17.svg',
        video: 'https://www.youtube.com/embed/VCUPWv6VWsQ',
      },
      {
        id: 5,
        user: 'Jane Smith',
        story: 'Just finished a coding marathon. Time for a break!',
        image: 'https://avatars.dicebear.com/api/bottts/31.svg',
        video: 'https://www.youtube.com/embed/sfM2j_iJAMg',
      },
      {
        id: 6,
        user: 'Alex Johnson',
        story: 'Exploring the great outdoors. Nature is amazing!',
        image: 'https://avatars.dicebear.com/api/bottts/47.svg',
        video: 'https://www.youtube.com/embed/5VlJ4aT0UmY',
      },    
  ];

  
  const [currentStory, setCurrentStory] = useState(null);

  const handleStoryClick = (videoUrl) => {
    setCurrentStory(videoUrl);
  };

  const handleCloseStory = () => {
    setCurrentStory(null);
  };

  useEffect(() => {
    let timer;
    if (currentStory) {
      timer = setTimeout(() => {
        handleCloseStory();
      }, 10000); 
    }
    return () => clearTimeout(timer);
  }, [currentStory]);

  return (
    <>
      <div>
        <div>
          <h2 className="text-lg font-bold mb-4 px-6 py-4">Stories</h2>
        </div>
        <div className="stories-section bg-white py-4 px-6 flex overflow-x-auto">
          {sampleStories.map((story) => (
            <motion.div
              key={story.id}
              whileHover={{ scale: 1.1 }}
              className="story bg-gray-100 rounded-md p-4 mr-4 cursor-pointer"
              onClick={() => handleStoryClick(story.video)}
            >
              <div className="circle-frame">
                <img src={story.image} alt="User Avatar" className="w-24 h-24 rounded-full mb-2" />
              </div>
              <p className="text-sm text-gray-800">{story.user}</p>
            </motion.div>
          ))}
        </div>
        {currentStory && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="story-video-container fixed top-0 left-0 right-0 bottom-0 z-50 bg-black"
            onClick={handleCloseStory}
          >
            <div className="video-container">
              <iframe
                className="w-full h-full"
                src={currentStory}
                allowFullScreen
                frameBorder="0"
              />
            </div>
            <div className="story-caption">
              <div className="caption-background">
                <p className="caption-text text-white">
                  {sampleStories.find((story) => story.video === currentStory)?.story}
                </p>
              </div>
            </div>
            <div className="close-button" onClick={handleCloseStory}>
              <FiX color="#fff" size={24} />
            </div>
          </motion.div>
        )}
      </div>
    </>
  );
};

export default Stories;
