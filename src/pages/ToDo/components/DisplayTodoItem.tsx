import React from 'react';
import Checkbox from '../../../components/CheckBox';
import Button from '../../../components/Button';
import { Todo } from '../../../types/types';

interface DisplayTodoItemProps {
  todo: Todo;
  onToggle: () => void;
  onEdit: () => void;
  onDelete: () => void;
}

const DisplayTodoItem: React.FC<DisplayTodoItemProps> = ({
  todo,
  onToggle,
  onEdit,
  onDelete,
}) => {
  return (
    <div className="w-full flex justify-between">
      <div className="flex gap-4 items-center">
        <Checkbox checked={todo.isCompleted} onChange={onToggle} />
        <span
          className={
            todo.isCompleted
              ? 'line-through text-gray-400'
              : '!text-gray-900 cursor-pointer'
          }
          onClick={onEdit}
        >
          {todo.todo}
        </span>
      </div>
      <div className="flex justify-between gap-2">
        <Button
          onClick={onEdit}
          variant="tertiary"
          size="medium"
          testId="modify-button"
        >
          수정
        </Button>
        <Button
          onClick={onDelete}
          variant="tertiary"
          size="medium"
          className="text-red-500 hover:text-red-700"
          testId="delete-button"
        >
          삭제
        </Button>
      </div>
    </div>
  );
};

export default DisplayTodoItem;
