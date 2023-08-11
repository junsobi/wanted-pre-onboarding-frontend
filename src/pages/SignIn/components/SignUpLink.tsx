import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../../components/Button';

const SignUpLink: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="text-center mt-4">
      <span className="text-gray-600 text-sm">아직 회원이 아니세요?</span>
      <Button
        onClick={() => navigate('/signup')}
        size="small"
        variant="tertiary"
      >
        회원가입
      </Button>
    </div>
  );
};

export default SignUpLink;
