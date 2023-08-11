import React from 'react';
import Button from '../../../components/Button';
import { useTodo } from '../../../context/hook/useTodo';

const Authenticated: React.FC = () => {
  const { todos } = useTodo();

  const incompleteTodosCount = todos.filter(todo => !todo.isCompleted).length;

  return (
    <div className="text-center">
      <div className="mb-4">
        <p>
          해야 할 일이{' '}
          <span className="text-red-600">{incompleteTodosCount}</span>개
          있습니다.
        </p>
      </div>
      <Button
        variant="primary"
        className="m-2"
        onClick={() => (window.location.href = '/todo')}
      >
        할 일 목록 보기
      </Button>
    </div>
  );
};

export default Authenticated;
