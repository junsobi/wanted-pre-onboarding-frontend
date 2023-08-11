import React from 'react';
import { useNavigate } from 'react-router-dom';
import validateInput from './validation';
import { registerUser } from './registerUser';
import Input from '../../../components/Input';
import Button from '../../../components/Button';
import ErrorMessage from '../../../components/ErrorMessage';
import useAuthFormValidation from '../../../hooks/useAuthFormValidation';

const SignUpForm: React.FC = () => {
  const {
    email,
    setEmail,
    password,
    setPassword,
    errorMessage,
    isButtonDisabled,
  } = useAuthFormValidation({ email: '', password: '' });

  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const error = validateInput(email, password);

    if (!error) {
      registerUser(email, password)
        .then(() => {
          alert('회원가입에 성공했습니다.');
          navigate('/signin');
        })
        .catch(error => {
          alert(error.message);
        });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mt-8 space-y-6">
      <div className="rounded-md shadow-sm -space-y-px">
        <Input
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          placeholder="이메일"
          testId="email-input"
          variant="primary"
          size="medium"
          className="w-full rounded-t-md"
        />
        <Input
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          placeholder="비밀번호"
          testId="password-input"
          className="w-full rounded-b-md"
          variant="primary"
          size="medium"
        />
      </div>

      <div>
        <Button
          onClick={handleSubmit}
          testId="signup-button"
          disabled={isButtonDisabled}
          variant={isButtonDisabled ? 'disabled' : 'primary'}
          size="medium"
          className="relative w-full rounded-md"
        >
          회원가입
        </Button>
      </div>
      <div className="h-1 text-center">
        <ErrorMessage message={errorMessage} />
      </div>
    </form>
  );
};

export default SignUpForm;
