import { useState, useEffect } from 'react';
import validateInput from '../pages/SignUp/components/validation';

interface InitialValues {
  email: string;
  password: string;
}

const useAuthFormValidation = (initialValues: InitialValues) => {
  const [email, setEmail] = useState<string>(initialValues.email);
  const [password, setPassword] = useState<string>(initialValues.password);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isButtonDisabled, setButtonDisabled] = useState<boolean>(true);

  useEffect(() => {
    const error = validateInput(email, password);
    setErrorMessage(error);
    setButtonDisabled((!email && !password) || Boolean(error));
  }, [email, password]);

  return {
    email,
    setEmail,
    password,
    setPassword,
    errorMessage,
    isButtonDisabled,
  };
};

export default useAuthFormValidation;
