import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../../../constants/routes';
import Button from '../../../components/Button';
import useUserMenu from '../hooks/useUserMenu';

const UserMenu: React.FC = () => {
  const { isLoggedIn, handleLogout } = useUserMenu();
  const navigate = useNavigate();

  return (
    <div className="w-32 mt-2 border rounded shadow-lg p-4 bg-white transition-transform transform origin-top absolute top-full right-0 z-10">
      {isLoggedIn ? (
        <Button variant="primary" className="w-24" onClick={handleLogout}>
          로그아웃
        </Button>
      ) : (
        <>
          <Button
            variant="primary"
            className="w-24 mb-2"
            onClick={() => navigate(ROUTES.SIGNIN)}
          >
            로그인
          </Button>
          <Button
            variant="primary"
            className="w-24"
            onClick={() => navigate(ROUTES.SIGNUP)}
          >
            회원가입
          </Button>
        </>
      )}
    </div>
  );
};

export default UserMenu;
