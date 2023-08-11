import { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../../../constants/routes';

const useUserMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const isLoggedIn = Boolean(localStorage.getItem('jwt'));
  const navigate = useNavigate();

  const handleNavigateHome = useCallback(() => {
    navigate(ROUTES.HOME);
  }, [navigate]);

  const handleLogout = useCallback(() => {
    localStorage.removeItem('jwt');
    setIsOpen(false);
    window.location.href = ROUTES.HOME;
  }, []);

  const toggleMenu = useCallback(() => {
    setIsOpen(prevState => !prevState);
  }, []);

  return {
    isOpen,
    isLoggedIn,
    handleNavigateHome,
    handleLogout,
    toggleMenu,
  };
};

export default useUserMenu;
