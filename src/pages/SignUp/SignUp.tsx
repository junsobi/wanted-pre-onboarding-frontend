import React from 'react';
import SignUpForm from './components/SignUpForm';
import SignInLink from './components/SignInLink';
import SignUpLayout from './components/SignUpLayout';

const SignUp: React.FC = () => {
  return (
    <SignUpLayout>
      <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
        회원가입
      </h2>
      <SignUpForm />
      <SignInLink />
    </SignUpLayout>
  );
};

export default SignUp;
