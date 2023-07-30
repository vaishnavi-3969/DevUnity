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
    <div>
      <Editor code={code} onChange={handleCodeChange} />
      <button onClick={handleRunCode}>Run Code</button>
      <Output output={output} />
    </div>
  );
};

export default Code;
