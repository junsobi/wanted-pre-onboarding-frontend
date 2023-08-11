import React from 'react';
import useUserMenu from '../hooks/useUserMenu';

const HomeIconButton: React.FC = () => {
  const { handleNavigateHome } = useUserMenu();

  return (
    <button onClick={handleNavigateHome} className="text-xl relative z-10">
      🏠
    </button>
  );
};

export default HomeIconButton;
