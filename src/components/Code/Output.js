import React from 'react';

const Output = ({ output }) => {
  return (
    <div className="mt-4">
      <h1 className="text-3xl font-semibold">Output:</h1>
      <pre className="bg-gray-800 p-4 mt-2 text-white rounded-lg">
        {output}
      </pre>
    </div>
  );
};

export default Output;
