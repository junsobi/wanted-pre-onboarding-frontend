import apiClient from './apiClient';

export const signUp = async (email: string, password: string) => {
  return apiClient.post('/auth/signup', { email, password });
};

export const signIn = async (email: string, password: string) => {
  return apiClient.post('/auth/signin', { email, password });
};
