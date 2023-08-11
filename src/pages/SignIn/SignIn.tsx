import React from 'react';
import SignInForm from './components/SignInForm';
import SignUpLink from './components/SignUpLink';
import SignInLayout from './components/SignInLayout';

const SignIn: React.FC = () => {
  return (
    <SignInLayout>
      <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
        로그인
      </h2>
      <SignInForm />
      <SignUpLink />
    </SignInLayout>
  );
};

export default SignIn;
