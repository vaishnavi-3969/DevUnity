import React, { useState } from 'react';
import Editor from './Editor';
import Output from './Output';

const Code = () => {
  const initialCode = `import React from "react";

function Code() {
  return (
    <div>
      <h1>Hello, World!</h1>
    </div>
  );
}

export default Code;
`;

  const [code, setCode] = useState(initialCode);
  const [output, setOutput] = useState('');

  const handleCodeChange = (newCode) => {
    setCode(newCode);
  };

  const handleRunCode = () => {
    // Your code to run the code goes here
    // For a basic example, you can use eval() but keep in mind it's not secure
    try {
      const result = eval(code);
      setOutput(result);
    } catch (error) {
      setOutput(error.toString());
    }
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen p-4">
      <div className="mb-4">
        <h1 className="text-3xl font-semibold">Code Editor</h1>
        <Editor code={code} onChange={handleCodeChange} />
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-lg mt-2"
          onClick={handleRunCode}
        >
          Run Code
        </button>
      </div>
      <Output output={output} />
    </div>
  );
};

export default Code;
