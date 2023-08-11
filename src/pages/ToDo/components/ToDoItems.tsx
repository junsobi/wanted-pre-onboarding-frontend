import React from 'react';
import { useTodo } from '../../../context/hook/useTodo';
import TodoItem from './ToDoItem';

const TodoItems: React.FC = () => {
  const { todos } = useTodo();

  return (
    <ul>
      {todos.map(todo => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
};

export default TodoItems;
