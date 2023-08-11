import React from 'react';
import Button from '../../../components/Button';

const NotAuthenticated: React.FC = () => {
  return (
    <div className="text-center">
      <div className="mb-4">회원가입 또는 로그인하여 할 일을 관리하세요.</div>
      <Button
        variant="primary"
        onClick={() => (window.location.href = '/signin')}
      >
        로그인
      </Button>
      <Button
        variant="secondary"
        className="m-2"
        onClick={() => (window.location.href = '/signup')}
      >
        회원가입
      </Button>
    </div>
  );
};

export default NotAuthenticated;
