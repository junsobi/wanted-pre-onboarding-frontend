import React, { useState } from 'react';
import Input from '../../../components/Input';
import Button from '../../../components/Button';
import Checkbox from '../../../components/CheckBox';
import { Todo } from '../../../types/types';

interface EditingTodoItemProps {
  initialEditingValue: string;
  todo: Todo;
  onToggle: () => void;
  onSubmit: (editingValue: string) => void;
  onCancel: () => void;
}

const EditingTodoItem: React.FC<EditingTodoItemProps> = ({
  todo,
  onToggle,
  initialEditingValue,
  onSubmit,
  onCancel,
}) => {
  const [editingValue, setEditingValue] = useState(initialEditingValue);

  const handleEditChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditingValue(e.target.value);
  };

  const handleSubmit = () => {
    if (editingValue.trim()) {
      onSubmit(editingValue);
    }
  };

  return (
    <>
      <div className="flex gap-2 w-3/5">
        <Checkbox checked={todo.isCompleted} onChange={onToggle} />
        <Input
          type="text"
          value={editingValue}
          onChange={handleEditChange}
          placeholder="Edit Todo"
          variant="primary"
          size="medium"
          testId="modify-input"
          className="w-full"
        />
      </div>
      <div className="flex justify-between gap-2">
        <Button
          onClick={handleSubmit}
          variant="tertiary"
          size="medium"
          testId="submit-button"
        >
          제출
        </Button>
        <Button
          onClick={onCancel}
          variant="tertiary"
          size="medium"
          className="text-gray-600 hover:text-gray-900"
          testId="cancel-button"
        >
          취소
        </Button>
      </div>
    </>
  );
};

export default EditingTodoItem;
