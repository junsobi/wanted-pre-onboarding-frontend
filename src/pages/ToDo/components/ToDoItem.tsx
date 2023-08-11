import React, { useState } from 'react';
import DisplayTodoItem from './DisplayTodoItem';
import EditingTodoItem from './EditingTodoItem';
import { Todo } from '../../../types/types';
import { useTodo } from '../../../context/hook/useTodo';

interface TodoItemProps {
  todo: Todo;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const { editTodo, removeTodo } = useTodo();

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSubmitEdit = async (newTodoValue: string) => {
    await editTodo(todo.id, newTodoValue, todo.isCompleted);
    setIsEditing(false);
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
  };

  const handleDelete = async () => {
    await removeTodo(todo.id);
  };

  const handleToggle = async () => {
    await editTodo(todo.id, todo.todo, !todo.isCompleted);
  };

  return (
    <li
      key={todo.id}
      className="border-b border-gray-200 p-2 flex justify-between items-center gap-4 hover:bg-gray-100"
    >
      {isEditing ? (
        <EditingTodoItem
          todo={todo}
          onToggle={handleToggle}
          initialEditingValue={todo.todo}
          onSubmit={handleSubmitEdit}
          onCancel={handleCancelEdit}
        />
      ) : (
        <DisplayTodoItem
          todo={todo}
          onToggle={handleToggle}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      )}
    </li>
  );
};

export default TodoItem;
