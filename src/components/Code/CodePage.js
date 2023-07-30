import React, { useState } from 'react';
import { motion } from 'framer-motion';
import CodeEditor from './CodeEditor';
import CodeOutput from './CodeOutput';
import Navbar from '../Home/Navbar';
import TemplateSelector from './TemplateSelector';

const CodePage = () => {
  const [selectedTemplate, setSelectedTemplate] = useState(null);

  const handleTemplateSelect = (template) => {
    setSelectedTemplate(template);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gray-900 text-white"
    >
      <Navbar />
      <div className="container mx-auto px-4 md:px-8 py-8 flex">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="w-1/4 pr-4 border-r border-gray-700"
        >
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">Template Gallery</h2>
          <TemplateSelector onSelectTemplate={handleTemplateSelect} selectedTemplate={selectedTemplate} />
        </motion.div>
        <div className="w-3/4 pl-4">
          {selectedTemplate ? (
            <motion.h1
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-3xl md:text-4xl font-semibold mb-4"
            >
              {selectedTemplate.name}
            </motion.h1>
          ) : (
            <motion.h1
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-3xl md:text-4xl font-semibold mb-4"
            >
              Code Editor
            </motion.h1>
          )}
          <CodeEditor template={selectedTemplate} />
          <motion.h1
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-3xl md:text-4xl font-semibold mt-8 mb-4"
          >
            Code Output
          </motion.h1>
          <CodeOutput />
        </div>
      </div>
    </motion.div>
  );
};

export default CodePage;
