import React from 'react';
import TodoForm from './components/ToDoForm';
import MainLayout from '../../layout/MainLayout/MainLayout';
import TodoLayout from './components/ToDoLayout';
import { TodoProvider } from '../../context/TodoContext';
import TodoItems from './components/ToDoItems';

const TodoPage: React.FC = () => {
  return (
    <TodoProvider>
      <MainLayout>
        <TodoLayout>
          {/* TODO 입력 부분 */}
          <TodoForm />

          {/* TODO 리스트 출력 부분 */}
          <TodoItems />
        </TodoLayout>
      </MainLayout>
    </TodoProvider>
  );
};

export default TodoPage;
