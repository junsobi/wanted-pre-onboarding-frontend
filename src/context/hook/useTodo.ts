import { useContext } from 'react';
import { TodoContext, TodoContextType } from '../TodoContext';

export const useTodo = (): TodoContextType => {
  const context = useContext(TodoContext);
  if (!context) {
    throw new Error('useTodo must be used within TodoProvider');
  }
  return context;
};
