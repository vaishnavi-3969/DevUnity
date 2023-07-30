import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const DevReels = () => {
  const [videos, setVideos] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    const staticData = [
        {
          id: 1,
          title: 'Introduction to React',
          description: 'Learn the basics of React and how to build components.',
          videoUrl: 'https://www.youtube.com/watch?v=SqcY0GlETPk&pp=ygUIcmVhY3QganM%3D',
        },
        {
          id: 2,
          title: 'Node.js Crash Course',
          description: 'A quick crash course on Node.js and building APIs.',
          videoUrl: 'https://www.youtube.com/watch?v=gY5sGvq-8h8&pp=ygUIcmVhY3QganM%3D',
        },
        {
          id: 3,
          title: 'JavaScript Fundamentals',
          description: 'Learn the fundamentals of JavaScript programming language.',
          videoUrl: 'https://www.youtube.com/watch?v=gY5sGvq-8h8&pp=ygUIcmVhY3QganM%3D',
        },
        {
          id: 4,
          title: 'Python for Beginners',
          description: 'An introduction to Python programming for beginners.',
          videoUrl: 'https://www.youtube.com/watch?v=gY5sGvq-8h8&pp=ygUIcmVhY3QganM%3D',
        },
        {
          id: 5,
          title: 'HTML and CSS Basics',
          description: 'Learn the basics of HTML and CSS for web development.',
          videoUrl: 'https://www.youtube.com/watch?v=gY5sGvq-8h8&pp=ygUIcmVhY3QganM%3D',
        },
        {
          id: 6,
          title: 'React Native Tutorial',
          description: 'Build mobile apps using React Native framework.',
          videoUrl: 'https://www.youtube.com/watch?v=gY5sGvq-8h8&pp=ygUIcmVhY3QganM%3D',
        },
        {
          id: 7,
          title: 'Getting Started with Express.js',
          description: 'Learn how to create a basic server using Express.js.',
          videoUrl: 'https://www.youtube.com/watch?v=gY5sGvq-8h8&pp=ygUIcmVhY3QganM%3D',
        },
        {
          id: 8,
          title: 'Introduction to Vue.js',
          description: 'An introduction to Vue.js front-end framework.',
          videoUrl: 'https://www.youtube.com/watch?v=gY5sGvq-8h8&pp=ygUIcmVhY3QganM%3D',
        },
        {
          id: 9,
          title: 'Django Web Development',
          description: 'Build web applications using Django framework.',
          videoUrl: 'https://www.youtube.com/watch?v=gY5sGvq-8h8&pp=ygUIcmVhY3QganM%3D',
        },
        {
          id: 10,
          title: 'Java Programming Basics',
          description: 'Learn the basics of Java programming language.',
          videoUrl: 'https://www.youtube.com/watch?v=gY5sGvq-8h8&pp=ygUIcmVhY3QganM%3D',
        },
        {
          id: 11,
          title: 'Responsive Web Design',
          description: 'Learn how to create responsive web designs using CSS media queries.',
          videoUrl: 'https://www.youtube.com/watch?v=gY5sGvq-8h8&pp=ygUIcmVhY3QganM%3D',
        },
        {
          id: 12,
          title: 'JavaScript ES6 Features',
          description: 'Explore the new features introduced in ECMAScript 6 (ES6).',
          videoUrl: 'https://www.youtube.com/watch?v=gY5sGvq-8h8&pp=ygUIcmVhY3QganM%3D',
        },
        {
          id: 13,
          title: 'Python Data Science',
          description: 'An introduction to data science with Python programming.',
          videoUrl: 'https://www.youtube.com/watch?v=gY5sGvq-8h8&pp=ygUIcmVhY3QganM%3D',
        },
        {
          id: 14,
          title: 'Creating RESTful APIs with Flask',
          description: 'Learn how to build RESTful APIs using the Flask framework.',
          videoUrl: 'https://www.youtube.com/watch?v=gY5sGvq-8h8&pp=ygUIcmVhY3QganM%3D',
        },
        {
          id: 15,
          title: 'Introduction to Angular',
          description: 'Get started with Angular and build modern web applications.',
          videoUrl: 'https://www.youtube.com/watch?v=gY5sGvq-8h8&pp=ygUIcmVhY3QganM%3D',
        },
        {
          id: 16,
          title: 'CSS Flexbox Layout',
          description: 'Learn how to use CSS Flexbox for flexible page layouts.',
          videoUrl: 'https://www.youtube.com/watch?v=gY5sGvq-8h8&pp=ygUIcmVhY3QganM%3D',
        },
        {
          id: 17,
          title: 'Introduction to SQL',
          description: 'Get started with SQL and learn how to work with databases.',
          videoUrl: 'https://www.youtube.com/watch?v=gY5sGvq-8h8&pp=ygUIcmVhY3QganM%3D',
        },
        {
          id: 18,
          title: 'Data Visualization with D3.js',
          description: 'Learn how to create interactive data visualizations using D3.js.',
          videoUrl: 'https://www.youtube.com/watch?v=gY5sGvq-8h8&pp=ygUIcmVhY3QganM%3D',
        },
        {
          id: 19,
          title: 'Introduction to Machine Learning',
          description: 'An overview of machine learning algorithms and concepts.',
          videoUrl: 'https://www.youtube.com/watch?v=gY5sGvq-8h8&pp=ygUIcmVhY3QganM%3D',
        },
        {
          id: 20,
          title: 'React Hooks Tutorial',
          description: 'Learn how to use React hooks for state management in React applications.',
          videoUrl: 'https://www.youtube.com/watch?v=gY5sGvq-8h8&pp=ygUIcmVhY3QganM%3D',
        },
      ];

    setVideos(staticData);
  }, []);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const filteredVideos = videos.filter((video) => {
    if (filter === 'all') {
      return video.title.toLowerCase().includes(searchTerm.toLowerCase());
    } else if (filter === 'react') {
      return video.title.toLowerCase().includes(searchTerm.toLowerCase()) && video.tags.includes('react');
    } else if (filter === 'nodejs') {
      return video.title.toLowerCase().includes(searchTerm.toLowerCase()) && video.tags.includes('nodejs');
    } else {
      return false;
    }
  });

  return (
    <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-600 text-white py-8">
      <div className="container mx-auto px-4 md:px-8">
        <h1 className="text-3xl font-semibold mb-4">DevReels</h1>
        <div className="flex items-center mb-4">
          <input
            type="text"
            placeholder="Search videos..."
            value={searchTerm}
            onChange={handleSearchChange}
            className="bg-gray-800 text-white px-4 py-2 rounded-lg w-1/2 mr-4 focus:outline-none"
          />
          <select
            value={filter}
            onChange={handleFilterChange}
            className="bg-gray-800 text-white px-4 py-2 rounded-lg focus:outline-none"
          >
            <option value="all">All</option>
            <option value="react">React</option>
            <option value="nodejs">Node.js</option>
          </select>
        </div>
        <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {filteredVideos.map((video) => (
            <motion.div
              key={video.id}
              className="relative overflow-hidden rounded-lg cursor-pointer hover:scale-105 transform transition-all duration-300"
            >
              <a
                href={video.videoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute top-0 left-0 w-full h-full"
              ></a>
              <div className="p-4 text-white">
                <h2 className="text-xl font-semibold mb-2">{video.title}</h2>
                <p className="text-gray-500">{video.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DevReels;
