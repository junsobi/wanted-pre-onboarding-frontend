import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../../components/Button';

const SignInLink: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="text-center mt-4">
      <span className="text-gray-600 text-sm">이미 회원이신가요?</span>
      <Button
        onClick={() => navigate('/signin')}
        size="small"
        variant="tertiary"
      >
        로그인
      </Button>
    </div>
  );
};

export default SignInLink;
