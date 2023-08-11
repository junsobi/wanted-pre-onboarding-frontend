import React from 'react';

const LoadingSpinner: React.FC = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-9 h-9 border-t-4 border-black border-solid border-opacity-25 rounded-full animate-spin" />
    </div>
  );
};

export default LoadingSpinner;
