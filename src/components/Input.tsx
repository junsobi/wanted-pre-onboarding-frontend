import React from 'react';

interface InputProps {
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  testId?: string; // 선택적 속성
  className?: string;
  variant?: 'primary' | 'secondary';
  size?: 'small' | 'medium' | 'large';
}

const Input: React.FC<InputProps> = ({
  type,
  value,
  onChange,
  placeholder,
  testId,
  className = '',
  variant = 'primary',
  size = 'medium',
}) => {
  // variant와 size를 기반으로 기본 스타일 지정
  const baseStyles = {
    primary:
      'relative border border-gray-300 text-gray-900 focus:ring-indigo-500 focus:border-indigo-500  focus:z-10 sm:text-sm',
    secondary: 'border border-gray-500 text-gray-700 ',
  };

  const sizeStyles = {
    small: 'px-2 py-1 text-sm',
    medium: 'px-3 py-2 text-base',
    large: 'px-4 py-3 text-lg',
  };

  const defaultStyles = 'appearance-none focus:outline-none';
  const combinedClassName = `${defaultStyles} ${baseStyles[variant]} ${sizeStyles[size]} ${className}`;

  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      data-testid={testId}
      className={combinedClassName}
    />
  );
};

export default Input;
