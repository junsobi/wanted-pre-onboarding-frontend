import React from 'react';

interface Props {
  message: string | null;
}

const ErrorMessage: React.FC<Props> = ({ message }) =>
  message ? <div style={{ color: 'red' }}>{message}</div> : null;

export default ErrorMessage;
