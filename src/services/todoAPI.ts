import apiClient from './apiClient';

export const getTodos = async () => {
  return apiClient.get('/todos');
};

export const createTodo = async (todo: string) => {
  return apiClient.post('/todos', { todo });
};

export const updateTodo = async (
  id: number,
  todo: string,
  isCompleted: boolean,
) => {
  return apiClient.put(`/todos/${id}`, { todo, isCompleted });
};

export const deleteTodo = async (id: number) => {
  return apiClient.delete(`/todos/${id}`);
};

export const fetchTodos = () => {
  return getTodos().then(response => response.data);
};
