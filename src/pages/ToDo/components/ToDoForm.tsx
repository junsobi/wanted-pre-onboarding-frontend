import React, { useState } from 'react';
import { useTodo } from '../../../context/hook/useTodo';
import Button from '../../../components/Button';
import Input from '../../../components/Input';

const TodoForm: React.FC = () => {
  const [newTodo, setNewTodo] = useState('');
  const { addTodo } = useTodo();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (newTodo.trim()) {
      await addTodo(newTodo);
      setNewTodo('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex justify-between ">
      <div className="relative w-11/12 h-10 mb-4">
        <Input
          type="text"
          value={newTodo}
          testId="new-todo-input"
          onChange={e => setNewTodo(e.target.value)}
          placeholder="해야할일..."
          variant="primary"
          size="medium"
          className="rounded-xl shadow-md pl-10 border w-full h-full"
        />
      </div>
      <div className="flex justify-end w-1/12">
        <Button
          onClick={() => handleSubmit}
          testId="new-todo-add-button"
          variant="secondary"
          size="small"
          className="h-10 rounded shadow-md"
        >
          추가
        </Button>
      </div>
    </form>
  );
};

export default TodoForm;
