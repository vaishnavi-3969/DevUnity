import React from 'react';
import { motion } from 'framer-motion';

const templates = [
    {
      id: 1,
      name: 'React App',
      code: 'import React from "react";\n\nfunction App() {\n  return (\n    <div>\n      <h1>Hello, World!</h1>\n    </div>\n  );\n}\n\nexport default App;',
    },
    {
      id: 2,
      name: 'Node.js Server',
      code: 'const http = require("http");\n\nconst server = http.createServer((req, res) => {\n  res.writeHead(200, { "Content-Type": "text/plain" });\n  res.end("Hello, World!");\n});\n\nserver.listen(3000, () => {\n  console.log("Server is running on port 3000");\n});',
    },
    {
      id: 3,
      name: 'Python Flask API',
      code: 'from flask import Flask\n\napp = Flask(__name__)\n\n@app.route("/")\ndef hello():\n    return "Hello, World!"\n\nif __name__ == "__main__":\n    app.run()',
    },
    {
      id: 4,
      name: 'JavaScript Todo App',
      code: 'import React, { useState } from "react";\n\nfunction TodoApp() {\n  const [todos, setTodos] = useState([]);\n\n  // Add todo functionality goes here\n\n  return (\n    <div>\n      <h1>Todo App</h1>\n      {/* Todo list goes here */}\n    </div>\n  );\n}\n\nexport default TodoApp;',
    },
    {
      id: 5,
      name: 'Express.js REST API',
      code: 'const express = require("express");\nconst app = express();\n\n// Add REST API routes and controllers here\n\nconst port = 3000;\napp.listen(port, () => {\n  console.log(`Server is running on port ${port}`);\n});',
    },
    {
      id: 6,
      name: 'Vue.js Single Page App',
      code: '<template>\n  <div>\n    <h1>Hello, World!</h1>\n  </div>\n</template>\n\n<script>\nexport default {\n  name: "App"\n};\n</script>\n\n<style>\n/* Add styles here */\n</style>',
    },
    {
      id: 7,
      name: 'Java Spring Boot API',
      code: 'import org.springframework.boot.SpringApplication;\nimport org.springframework.boot.autoconfigure.SpringBootApplication;\n\n@SpringBootApplication\npublic class MyApp {\n\n    public static void main(String[] args) {\n        SpringApplication.run(MyApp.class, args);\n    }\n\n    // Add REST API endpoints here\n\n}',
    },
    {
      id: 8,
      name: 'HTML Boilerplate',
      code: '<!DOCTYPE html>\n<html>\n<head>\n  <title>Hello, World!</title>\n</head>\n<body>\n  <h1>Hello, World!</h1>\n</body>\n</html>',
    },
    {
      id: 9,
      name: 'Angular Todo App',
      code: 'import { Component } from "@angular/core";\n\n@Component({\n  selector: "app-root",\n  template: `\n    <h1>Todo App</h1>\n    <!-- Todo list goes here -->\n  `\n})\nexport class AppComponent {}',
    },
    {
      id: 10,
      name: 'Ruby on Rails App',
      code: '# Add your Rails code here\n\nclass WelcomeController < ApplicationController\n  def index\n    render plain: "Hello, World!"\n  end\nend',
    },
  ];
  

const TemplateSelector = ({ onSelectTemplate, selectedTemplate }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <ul className="space-y-2">
        {templates.map((template) => (
          <li key={template.id}>
            <button
              onClick={() => onSelectTemplate(template)}
              className={`block text-left w-full px-4 py-2 rounded-lg ${
                selectedTemplate && selectedTemplate.id === template.id
                  ? 'bg-blue-600 text-white'
                  : 'hover:bg-gray-700 text-gray-300'
              }`}
            >
              {template.name}
            </button>
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

export default TemplateSelector;
