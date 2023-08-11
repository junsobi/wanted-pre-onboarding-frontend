import React, { useState } from 'react';
import HomeIconButton from './components/HomeIconButton';
import UserIconButton from './components/UserIconButton';
import UserMenu from './components/UserMenu';

const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(prevState => !prevState);
  };

  return (
    <div>
      {children}
      <div className="fixed top-4 left-4">
        <HomeIconButton />
      </div>
      <div className="fixed top-4 right-4">
        <UserIconButton onToggle={toggleMenu} />
        {isOpen && <UserMenu />}
      </div>
    </div>
  );
};

export default MainLayout;
