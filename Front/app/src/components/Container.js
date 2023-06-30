import React from 'react';

const Container = ({ children }) => {
  return (
    <div className="bg-orange-500 rounded-lg shadow-lg p-4">
      {children}
    </div>
  );
};

export default Container;
