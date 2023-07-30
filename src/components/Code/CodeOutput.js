import React from 'react';
import { motion } from 'framer-motion';
import { FaTimes } from 'react-icons/fa';

const CodeOutput = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-gray-800 rounded-lg p-4 mt-4 md:mt-8"
    >
      <div className="flex items-center justify-between mb-4">
        <span className="text-lg font-semibold text-white">Output</span>
        <button className="flex items-center bg-red-600 hover:bg-red-700 text-white px-3 py-2 rounded-md">
          <FaTimes className="mr-2" />
          Close
        </button>
      </div>
      <div className="bg-black w-full h-40 md:h-64 px-4 py-2 rounded-md text-white overflow-auto">
      </div>
    </motion.div>
  );
};

export default CodeOutput;
