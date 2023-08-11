import React from 'react';
import MainLayout from '../../layout/MainLayout/MainLayout';
import Authenticated from './components/Authenticated';
import NotAuthenticated from './components/NotAuthenticated';
import MainPageLayout from './components/MainPageLayout';
import { TodoProvider } from '../../context/TodoContext';

function Main() {
  const token = localStorage.getItem('jwt');

  return (
    <TodoProvider>
      <MainLayout>
        <MainPageLayout>
          {!token ? <NotAuthenticated /> : <Authenticated />}
        </MainPageLayout>
      </MainLayout>
    </TodoProvider>
  );
}

export default Main;
