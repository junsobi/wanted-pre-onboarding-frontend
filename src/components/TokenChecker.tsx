import React, { useEffect, ReactNode, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { setAuthToken } from '../services/apiClient';
import LoadingSpinner from './LoadingSpinner';

interface TokenCheckerProps {
  children?: ReactNode;
}

const TokenChecker: React.FC<TokenCheckerProps> = ({ children }) => {
  const [isTokenSet, setIsTokenSet] = useState<null | boolean>(null);
  const navigate = useNavigate();

  const checkToken = (): boolean => {
    const token = localStorage.getItem('jwt');
    if (!token) return false;

    const payloadEncoded = token.split('.')[1];
    const payload = JSON.parse(atob(payloadEncoded));

    const expirationTime = payload.exp * 1000;
    const now = Date.now();

    return expirationTime >= now;
  };

  //토큰 세팅
  useEffect(() => {
    const token = localStorage.getItem('jwt');
    if (token) {
      if (checkToken()) {
        setAuthToken(token);
        setIsTokenSet(true);
      } else {
        localStorage.removeItem('jwt');
        setIsTokenSet(false);
      }
    } else {
      setIsTokenSet(false);
    }
  }, [isTokenSet]);

  //리다이렉트 로직

  useEffect(() => {
    const isAuthenticated = Boolean(localStorage.getItem('jwt'));
    const tokenExpired = !checkToken();

    if (isAuthenticated) {
      if (tokenExpired) {
        localStorage.removeItem('jwt');
        if (window.location.pathname === '/todo') {
          navigate('/signin');
        }
      } else {
        if (['/signin', '/signup'].includes(window.location.pathname)) {
          navigate('/todo');
        }
      }
    } else {
      if (window.location.pathname === '/todo') {
        navigate('/signin');
      }
    }
  }, [navigate]);

  if (isTokenSet === null) {
    return <LoadingSpinner />;
  }

  return <>{children}</>;
};

export default TokenChecker;
