import React, { createContext, useState, ReactNode, useEffect } from 'react';
import { Todo } from '../types/types';
import {
  createTodo,
  updateTodo,
  deleteTodo,
  getTodos,
} from '../services/todoAPI';

export interface TodoContextType {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
  addTodo: (todo: string) => Promise<void>;
  editTodo: (id: number, todo: string, isCompleted: boolean) => Promise<void>;
  removeTodo: (id: number) => Promise<void>;
}

export const TodoContext = createContext<TodoContextType | undefined>(
  undefined,
);

interface TodoProviderProps {
  children: ReactNode;
}

export const TodoProvider: React.FC<TodoProviderProps> = ({ children }) => {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const response = await getTodos();
        setTodos(response.data);
      } catch (error) {
        console.error('Error fetching todos:', error);
      }
    };

    fetchTodos();
  }, []);

  const addTodo = async (todo: string) => {
    const response = await createTodo(todo);
    setTodos(prev => [...prev, response.data]);
  };

  const editTodo = async (id: number, todo: string, isCompleted: boolean) => {
    const response = await updateTodo(id, todo, isCompleted);
    setTodos(prev => prev.map(t => (t.id === id ? response.data : t)));
  };

  const removeTodo = async (id: number) => {
    await deleteTodo(id);
    setTodos(prev => prev.filter(todo => todo.id !== id));
  };

  return (
    <TodoContext.Provider
      value={{ todos, setTodos, addTodo, editTodo, removeTodo }}
    >
      {children}
    </TodoContext.Provider>
  );
};
