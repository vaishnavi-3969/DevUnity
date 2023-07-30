import React from 'react';
import { motion } from 'framer-motion';
import { FaPlay, FaRegWindowMaximize } from 'react-icons/fa';

const CodeEditor = ({ template }) => {
  const handleRunCode = () => {
    console.log('Running the code...');
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-gray-800 rounded-lg p-4 mt-4 md:mt-8"
    >
      <div className="flex items-center justify-between mb-4">
        {template ? (
          <span className="text-lg font-semibold text-white">{template.name}</span>
        ) : (
          <span className="text-lg font-semibold text-white">Code Editor</span>
        )}
        {template ? (
          <button className="flex items-center bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded-md">
            <FaRegWindowMaximize className="mr-2" />
            Fullscreen
          </button>
        ) : (
          <div className="flex space-x-4">
            <button
              onClick={handleRunCode}
              className="flex items-center bg-green-600 hover:bg-green-700 text-white px-3 py-2 rounded-md"
            >
              <FaPlay className="mr-2" />
              Run
            </button>
            <button className="flex items-center bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded-md">
              <FaRegWindowMaximize className="mr-2" />
              Fullscreen
            </button>
          </div>
        )}
      </div>
      {template ? (
        <div className="bg-gray-700 w-full h-40 md:h-64 px-4 py-2 rounded-md text-white overflow-auto">
          <pre className="whitespace-pre-wrap">{template.code}</pre>
        </div>
      ) : (
        <textarea
          className="bg-gray-700 w-full h-40 md:h-64 px-4 py-2 rounded-md text-white"
          placeholder="Write your code here..."
        />
      )}
    </motion.div>
  );
};

export default CodeEditor;
