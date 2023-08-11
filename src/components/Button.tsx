import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  testId?: string;
  variant?: 'primary' | 'secondary' | 'tertiary' | 'disabled';
  size?: 'small' | 'medium' | 'large';
  className?: string;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  variant = 'primary',
  size = 'medium',
  testId,
  className = '',
  disabled = false,
}) => {
  const baseStyles = {
    primary:
      'bg-indigo-600 text-white hover:bg-indigo-700 focus:ring-indigo-500',
    secondary:
      'bg-gray-300 text-gray-900 hover:bg-gray-400 focus:ring-gray-500',
    tertiary: 'bg-transparent text-indigo-600 hover:text-indigo-700',
    disabled: 'bg-gray-400 text-gray-900 cursor-not-allowed',
  };

  const sizeStyles = {
    small: 'px-2 py-1 text-sm',
    medium: 'px-3 py-2 text-base',
    large: 'px-4 py-3 text-lg',
  };

  const defaultStyles = 'appearance-none focus:outline-none';
  const combinedClassName = `${defaultStyles} ${baseStyles[variant]} ${sizeStyles[size]} ${className}`;

  return (
    <button
      onClick={onClick}
      className={combinedClassName}
      data-testid={testId}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
