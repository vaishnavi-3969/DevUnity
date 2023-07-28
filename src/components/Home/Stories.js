import React from 'react'
import { motion } from 'framer-motion';

const Stories = () => {
    const sampleStories = [
        {
          id: 1,
          user: 'Pratyaksh',
          story: 'Just launched my new portfolio website! Check it out!',
          image: 'https://avatars.dicebear.com/api/bottts/4.svg',
        },
        {
          id: 2,
          user: 'Harshvardhan',
          story: 'Excited to start working on a new React project! 🚀',
          image: 'https://avatars.dicebear.com/api/bottts/62.svg',
        },
        {
          id: 3,
          user: 'Vaishnavi',
          story: 'Spent the weekend learning Python. Feeling accomplished!',
          image: 'https://avatars.dicebear.com/api/bottts/93.svg',
        },
      ];
    
  return (
    <div className="stories-section bg-white py-4 px-6 flex overflow-x-auto">
        {sampleStories.map((story) => (
          <motion.div
            key={story.id}
            whileHover={{ scale: 1.05 }}
            className="story bg-gray-100 rounded-md p-4 mr-4 cursor-pointer"
          >
            <img src={story.image} alt="User Avatar" className="w-24 h-24 rounded-full mb-2" />
            <p className="text-sm text-gray-800">{story.user}</p>
          </motion.div>
        ))}
      </div>
        
  )
}

export default Stories