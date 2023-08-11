import React from 'react';

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainPageLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="bg-gray-200  h-screen flex items-center justify-center">
      {children}
    </div>
  );
};

export default MainPageLayout;
