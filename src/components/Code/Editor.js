import React from 'react';
import SimpleCodeEditor from 'react-simple-code-editor';
import { highlight, languages } from 'prismjs';
import 'prismjs/components/prism-javascript';
import 'prismjs/themes/prism.css';

const Editor = ({ code, onChange }) => {
  const templates = [
    {
      id: 1,
      name: 'React App',
      code: `import React from "react";

function App() {
  return (
    <div>
      <h1>Hello, World!</h1>
    </div>
  );
}

export default App;
`,
    },
    {
      id: 2,
      name: 'Node.js Server',
      code: `const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Hello, World!");
});

server.listen(3000, () => {
  console.log("Server is running on port 3000");
});
`,
    },
  ];

  const handleTemplateClick = (templateCode) => {
    onChange(templateCode);
  };

  const handleOpenWithVSCode = () => {
    console.log('Opening code with VSCode...');
  };

  return (
    <div className="flex bg-gray-900 text-white min-h-screen">
      {/* Sidebar for template gallery */}
      <div className="flex flex-col w-1/4 p-4 border-r border-gray-700">
        <h1 className="text-2xl font-semibold mb-4">Template Gallery</h1>
        {templates.map((template) => (
          <div
            key={template.id}
            className="bg-gray-800 p-3 rounded-lg mb-2 cursor-pointer hover:bg-gray-700"
            onClick={() => handleTemplateClick(template.code)}
          >
            {template.name}
          </div>
        ))}
      </div>

      {/* Code Editor */}
      <div className="w-3/4 p-4">
        <SimpleCodeEditor
          value={code}
          onValueChange={onChange}
          highlight={(code) => highlight(code, languages.javascript, 'javascript')}
          padding={10}
          style={{
            fontFamily: '"Fira code", "Fira Mono", monospace',
            fontSize: 14,
            minHeight: '200px',
            border: '1px solid #ddd',
            borderRadius: '4px',
            background: '#2d2d2d',
            color: '#f8f8f2',
          }}
        />
        <div className="flex justify-end mt-4">
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-lg mr-2"
            onClick={handleOpenWithVSCode}
          >
            Open with VSCode
          </button>
          <button
            className="bg-green-500 text-white px-4 py-2 rounded-lg"
            onClick={handleOpenWithVSCode}
          >
            Run Code
          </button>
        </div>
      </div>
    </div>
  );
};

export default Editor;
