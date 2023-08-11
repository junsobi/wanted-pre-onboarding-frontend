import React from 'react';
import { useNavigate } from 'react-router-dom';
import { AxiosError } from 'axios';
import Input from '../../../components/Input';
import Button from '../../../components/Button';
import { signIn } from '../../../services/authAPI';
import ErrorMessage from '../../../components/ErrorMessage';
import useAuthFormValidation from '../../../hooks/useAuthFormValidation';
import validateInput from '../../SignUp/components/validation';
import { setAuthToken } from '../../../services/apiClient';
import { ErrorResponse } from '../../../types/types';

const SignInForm: React.FC = () => {
  const {
    email,
    setEmail,
    password,
    setPassword,
    errorMessage,
    isButtonDisabled,
  } = useAuthFormValidation({ email: '', password: '' });

  const navigate = useNavigate();

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    const error = validateInput(email, password);

    if (!error) {
      try {
        const response = await signIn(email, password);
        const token = response.data.access_token;
        localStorage.setItem('jwt', token);
        setAuthToken(token);
        navigate('/todo');
      } catch (error) {
        const axiosError = error as AxiosError<ErrorResponse>;
        const message =
          axiosError.response?.data?.message || '로그인에 실패했습니다.';
        alert(message);
      }
    }
  };

  return (
    <form onSubmit={handleSignIn} className="mt-8 space-y-6">
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
          onClick={handleSignIn}
          testId="signin-button"
          disabled={isButtonDisabled}
          variant={isButtonDisabled ? 'disabled' : 'primary'}
          size="medium"
          className="relative w-full rounded-md"
        >
          로그인
        </Button>
      </div>

      <div className="h-1 text-center">
        <ErrorMessage message={errorMessage} />
      </div>
    </form>
  );
};

export default SignInForm;
